<?php

class LiberacaoCreditoModel
{

    private $idParticipante;
    private $instituicaoBancaria;
    private $ehCreditoNoBancoDoBrasil;
    private $numeroAgencia;
    private $numeroContaCorrente;
    private $cpfCnpjTitular;
    private $porcentagemCredito;

    function __construct($registroDoBancoDeDados = "")
    {
        $this->instituicaoBancaria = new InstituicaoBancariaModel();

        if (isset($registroDoBancoDeDados['cpf_cnpj_titular_conta'])) $this->cpfCnpjTitular = $registroDoBancoDeDados['cpf_cnpj_titular_conta'];
        if (isset($registroDoBancoDeDados['credito_no_banco_brasil'])) $this->ehCreditoNoBancoDoBrasil = $registroDoBancoDeDados['credito_no_banco_brasil'];
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['numero_agencia'])) $this->numeroAgencia = $registroDoBancoDeDados['numero_agencia'];
        if (isset($registroDoBancoDeDados['numero_conta_corrente'])) $this->numeroContaCorrente = $registroDoBancoDeDados['numero_conta_corrente'];
        if (isset($registroDoBancoDeDados['porcentagem_credito'])) $this->porcentagemCredito = $registroDoBancoDeDados['porcentagem_credito'];

    }

    /**
     * @param mixed $cpfCnpjTitular
     */
    public function setCpfCnpjTitular($cpfCnpjTitular)
    {
        $this->cpfCnpjTitular = $cpfCnpjTitular;
    }

    /**
     * @return mixed
     */
    public function getCpfCnpjTitular()
    {
        return $this->cpfCnpjTitular;
    }

    /**
     * @param mixed $ehCreditoNoBancoDoBrasil
     */
    public function setEhCreditoNoBancoDoBrasil($ehCreditoNoBancoDoBrasil)
    {
        $this->ehCreditoNoBancoDoBrasil = $ehCreditoNoBancoDoBrasil;
    }

    /**
     * @return mixed
     */
    public function getEhCreditoNoBancoDoBrasil()
    {
        return $this->ehCreditoNoBancoDoBrasil;
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
     * @param \InstituicaoBancariaModel $participante
     */
    public function setInstituicaoBancaria($instituicaoBancaria)
    {
        $this->instituicaoBancaria = $instituicaoBancaria;
    }

    /**
     * @return \InstituicaoBancariaModel
     */
    public function getInstituicaoBancaria()
    {
        return $this->instituicaoBancaria;
    }

    /**
     * @param mixed $numeroAgencia
     */
    public function setNumeroAgencia($numeroAgencia)
    {
        $this->numeroAgencia = $numeroAgencia;
    }

    /**
     * @return mixed
     */
    public function getNumeroAgencia()
    {
        return $this->numeroAgencia;
    }

    /**
     * @param mixed $numeroContaCorrente
     */
    public function setNumeroContaCorrente($numeroContaCorrente)
    {
        $this->numeroContaCorrente = $numeroContaCorrente;
    }

    /**
     * @return mixed
     */
    public function getNumeroContaCorrente()
    {
        return $this->numeroContaCorrente;
    }

    /**
     * @param mixed $porcentagemCredito
     */
    public function setPorcentagemCredito($porcentagemCredito)
    {
        $this->porcentagemCredito = $porcentagemCredito;
    }

    /**
     * @return mixed
     */
    public function getPorcentagemCredito()
    {
        return $this->porcentagemCredito;
    }


}