<?php
//
//require_once "lib/DB_Connect.php";
//require_once 'Model/ModelCargos.php';
//require_once 'Model/ModelSegmentos.php';
//require_once 'Model/ModelUnidadeLotacao.php';

class EmpresaDAO
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

    public static function CadastrarEmpresaEObterSeuId(EmpresaModel $empresa)
    {
        $pdo = self::getConnection();

        $sql = "INSERT INTO empresas
                        (nome_fantasia,razao_social,cnpj,inscricao_estadual,email,tel_contato_1,
                        tel_contato_2,nome_pessoa_contato,site,cidade,uf,logradouro,numero,complemento,bairro,cep,tipo_empresa_id)
                VALUES
                        (:nome_fantasia,:razao_social,:cnpj,:inscricao_estadual,:email,
                        :tel_contato_1,:tel_contato_2,:nome_pessoa_contato,:site,:cidade,:uf,:logradouro,:numero,:complemento,:bairro,:cep,:tipo_empresa_id)";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':nome_fantasia', $empresa->getNomeFantasia());
        $stmt->bindValue(':razao_social', $empresa->getNomeFantasia());
        $stmt->bindValue(':cnpj', $empresa->getCnpj());
        $stmt->bindValue(':inscricao_estadual', $empresa->getInscricaoEstadual());
        $stmt->bindValue(':email', $empresa->getEmail());
        $stmt->bindValue(':tel_contato_1', $empresa->getTelefoneContato1());
        $stmt->bindValue(':tel_contato_2', $empresa->getTelefoneContato2());
        $stmt->bindValue(':nome_pessoa_contato', $empresa->getNomePessoaContato());
        $stmt->bindValue(':site', $empresa->getSite());
        $stmt->bindValue(':cidade', $empresa->getEndereco()->getCidade());
        $stmt->bindValue(':uf', $empresa->getEndereco()->getUf());
        $stmt->bindValue(':logradouro', $empresa->getEndereco()->getLogradouro());
        $stmt->bindValue(':numero', $empresa->getEndereco()->getNumero());
        $stmt->bindValue(':bairro', $empresa->getEndereco()->getBairro());
        $stmt->bindValue(':cep', $empresa->getEndereco()->getCep());
        $stmt->bindValue(':complemento', $empresa->getEndereco()->getComplemento());
        $stmt->bindValue(':tipo_empresa_id', $empresa->getTipoEmpresa());

        $stmt->execute();

        $ultimoIdParticipanteInserido = '';
        $ultimoIdParticipanteInserido = $pdo->lastInsertId('id');

        return $ultimoIdParticipanteInserido;

    }

    public static function EditarEmpresaPorIdEmpresa(EmpresaModel $empresa)
    {
        $pdo = self::getConnection();

        $sql = "UPDATE 
                        empresas
                SET
                        nome_fantasia=:nome_fantasia,
                        razao_social=:razao_social,
                        cnpj=:cnpj,
                        inscricao_estadual=:inscricao_estadual,
                        email=:email,
                        tel_contato_1=:tel_contato_1,
                        tel_contato_2=:tel_contato_2,
                        nome_pessoa_contato=:nome_pessoa_contato,
                        site=:site,
                        cidade=:cidade,
                        uf=:uf,
                        logradouro=:logradouro,
                        numero=:numero,
                        bairro=:bairro,
                        cep=:cep,
                        tipo=:tipo
                WHERE
                        id=:id";

        $stmt = $pdo->prepare($sql);


        $stmt->bindValue(':nome_fantasia', $empresa->getNomeFantasia());
        $stmt->bindValue(':razao_social', $empresa->getRazaoSocial());
        $stmt->bindValue(':cnpj', $empresa->getCnpj());
        $stmt->bindValue(':inscricao_estadual', $empresa->getInscricaoEstadual());
        $stmt->bindValue(':email', $empresa->getEmail());
        $stmt->bindValue(':tel_contato_1', $empresa->getTelefoneContato1());
        $stmt->bindValue(':tel_contato_2', $empresa->getTelefoneContato2());
        $stmt->bindValue(':nome_pessoa_contato', $empresa->getNomePessoaContato());
        $stmt->bindValue(':site', $empresa->getSite());
        $stmt->bindValue(':id', $empresa->getId());
        $stmt->bindValue(':cidade', $empresa->getEndereco()->getCidade());
        $stmt->bindValue(':uf', $empresa->getEndereco()->getUf());
        $stmt->bindValue(':logradouro', $empresa->getEndereco()->getLogradouro());
        $stmt->bindValue(':numero', $empresa->getEndereco()->getNumero());
        $stmt->bindValue(':bairro', $empresa->getEndereco()->getBairro());
        $stmt->bindValue(':cep', $empresa->getEndereco()->getCep());
        $stmt->bindValue(':tipo', $empresa->getTipoEmpresa());

        try {
            $stmt->execute();
            $GLOBALS['msg'] = "ok";
        } catch (Exception $e) {
            throw $e;
            $GLOBALS['msgerro'] = "ok";
            //echo $e->getMessage();
        }
    }

    public static function DeletarEmpresaPorIdEmpresa(ModelEmpresa $empresa)
    {
        $pdo = self::getConnection();

        $sql = "DELETE FROM empresas WHERE id=:id";

        $stmt = $pdo->prepare($sql);

        $stmt->bindValue(':id', $empresa->getId());

        try {
            $stmt->execute();
        } catch (Exception $e) {

            echo $e->getMessage();
        }
    }

    public static function ObterArrayEmpresasCorrespondentesPorFiltro(EmpresaModel $empresa)
    {
        $pdo = self::getConnection();

        $sql = "SELECT
                        id,nome_fantasia,razao_social,
                        cnpj,inscricao_estadual,email,
                        tel_contato_1,tel_contato_2,
                        site,logradouro,numero,complemento,cidade,uf,bairro,cep
                FROM
                        empresas
                WHERE
                        tipo_empresa_id = 2 ";

        if ($empresa->getId())
            $sql .= "AND id = :id";

        if ($empresa->getNomeFantasia())
            $sql .= "AND nome_fantasia LIKE :nome_fantasia";

        if ($empresa->getRazaoSocial())
            $sql .= "AND razao_social LIKE :razao_social";

        if ($empresa->getCnpj())
            $sql .= "AND cnpj LIKE :cnpj";

        if ($empresa->getInscricaoEstadual())
            $sql .= "AND inscricao_estadual LIKE :inscricao_estadual";

        if ($empresa->getEmail())
            $sql .= "AND email LIKE :email";

        if ($empresa->getTelefoneContato1())
            $sql .= "AND tel_contato_1 LIKE :tel_contato_1";

        if ($empresa->getTelefoneContato2())
            $sql .= "AND tel_contato_2 LIKE :tel_contato_2";

        if ($empresa->getSite())
            $sql .= "AND site LIKE :site";

        if ($empresa->getEndereco()->getCidade())
            $sql .= "AND cidade LIKE :cidade";

        if ($empresa->getEndereco()->getUf())
            $sql .= "AND uf LIKE :uf";

        if ($empresa->getEndereco()->getBairro())
            $sql .= "AND bairro LIKE :bairro";


        //Independente das "bindValue", a query já está pronta. Preparando-a...
        $stmt = $pdo->prepare($sql);

        //Só posso adicionar os bindValue depois que a query estiver completa,
        //por isso não é possível usar os "ifs" acima para colocar os bindValue abaixo
        //-------------------------------------------------------------------------------
        if ($empresa->getId())
            $stmt->bindValue(':id', $empresa->getId());

        if ($empresa->getNomeFantasia())
            $stmt->bindValue(':nome_fantasia', "%" . $empresa->getNomeFantasia() . "%");

        if ($empresa->getRazaoSocial())
            $stmt->bindValue(':razao_social', "%" . $empresa->getRazaoSocial() . "%");

        if ($empresa->getCnpj())
            $stmt->bindValue(':cnpj', "%" . $empresa->getCnpj() . "%");

        if ($empresa->getInscricaoEstadual())
            $stmt->bindValue(':inscricao_estadual', "%" . $empresa->getInscricaoEstadual() . "%");

        if ($empresa->getEmail())
            $stmt->bindValue(':email', "%" . $empresa->getEmail() . "%");

        if ($empresa->getTelefoneContato1())
            $stmt->bindValue(':tel_contato_1', "%" . $empresa->getTelefoneContato1() . "%");

        if ($empresa->getTelefoneContato2())
            $stmt->bindValue(':tel_contato_2', "%" . $empresa->getTelefoneContato2() . "%");

        if ($empresa->getSite())
            $stmt->bindValue(':site', "%" . $empresa->getSite() . "%");

        if ($empresa->getEndereco()->getCidade())
            $stmt->bindValue(':cidade', "%" . $empresa->getEndereco()->getCidade() . "%");

        if ($empresa->getEndereco()->getUf())
            $stmt->bindValue(':uf', "%" . $empresa->getEndereco()->getUf() . "%");

        if ($empresa->getEndereco()->getBairro())
            $stmt->bindValue(':bairro', "%" . $empresa->getEndereco()->getBairro() . "%");

        //-------------------------------------------------------------------------------

        try {
            $stmt->execute();

            $arrEmpresasEncontradas = Array();

            while ($row = $stmt->fetch()) {
                $empresaEncontrada = new EmpresaModel($row);
                $arrEmpresasEncontradas[] = $empresaEncontrada;
            }
        } catch (Exception $e) {

            echo $e->getMessage();
        }

        return $arrEmpresasEncontradas;
    }

}

?>
