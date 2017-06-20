<?php

class FonteRendaModel
{
    private $idParticipante;
    private $ehFonteComprovada;
    private $descricaoFonte;
    private $cargo;
    private $valorBruto;
    private $valorLiquido;
    private $dataInicio;


    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['eh_fonte_comprovada'])) $this->ehFonteComprovada = $registroDoBancoDeDados['eh_fonte_comprovada'];
        if (isset($registroDoBancoDeDados['descricao_fonte'])) $this->descricaoFonte = $registroDoBancoDeDados['descricao_fonte'];
        if (isset($registroDoBancoDeDados['cargo'])) $this->cargo = $registroDoBancoDeDados['cargo'];
        if (isset($registroDoBancoDeDados['valor_bruto'])) $this->valorBruto = $registroDoBancoDeDados['valor_bruto'];
        if (isset($registroDoBancoDeDados['valor_liquido'])) $this->valorLiquido = $registroDoBancoDeDados['valor_liquido'];
        if (isset($registroDoBancoDeDados['data_inicio'])) $this->dataInicio = $registroDoBancoDeDados['data_inicio'];
    }

    /**
     * @param mixed $cargo
     */
    public function setCargo($cargo)
    {
        $this->cargo = $cargo;
    }

    /**
     * @return mixed
     */
    public function getCargo()
    {
        return $this->cargo;
    }

    /**
     * @param mixed $dataInicio
     */
    public function setDataInicio($dataInicio)
    {
        $this->dataInicio = $dataInicio;
    }

    /**
     * @return mixed
     */
    public function getDataInicio()
    {
        return $this->dataInicio;
    }

    /**
     * @param mixed $descricaoFonte
     */
    public function setDescricaoFonte($descricaoFonte)
    {
        $this->descricaoFonte = $descricaoFonte;
    }

    /**
     * @return mixed
     */
    public function getDescricaoFonte()
    {
        return $this->descricaoFonte;
    }

    /**
     * @param mixed $ehFonteComprovada
     */
    public function setEhFonteComprovada($ehFonteComprovada)
    {
        $this->ehFonteComprovada = $ehFonteComprovada;
    }

    /**
     * @return mixed
     */
    public function getEhFonteComprovada()
    {
        return $this->ehFonteComprovada;
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
     * @param mixed $valorBruto
     */
    public function setValorBruto($valorBruto)
    {
        $this->valorBruto = $valorBruto;
    }

    /**
     * @return mixed
     */
    public function getValorBruto()
    {
        return $this->valorBruto;
    }

    /**
     * @param mixed $valorLiquido
     */
    public function setValorLiquido($valorLiquido)
    {
        $this->valorLiquido = $valorLiquido;
    }

    /**
     * @return mixed
     */
    public function getValorLiquido()
    {
        return $this->valorLiquido;
    }


}

?>
