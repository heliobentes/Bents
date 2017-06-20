<?php

//require_once "lib/DB_Connect.php";
//require_once 'Model/ModelUsuario.php';
//require_once 'Model/ModelTiposUsuario.php';

class UsuarioDAO
{

    private static $dbConn = null;

    function __construct()
    {
        //parent::__construct();
        self::initializeConnection();
    }

    private static function initializeConnection()
    {
        if (is_null(self::$dbConn)) {
            self::$dbConn = DatabasePDO::getInstance();
        }
    }

    private static function getConnection()
    {
        self::initializeConnection();
        return self::$dbConn;
    }

    public static function CadastrarUsuarioEObterSeuID(UsuarioModel $usuario)
    {

        $pdo = self::getConnection();
        $sql = "SELECT count(1) existe FROM usuarios WHERE login = :login";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':login', $usuario->getLogin());
        $stmt->execute();
        $row = $stmt->fetch();

        if ($row['existe'] > 0) {
            die('O login ' . $usuario->getLogin() . ' já existe!');
        }


        $pdo = self::getConnection();

        $sql = "INSERT INTO usuarios 
			(login,senha,salt,email,nome,id_tipo_usuario,eh_usuario_ativo,data_cadastro)
			VALUES
			(:login,:senha,:salt,:email,:nome,:id_tipo_usuario,:eh_usuario_ativo,SYSDATE())";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':login', $usuario->getLogin());
        $stmt->bindValue(':senha', $usuario->getSenha());
        $stmt->bindValue(':email', $usuario->getEmail());
        $stmt->bindValue(':nome', $usuario->getNome());
        $stmt->bindValue(':id_tipo_usuario', $usuario->getIdTipoUsuario());
        $stmt->bindValue(':salt', $usuario->getSalt());
        $stmt->bindValue(':eh_usuario_ativo', '1');

        try {
            $stmt->execute();

            $ultimoIdUsuarioInserido = '';
            $ultimoIdUsuarioInserido = $pdo->lastInsertId('id');
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $ultimoIdUsuarioInserido;
    }

    public static function EditarUsuarioPorIdUsuario(UsuarioModel $usuario)
    {
        $pdo = self::getConnection();

        $sql = "UPDATE 
			          usuarios
			        SET
			          id=:id_usuario";


        if ($usuario->getNome()) {
            $sql .= ", nome=:nome ";
        }

        if ($usuario->getIdTipoUsuario()) {
            $sql .= ", id_tipo_usuario=:id_tipo_usuario ";
        }
        $sql .= " WHERE
			id = :id_usuario";

        $stmt = $pdo->prepare($sql);

        if ($usuario->getNome()) {
            $stmt->bindValue(':nome', $usuario->getNome());
        }
        if ($usuario->getIdTipoUsuario()) {
            $stmt->bindValue(':id_tipo_usuario', $usuario->getIdTipoUsuario());
        }
        $stmt->bindValue(':id_usuario', $usuario->getId());

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }


    }

    public static function ObterArrayUsuariosPorFiltro(UsuarioModel $usuario)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
			usu.id id_usuario,
			usu.nome,
			usu.login,
			usu.salt,
			usu.senha,
			usu.email,
			usu.id_empresa_gestora,
			usu.id_tipo_usuario,
			usu.data_cadastro,
			usu.eh_usuario_ativo,
			tipo.nome tipo_usuario
			FROM
			usuarios usu
			LEFT JOIN tipos_usuario tipo ON (tipo.id = usu.id_tipo_usuario)
			WHERE
			usu.eh_usuario_ativo =:eh_usuario_ativo ";

        if ($usuario->getId())
            $sql .= "AND usu.id = :id_usuario ";

        if ($usuario->getLogin())
            $sql .= "AND usu.login = :login ";

        if ($usuario->getNome())
            $sql .= "AND usu.nome LIKE :nome ";

        if ($usuario->getIdTipoUsuario())
            $sql .= "AND usu.id_tipo_usuario =:id_tipo_usuario ";

        $arrUsuariosEncontrados = Array();

        $stmt = $pdo->prepare($sql);

        //Só posso adicionar os bindValue depois que a query estiver completa,
        //por isso não é possível usar os "ifs" acima para colocar os bindValue abaixo
        //-------------------------------------------------------------------------------

        if ($usuario->getId())
            $stmt->bindValue(':id_usuario', $usuario->getId());

        if ($usuario->getLogin())
            $stmt->bindValue(':login', $usuario->getLogin());

        if ($usuario->getNome())
            $stmt->bindValue(':nome', "%" . $usuario->getNome() . "%");

        if ($usuario->getIdTipoUsuario())
            $stmt->bindValue(':id_tipo_usuario', $usuario->getIdTipoUsuario());

        $stmt->bindValue(':eh_usuario_ativo', 1);
        //-------------------------------------------------------------------------------

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $usuarioEncontrado = new UsuarioModel($row);
                $arrUsuariosEncontrados[] = $usuarioEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrUsuariosEncontrados;
    }

    public static function ObterArrayTipoUsuario()
    {
        $pdo = self::getConnection();

        $sql = "SELECT id,descricao FROM tipo_usuario ORDER BY descricao ASC";

        $stmt = $pdo->prepare($sql);

        $arrTiposUsuarioEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $tipoUsuarioEncontrado = new ModelTiposUsuario($row);
                $arrTiposUsuarioEncontrados[] = $tipoUsuarioEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrTiposUsuarioEncontrados;
    }

    /**
     * Verifica se a senhda digitada bate com a atual
     *
     * @param mixed $senhaAtual
     */
    public static function VerificarSenhaAtual($senhaAtual)
    {
        $pdo = self::getConnection();
        $sql1 = "SELECT salt FROM usuarios WHERE id = :id";

        $stmt1 = $pdo->prepare($sql1);
        $idUsuario = $_SESSION['id_usuario'];
        $stmt1->bindValue(':id', $idUsuario);
        $stmt1->execute();
        $row = $stmt1->fetch();

        $senha = PasswordUtils::CodificarSenha($senhaAtual, $row['salt']);

        $pdo = self::getConnection();
        $sql = "SELECT count(1) senha_confere FROM usuarios WHERE id = :id AND senha = :senha";

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id', $_SESSION['id_usuario']);
        $stmt->bindValue(':senha', $senha);
        $stmt->execute();
        $row = $stmt->fetch();

        if ($row['senha_confere'] > 0) {
            return true;

        } else {
            return false;
        }
    }

    /**
     * Altera Senha do Usuário
     *
     * @param UsuarioModel $usuario
     */
    public static function AlterarSenhaPorIdUsuario(UsuarioModel $usuario)
    {
        $pdo = self::getConnection();

        $sql = "UPDATE 
			usuarios
			SET
			senha=:senha,
			salt = :salt
			WHERE
			id=:id_usuario";


        $stmt = $pdo->prepare($sql);


        $stmt->bindValue(':senha', $usuario->getNovaSenha());
        $stmt->bindValue(':salt', $usuario->getSalt());

        $stmt->bindValue(':id_usuario', $usuario->getId());

        $stmt->execute();
        return true;
    }

    public static function DeletaUsuario(UsuarioModel $usuario)
    {
        $pdo = self::getConnection();

        $sql = "UPDATE 
			usuarios
			SET
			eh_usuario_ativo=0
			WHERE
			id=:id_usuario";


        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_usuario', $usuario->getId());

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @return string
     */
    public static function ExcluirUsuarioPorSeuId($idUsuario)
    {
        $pdo = self::getConnection();

        $sql = "DELETE FROM usuarios WHERE id=:id_usuario";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_usuario', $idUsuario);

        try {
            $stmt->execute();
            return MensagensSistemaModel::MENSAGEM_SUCESSO;

        } catch (Exception $e) {

        }

        return MensagensSistemaModel::MENSAGEM_ERRO;
    }

    public static function ObterFuncoesPermitidasPorIdUsuario($idUsuario)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        funcoes.id id_funcao,funcoes.nome nome_funcao,
                        modulos.nome nome_modulo,modulos.id id_modulo
                    FROM
                        usuarios_funcoes u_func
                        JOIN modulos_funcoes funcoes ON (funcoes.id = u_func.modulos_funcoes_id)
                        JOIN modulos_sistema modulos ON (modulos.id=funcoes.id_modulo_sistema)
                    WHERE
	                    u_func.id_usuario=:id_usuario";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_usuario', $idUsuario);

        $arrFuncoesEncontradas = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $funcaoEncontrada = new FuncoesSistemaModel($row);
                $arrFuncoesEncontradas[] = $funcaoEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrFuncoesEncontradas;
    }

    public static function ObterModulosPermitidosPorIdUsuario($idUsuario)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        modulos.id id_modulo,modulos.nome nome_modulo
                    FROM
                        usuarios_modulos u_modulos
                        LEFT JOIN modulos_sistema modulos ON (modulos.id=u_modulos.id_modulo)
                    WHERE
                        id_usuario=:id_usuario";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id_usuario', $idUsuario);

        $arrModulosEncontrados = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {
                $moduloEncontrado = new ModuloSistemaModel($row);
                $arrModulosEncontrados[] = $moduloEncontrado;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrModulosEncontrados;
    }

    public static function UsuarioTemPermissaoAoModulo($idUsuario, $descricaoModulo)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        modulos.id id_modulo,modulos.nome nome_modulo
                    FROM
                        usuarios_modulos u_modulos
                        LEFT JOIN modulos_sistema modulos ON (modulos.id=u_modulos.id_modulo)
                    WHERE
                        id_usuario=:id_usuario
                        AND LOWER(modulos.nome) = LOWER(:descricao_modulo)";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':descricao_modulo', $descricaoModulo);
        $stmt->bindValue(':id_usuario', $idUsuario);

        try {
            $stmt->execute();

            if ($stmt->fetch()) {

                return true;
            }

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return false;
    }

    public static function UsuarioTemPermissaoAFuncao($idUsuario, $descricaoModulo, $descricaoFuncao)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        funcoes.id,funcoes.nome,funcoes.id_modulo_sistema
                    FROM
                        usuarios_funcoes u_funcoes
                        LEFT JOIN modulos_funcoes funcoes ON (funcoes.id=u_funcoes.modulos_funcoes_id)
                    WHERE
                        u_funcoes.id_usuario=:id_usuario
                        AND LOWER(funcoes.nome) = LOWER(:descricao_funcao)
                        AND funcoes.id_modulo_sistema=(SELECT id FROM modulos_sistema WHERE LOWER(nome) = LOWER(:descricao_modulo))";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':descricao_modulo', $descricaoModulo);
        $stmt->bindValue(':descricao_funcao', $descricaoFuncao);
        $stmt->bindValue(':id_usuario', $idUsuario);

        try {
            $stmt->execute();

            if ($stmt->fetch()) {

                return true;
            }

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return false;
    }

    public static function ObterTodasFuncoesDoSistema()
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        mod_func.id id_funcao,mod_func.nome nome_funcao,mod_func.nome_view,
                        modulos.id id_modulo,modulos.nome nome_modulo
                    FROM
                        modulos_funcoes mod_func
                        JOIN modulos_sistema modulos ON (mod_func.id_modulo_sistema=modulos.id)
                    ORDER BY modulos.id ASC";

        $stmt = $pdo->prepare($sql);

        $arrayFuncoesEncontradas = Array();

        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $funcao = new FuncoesSistemaModel($row);
                $arrayFuncoesEncontradas[] = $funcao;

            }

        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrayFuncoesEncontradas;
    }

}