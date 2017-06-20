<?php

class ImovelParticipanteModel implements JsonSerializable
{

    private $id;
    private $cidade;
    private $uf;
    private $valor;
    private $idParticipante;
    private $idTipoImovel;
    private $descricaoTipoImovel;
    private $matricula;
    private $dataCadastro;
    private $idUsuarioCadastro;

    private $arrayDocumentos;

    function __construct($registroDoBancoDeDados = "")
    {

        $this->arrayDocumentos = Array();

        if (isset($registroDoBancoDeDados['cidade_imovel'])) $this->cidade = $registroDoBancoDeDados['cidade_imovel'];
        if (isset($registroDoBancoDeDados['descricao_tipo_imovel'])) $this->descricaoTipoImovel = $registroDoBancoDeDados['descricao_tipo_imovel'];
        if (isset($registroDoBancoDeDados['id_imovel'])) $this->id = $registroDoBancoDeDados['id_imovel'];
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['id_tipo_imovel'])) $this->idTipoImovel = $registroDoBancoDeDados['id_tipo_imovel'];
        if (isset($registroDoBancoDeDados['uf_imovel'])) $this->uf = $registroDoBancoDeDados['uf_imovel'];
        if (isset($registroDoBancoDeDados['valor'])) $this->valor = $registroDoBancoDeDados['valor'];
        if (isset($registroDoBancoDeDados['matricula'])) $this->matricula = $registroDoBancoDeDados['matricula'];
        if (isset($registroDoBancoDeDados['data_cadastro'])) $this->dataCadastro = $registroDoBancoDeDados['data_cadastro'];
        if (isset($registroDoBancoDeDados['id_usuario_cadastro'])) $this->idUsuarioCadastro = $registroDoBancoDeDados['id_usuario_cadastro'];
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    /**
     * @param mixed $cidade
     */
    public function setCidade($cidade)
    {
        $this->cidade = $cidade;
    }

    /**
     * @return mixed
     */
    public function getCidade()
    {
        return $this->cidade;
    }

    /**
     * @param mixed $descricaoTipoImovel
     */
    public function setDescricaoTipoImovel($descricaoTipoImovel)
    {
        $this->descricaoTipoImovel = $descricaoTipoImovel;
    }

    /**
     * @return mixed
     */
    public function getDescricaoTipoImovel()
    {
        return $this->descricaoTipoImovel;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $idParticipante
     */
    public function setIdParticipante($idParticipante)
    {
        $this->idParticipante = $idParticipante;
    }

    /**
     * @return mixed
     */
    public function getIdParticipante()
    {
        return $this->idParticipante;
    }

    /**
     * @param mixed $idTipoImovel
     */
    public function setIdTipoImovel($idTipoImovel)
    {
        $this->idTipoImovel = $idTipoImovel;
    }

    /**
     * @return mixed
     */
    public function getIdTipoImovel()
    {
        return $this->idTipoImovel;
    }

    /**
     * @param mixed $uf
     */
    public function setUf($uf)
    {
        $this->uf = $uf;
    }

    /**
     * @return mixed
     */
    public function getUf()
    {
        return $this->uf;
    }

    /**
     * @param mixed $valor
     */
    public function setValor($valor)
    {
        $this->valor = $valor;
    }

    /**
     * @return mixed
     */
    public function getValor()
    {
        return $this->valor;
    }

    /**
     * @param mixed $matricula
     */
    public function setMatricula($matricula)
    {
        $this->matricula = $matricula;
    }

    /**
     * @return mixed
     */
    public function getMatricula()
    {
        return $this->matricula;
    }

    /**
     * @param mixed $dataCadastro
     */
    public function setDataCadastro($dataCadastro)
    {
        $this->dataCadastro = $dataCadastro;
    }

    /**
     * @return mixed
     */
    public function getDataCadastro()
    {
        return $this->dataCadastro;
    }

    /**
     * @param mixed $idUsuarioCadastro
     */
    public function setIdUsuarioCadastro($idUsuarioCadastro)
    {
        $this->idUsuarioCadastro = $idUsuarioCadastro;
    }

    /**
     * @return mixed
     */
    public function getIdUsuarioCadastro()
    {
        return $this->idUsuarioCadastro;
    }


    /**
     * @param \DocumentoParticipanteModel[] $arrayDocumentos
     */
    public function setArrayDocumentos($arrayDocumentos)
    {
        $this->arrayDocumentos = $arrayDocumentos;
    }

    /**
     * @return \DocumentoParticipanteModel[]
     */
    public function getArrayDocumentos()
    {
        return $this->arrayDocumentos;
    }

    //</editor-fold>


}