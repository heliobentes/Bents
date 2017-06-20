<?php

class VeiculoParticipanteModel
{

    private $id;
    private $ano;
    private $valorMercado;
    private $numeroParcelas;
    private $numeroParcelasPagas;
    private $valorParcela;
    private $participante;
    private $idTipoVeiculo;
    private $descricaoTipoVeiculo;
    private $idSituacaoVeiculo;
    private $descricaoSituacaoVeiculo;

    function __construct($registroDoBancoDeDados = "")
    {
        $this->participante = new ParticipanteModel();

        if (isset($registroDoBancoDeDados['ano'])) $this->ano = $registroDoBancoDeDados['ano'];
        if (isset($registroDoBancoDeDados['descricao_situacao_veiculo'])) $this->descricaoSituacaoVeiculo = $registroDoBancoDeDados['descricao_situacao_veiculo'];
        if (isset($registroDoBancoDeDados['descricao_tipo_veiculo'])) $this->descricaoTipoVeiculo = $registroDoBancoDeDados['descricao_tipo_veiculo'];
        if (isset($registroDoBancoDeDados['id_veiculo'])) $this->id = $registroDoBancoDeDados['id_veiculo'];
        if (isset($registroDoBancoDeDados['id_situacao_veiculo'])) $this->idSituacaoVeiculo = $registroDoBancoDeDados['id_situacao_veiculo'];
        if (isset($registroDoBancoDeDados['id_tipo_veiculo'])) $this->idTipoVeiculo = $registroDoBancoDeDados['id_tipo_veiculo'];
        if (isset($registroDoBancoDeDados['numero_parcelas'])) $this->numeroParcelas = $registroDoBancoDeDados['numero_parcelas'];
        if (isset($registroDoBancoDeDados['numero_parcelas_pagas'])) $this->numeroParcelasPagas = $registroDoBancoDeDados['numero_parcelas_pagas'];
        if (isset($registroDoBancoDeDados['valor_mercado'])) $this->valorMercado = $registroDoBancoDeDados['valor_mercado'];
        if (isset($registroDoBancoDeDados['valor_parcela'])) $this->valorParcela = $registroDoBancoDeDados['valor_parcela'];
    }

    /**
     * @param mixed $ano
     */
    public function setAno($ano)
    {
        $this->ano = $ano;
    }

    /**
     * @return mixed
     */
    public function getAno()
    {
        return $this->ano;
    }

    /**
     * @param mixed $descricaoSituacaoVeiculo
     */
    public function setDescricaoSituacaoVeiculo($descricaoSituacaoVeiculo)
    {
        $this->descricaoSituacaoVeiculo = $descricaoSituacaoVeiculo;
    }

    /**
     * @return mixed
     */
    public function getDescricaoSituacaoVeiculo()
    {
        return $this->descricaoSituacaoVeiculo;
    }

    /**
     * @param mixed $descricaoTipoVeiculo
     */
    public function setDescricaoTipoVeiculo($descricaoTipoVeiculo)
    {
        $this->descricaoTipoVeiculo = $descricaoTipoVeiculo;
    }

    /**
     * @return mixed
     */
    public function getDescricaoTipoVeiculo()
    {
        return $this->descricaoTipoVeiculo;
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
     * @param mixed $idSituacaoVeiculo
     */
    public function setIdSituacaoVeiculo($idSituacaoVeiculo)
    {
        $this->idSituacaoVeiculo = $idSituacaoVeiculo;
    }

    /**
     * @return mixed
     */
    public function getIdSituacaoVeiculo()
    {
        return $this->idSituacaoVeiculo;
    }

    /**
     * @param mixed $idTipoVeiculo
     */
    public function setIdTipoVeiculo($idTipoVeiculo)
    {
        $this->idTipoVeiculo = $idTipoVeiculo;
    }

    /**
     * @return mixed
     */
    public function getIdTipoVeiculo()
    {
        return $this->idTipoVeiculo;
    }

    /**
     * @param mixed $numeroParcelas
     */
    public function setNumeroParcelas($numeroParcelas)
    {
        $this->numeroParcelas = $numeroParcelas;
    }

    /**
     * @return mixed
     */
    public function getNumeroParcelas()
    {
        return $this->numeroParcelas;
    }

    /**
     * @param mixed $numeroParcelasPagas
     */
    public function setNumeroParcelasPagas($numeroParcelasPagas)
    {
        $this->numeroParcelasPagas = $numeroParcelasPagas;
    }

    /**
     * @return mixed
     */
    public function getNumeroParcelasPagas()
    {
        return $this->numeroParcelasPagas;
    }

    /**
     * @param mixed $participante
     */
    public function setParticipante($participante)
    {
        $this->participante = $participante;
    }

    /**
     * @return mixed
     */
    public function getParticipante()
    {
        return $this->participante;
    }

    /**
     * @param mixed $valorMercado
     */
    public function setValorMercado($valorMercado)
    {
        $this->valorMercado = $valorMercado;
    }

    /**
     * @return mixed
     */
    public function getValorMercado()
    {
        return $this->valorMercado;
    }

    /**
     * @param mixed $valorParcela
     */
    public function setValorParcela($valorParcela)
    {
        $this->valorParcela = $valorParcela;
    }

    /**
     * @return mixed
     */
    public function getValorParcela()
    {
        return $this->valorParcela;
    }


}