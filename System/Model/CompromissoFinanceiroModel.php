<?php

class CompromissoFinanceiroModel
{
    private $idParticipante;
    private $idTipoCompromisso;
    private $tipoCompromisso;
    private $numeroParcelas;
    private $numeroParcelasPagas;
    private $valorParcela;
    private $dataUltimaParcelaPaga;
    private $nomeInstituicaoFinanceira;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['id_tipo_compromisso'])) $this->idTipoCompromisso = $registroDoBancoDeDados['id_tipo_compromisso'];
        if (isset($registroDoBancoDeDados['numero_parcelas'])) $this->numeroParcelas = $registroDoBancoDeDados['numero_parcelas'];
        if (isset($registroDoBancoDeDados['numero_parcelas_pagas'])) $this->numeroParcelasPagas = $registroDoBancoDeDados['numero_parcelas_pagas'];
        if (isset($registroDoBancoDeDados['tipo_compromisso'])) $this->tipoCompromisso = $registroDoBancoDeDados['tipo_compromisso'];
        if (isset($registroDoBancoDeDados['valor_parcela'])) $this->valorParcela = $registroDoBancoDeDados['valor_parcela'];
        if (isset($registroDoBancoDeDados['data_ultima_parcela_paga'])) $this->dataUltimaParcelaPaga = $registroDoBancoDeDados['data_ultima_parcela_paga'];

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
     * @param mixed $idTipoCompromisso
     */
    public function setIdTipoCompromisso($idTipoCompromisso)
    {
        $this->idTipoCompromisso = $idTipoCompromisso;
    }

    /**
     * @return mixed
     */
    public function getIdTipoCompromisso()
    {
        return $this->idTipoCompromisso;
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
     * @param mixed $tipoCompromisso
     */
    public function setTipoCompromisso($tipoCompromisso)
    {
        $this->tipoCompromisso = $tipoCompromisso;
    }

    /**
     * @return mixed
     */
    public function getTipoCompromisso()
    {
        return $this->tipoCompromisso;
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

    /**
     * @param mixed $dataUltimaParcelaPaga
     */
    public function setDataUltimaParcelaPaga($dataUltimaParcelaPaga)
    {
        $this->dataUltimaParcelaPaga = $dataUltimaParcelaPaga;
    }

    /**
     * @return mixed
     */
    public function getDataUltimaParcelaPaga()
    {
        return $this->dataUltimaParcelaPaga;
    }


}

?>
