<?php

class OcorrenciasFinanciamentoModel
{

    private $idOcorrencia;
    private $dataOcorrencia;
    private $descricao;
    private $idFinanciamento;
    private $idUsuarioCadastroOcorrencia;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['data_ocorrencia'])) $this->dataOcorrencia = $registroDoBancoDeDados['data_ocorrencia'];
        if (isset($registroDoBancoDeDados['descricao'])) $this->descricao = $registroDoBancoDeDados['descricao'];
        if (isset($registroDoBancoDeDados['id_financiamento'])) $this->idFinanciamento = $registroDoBancoDeDados['id_financiamento'];
        if (isset($registroDoBancoDeDados['id_ocorrencia'])) $this->idOcorrencia = $registroDoBancoDeDados['id_ocorrencia'];
        if (isset($registroDoBancoDeDados['id_usuario_cadastro_ocorrencia'])) $this->idUsuarioCadastroOcorrencia = $registroDoBancoDeDados['id_usuario_cadastro_ocorrencia'];
    }

    /**
     * @param mixed $dataOcorrencia
     */
    public function setDataOcorrencia($dataOcorrencia)
    {
        $this->dataOcorrencia = $dataOcorrencia;
    }

    /**
     * @return mixed
     */
    public function getDataOcorrencia()
    {
        return $this->dataOcorrencia;
    }

    /**
     * @param mixed $descricao
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    /**
     * @return mixed
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * @param mixed $idFinanciamento
     */
    public function setIdFinanciamento($idFinanciamento)
    {
        $this->idFinanciamento = $idFinanciamento;
    }

    /**
     * @return mixed
     */
    public function getIdFinanciamento()
    {
        return $this->idFinanciamento;
    }

    /**
     * @param mixed $idOcorrencia
     */
    public function setIdOcorrencia($idOcorrencia)
    {
        $this->idOcorrencia = $idOcorrencia;
    }

    /**
     * @return mixed
     */
    public function getIdOcorrencia()
    {
        return $this->idOcorrencia;
    }

    /**
     * @param mixed $idUsuarioCadastroOcorrencia
     */
    public function setIdUsuarioCadastroOcorrencia($idUsuarioCadastroOcorrencia)
    {
        $this->idUsuarioCadastroOcorrencia = $idUsuarioCadastroOcorrencia;
    }

    /**
     * @return mixed
     */
    public function getIdUsuarioCadastroOcorrencia()
    {
        return $this->idUsuarioCadastroOcorrencia;
    }


}