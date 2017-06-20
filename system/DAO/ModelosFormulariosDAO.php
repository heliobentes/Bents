<?php

class ModelosFormulariosDAO
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

    //Array de ModeloFormularioModel
    public static function CadastrarModeloFormulario($arrModelos)
    {

        $pdo = self::getConnection();

        /* @var $modelo ModeloFormularioModel */
        foreach ($arrModelos as $modelo) {
            $sql = "INSERT INTO modelos_formularios 
                  (nome,nome_arquivo, nome_unico_do_arquivo,data_cadastro,id_banco,id_usuario_cadastro,id_categoria_modelo_formulario)
                VALUES
                  (:nome,:nome_arquivo, :nome_unico_do_arquivo,SYSDATE(),:id_banco,:id_usuario_cadastro,:id_categoria_modelo_formulario)";

            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(':nome', $modelo->getNomeFormulario());
            $stmt->bindValue(':nome_arquivo', $modelo->getNomeArquivo());
            $stmt->bindValue(':nome_unico_do_arquivo', $modelo->getNomeUnicoDoArquivo());
            $stmt->bindValue(':id_banco', $modelo->getBanco()->getIdBanco());
            $stmt->bindValue(':id_usuario_cadastro', $modelo->getUsuarioCadastro()->getId());
            $stmt->bindValue(':id_categoria_modelo_formulario', $modelo->getIdCategoriaDocumento());

            $stmt->execute();

        }

        return MensagensSistemaModel::MENSAGEM_SUCESSO;
    }

    public static function ObterArraysModelosFormulariosPorFiltro(ModeloFormularioModel $modeloFormulario)
    {

        $pdo = self::getConnection();

        $sql = "SELECT
                            modelos.id,modelos.nome_arquivo,modelos.nome_unico_do_arquivo,modelos.data_cadastro,modelos.nome nome_formulario,
                            bancos.numero numero_banco,bancos.nome nome_banco, categ.categoria descricao_categoria_documento
                        FROM
                            modelos_formularios modelos
                            JOIN usuarios ON (modelos.id_usuario_cadastro=usuarios.id)
                            JOIN bancos ON (bancos.id=modelos.id_banco)
                            JOIN categorias_modelo_formulario categ ON (categ.id=modelos.id_categoria_modelo_formulario)
                        WHERE
                            1=1 ";

        if ($modeloFormulario->getBanco()->getIdBanco())
            $sql .= "AND modelos.id_banco = :id_banco ";

        if ($modeloFormulario->getNomeFormulario())
            $sql .= "AND modelos.nome LIKE :nome ";

        if ($modeloFormulario->getIdCategoriaDocumento())
            $sql .= "AND categ.id = :id_categoria ";

        $sql .= "ORDER BY data_cadastro DESC";


        $stmt = $pdo->prepare($sql);
        //Só posso adicionar os bindValue depois que a query estiver completa,
        //por isso não é possível usar os "ifs" acima para colocar os bindValue abaixo
        //-------------------------------------------------------------------------------
        if ($modeloFormulario->getBanco()->getIdBanco())
            $stmt->bindValue(':id_banco', $modeloFormulario->getBanco()->getIdBanco());

        if ($modeloFormulario->getNomeFormulario())
            $stmt->bindValue(':nome', "%" . $modeloFormulario->getNomeFormulario() . "%");

        if ($modeloFormulario->getIdCategoriaDocumento())
            $stmt->bindValue(':id_categoria', $modeloFormulario->getIdCategoriaDocumento());


        $arrModelosEncontrados = Array();
        try {
            $stmt->execute();

            while ($row = $stmt->fetch()) {

                $modeloEncontrado = new ModeloFormularioModel($row);
                $arrModelosEncontrados[] = $modeloEncontrado;

            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }


        return $arrModelosEncontrados;
    }
}