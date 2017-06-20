<?php

class StatusInteracaoModel
{

    private $id;
    private $dataStatus;
    private $idFinanciamento;
    private $idInteracaoAtual;
    private $descricaoInteracaoAtual;
    private $idProximaInteracao;
    private $descricaoProximaInteracao;
    private $idStatusInteracao;
    private $descricaoStatusInteracao;
    private $numeroDiasEntreHojeEDataStatusAtual;
    private $idUsuarioCadastroInteracao;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['data_status'])) $this->dataStatus = $registroDoBancoDeDados['data_status'];
        if (isset($registroDoBancoDeDados['id'])) $this->id = $registroDoBancoDeDados['id'];
        if (isset($registroDoBancoDeDados['id_financiamento'])) $this->idFinanciamento = $registroDoBancoDeDados['id_financiamento'];

        if (isset($registroDoBancoDeDados['id_interacao_atual'])) $this->idInteracaoAtual = $registroDoBancoDeDados['id_interacao_atual'];
        if (isset($registroDoBancoDeDados['descricao_interacao_atual'])) $this->descricaoInteracaoAtual = $registroDoBancoDeDados['descricao_interacao_atual'];
        if (isset($registroDoBancoDeDados['id_proxima_interacao'])) $this->idProximaInteracao = $registroDoBancoDeDados['id_proxima_interacao'];
        if (isset($registroDoBancoDeDados['descricao_proxima_interacao'])) $this->descricaoProximaInteracao = $registroDoBancoDeDados['descricao_proxima_interacao'];

        if (isset($registroDoBancoDeDados['id_status_interacao'])) $this->idStatusInteracao = $registroDoBancoDeDados['id_status_interacao'];
        if (isset($registroDoBancoDeDados['descricao_status_interacao'])) $this->descricaoStatusInteracao = $registroDoBancoDeDados['descricao_status_interacao'];

        if (isset($registroDoBancoDeDados['dias_ate_hoje'])) $this->numeroDiasEntreHojeEDataStatusAtual = $registroDoBancoDeDados['dias_ate_hoje'];

        if (isset($registroDoBancoDeDados['id_usuario_cadastro_iteracao'])) $this->idUsuarioCadastroInteracao = $registroDoBancoDeDados['id_usuario_cadastro_iteracao'];


    }

    /**
     * @param mixed $dataStatus
     */
    public function setDataStatus($dataStatus)
    {
        $this->dataStatus = $dataStatus;
    }

    /**
     * @return mixed
     */
    public function getDataStatus()
    {
        return $this->dataStatus;
    }

    /**
     * @param mixed $descricaoInteracaoAtual
     */
    public function setDescricaoInteracaoAtual($descricaoInteracaoAtual)
    {
        $this->descricaoInteracaoAtual = $descricaoInteracaoAtual;
    }

    /**
     * @return mixed
     */
    public function getDescricaoInteracaoAtual()
    {
        return $this->descricaoInteracaoAtual;
    }

    /**
     * @param mixed $descricaoProximaInteracao
     */
    public function setDescricaoProximaInteracao($descricaoProximaInteracao)
    {
        $this->descricaoProximaInteracao = $descricaoProximaInteracao;
    }

    /**
     * @return mixed
     */
    public function getDescricaoProximaInteracao()
    {
        return $this->descricaoProximaInteracao;
    }

    /**
     * @param mixed $descricaoStatusFinanciamento
     */
    public function setDescricaoStatusFinanciamento($descricaoStatusFinanciamento)
    {
        $this->descricaoStatusFinanciamento = $descricaoStatusFinanciamento;
    }

    /**
     * @return mixed
     */
    public function getDescricaoStatusFinanciamento()
    {
        return $this->descricaoStatusInteracao;
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
     * @param mixed $idInteracaoAtual
     */
    public function setIdInteracaoAtual($idInteracaoAtual)
    {
        $this->idInteracaoAtual = $idInteracaoAtual;
    }

    /**
     * @return mixed
     */
    public function getIdInteracaoAtual()
    {
        return $this->idInteracaoAtual;
    }

    /**
     * @param mixed $idProximaInteracao
     */
    public function setIdProximaInteracao($idProximaInteracao)
    {
        $this->idProximaInteracao = $idProximaInteracao;
    }

    /**
     * @return mixed
     */
    public function getIdProximaInteracao()
    {
        return $this->idProximaInteracao;
    }


    /**
     * @param mixed $numeroDiasEntreHojeEDataStatusAtual
     */
    public function setNumeroDiasEntreHojeEDataStatusAtual($numeroDiasEntreHojeEDataStatusAtual)
    {
        $this->numeroDiasEntreHojeEDataStatusAtual = $numeroDiasEntreHojeEDataStatusAtual;
    }

    /**
     * @return mixed
     */
    public function getNumeroDiasEntreHojeEDataStatusAtual()
    {
        return $this->numeroDiasEntreHojeEDataStatusAtual;
    }

    /**
     * @param mixed $idUsuarioCadastroInteracao
     */
    public function setIdUsuarioCadastroInteracao($idUsuarioCadastroInteracao)
    {
        $this->idUsuarioCadastroInteracao = $idUsuarioCadastroInteracao;
    }

    /**
     * @return mixed
     */
    public function getIdUsuarioCadastroInteracao()
    {
        return $this->idUsuarioCadastroInteracao;
    }

    /**
     * @param mixed $descricaoStatusInteracao
     */
    public function setDescricaoStatusInteracao($descricaoStatusInteracao)
    {
        $this->descricaoStatusInteracao = $descricaoStatusInteracao;
    }

    /**
     * @return mixed
     */
    public function getDescricaoStatusInteracao()
    {
        return $this->descricaoStatusInteracao;
    }

    /**
     * @param mixed $idStatusInteracao
     */
    public function setIdStatusInteracao($idStatusInteracao)
    {
        $this->idStatusInteracao = $idStatusInteracao;
    }

    /**
     * @return mixed
     */
    public function getIdStatusInteracao()
    {
        return $this->idStatusInteracao;
    }
}