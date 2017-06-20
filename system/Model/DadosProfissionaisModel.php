<?php

class DadosProfissionaisModel
{

    private $idParticipante;
    private $profissao;
    private $empresaEmpregador;
    private $cnpj;
    private $naturezaOcupacao;
    private $nivelCargo;
    private $dataInicioOcupacao;
    private $valorRendaBrutaMensal;
    private $dataReferencia;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['cnpj'])) $this->cnpj = $registroDoBancoDeDados['cnpj'];
        if (isset($registroDoBancoDeDados['data_inicio_ocupacao'])) $this->dataInicioOcupacao = $registroDoBancoDeDados['data_inicio_ocupacao'];
        if (isset($registroDoBancoDeDados['data_referencia'])) $this->dataReferencia = $registroDoBancoDeDados['data_referencia'];
        if (isset($registroDoBancoDeDados['empresa_empregador'])) $this->empresaEmpregador = $registroDoBancoDeDados['empresa_empregador'];
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['natureza_ocupacao'])) $this->naturezaOcupacao = $registroDoBancoDeDados['natureza_ocupacao'];
        if (isset($registroDoBancoDeDados['nivel_cargo'])) $this->nivelCargo = $registroDoBancoDeDados['nivel_cargo'];
        if (isset($registroDoBancoDeDados['valor_renda_bruta_mensal'])) $this->valorRendaBrutaMensal = $registroDoBancoDeDados['valor_renda_bruta_mensal'];
        if (isset($registroDoBancoDeDados['profissao'])) $this->profissao = $registroDoBancoDeDados['profissao'];
    }

    /**
     * @param mixed $cnpj
     */
    public function setCnpj($cnpj)
    {
        $this->cnpj = $cnpj;
    }

    /**
     * @return mixed
     */
    public function getCnpj()
    {
        return $this->cnpj;
    }

    /**
     * @param mixed $dataInicioOcupacao
     */
    public function setDataInicioOcupacao($dataInicioOcupacao)
    {
        $this->dataInicioOcupacao = $dataInicioOcupacao;
    }

    /**
     * @return mixed
     */
    public function getDataInicioOcupacao()
    {
        return $this->dataInicioOcupacao;
    }

    /**
     * @param mixed $dataReferencia
     */
    public function setDataReferencia($dataReferencia)
    {
        $this->dataReferencia = $dataReferencia;
    }

    /**
     * @return mixed
     */
    public function getDataReferencia()
    {
        return $this->dataReferencia;
    }

    /**
     * @param mixed $empresaEmpregador
     */
    public function setEmpresaEmpregador($empresaEmpregador)
    {
        $this->empresaEmpregador = $empresaEmpregador;
    }

    /**
     * @return mixed
     */
    public function getEmpresaEmpregador()
    {
        return $this->empresaEmpregador;
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
     * @param mixed $naturezaOcupacao
     */
    public function setNaturezaOcupacao($naturezaOcupacao)
    {
        $this->naturezaOcupacao = $naturezaOcupacao;
    }

    /**
     * @return mixed
     */
    public function getNaturezaOcupacao()
    {
        return $this->naturezaOcupacao;
    }

    /**
     * @param mixed $nivelCargo
     */
    public function setNivelCargo($nivelCargo)
    {
        $this->nivelCargo = $nivelCargo;
    }

    /**
     * @return mixed
     */
    public function getNivelCargo()
    {
        return $this->nivelCargo;
    }

    /**
     * @param mixed $valorRendaBrutaMensal
     */
    public function setValorRendaBrutaMensal($valorRendaBrutaMensal)
    {
        $this->valorRendaBrutaMensal = $valorRendaBrutaMensal;
    }

    /**
     * @return mixed
     */
    public function getValorRendaBrutaMensal()
    {
        return $this->valorRendaBrutaMensal;
    }

    /**
     * @param mixed $profissao
     */
    public function setProfissao($profissao)
    {
        $this->profissao = $profissao;
    }

    /**
     * @return mixed
     */
    public function getProfissao()
    {
        return $this->profissao;
    }


}