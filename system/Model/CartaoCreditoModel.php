<?php

class CartaoCreditoModel
{
    private $idParticipante;
    private $idBandeira;
    private $idCartaoCredito;
    private $bandeiraCartaoCredito;
    private $limite;

    private $instituicaoBancaria;


    function __construct($registroDoBancoDeDados = "")
    {
        $this->instituicaoBancaria = new InstituicaoBancariaModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['limite'])) $this->limite = $registroDoBancoDeDados['limite'];
        if (isset($registroDoBancoDeDados['id_cartao_credito'])) $this->idCartaoCredito = $registroDoBancoDeDados['id_cartao_credito'];
        if (isset($registroDoBancoDeDados['id_bandeira_cartao_credito'])) $this->idBandeira = $registroDoBancoDeDados['id_bandeira_cartao_credito'];
        if (isset($registroDoBancoDeDados['bandeira_cartao_credito'])) $this->bandeiraCartaoCredito = $registroDoBancoDeDados['bandeira_cartao_credito'];
    }

    /**
     * @param mixed $bandeiraCartaoCredito
     */
    public function setBandeiraCartaoCredito($bandeiraCartaoCredito)
    {
        $this->bandeiraCartaoCredito = $bandeiraCartaoCredito;
    }

    /**
     * @return mixed
     */
    public function getBandeiraCartaoCredito()
    {
        return $this->bandeiraCartaoCredito;
    }

    /**
     * @param mixed $idBandeira
     */
    public function setIdBandeira($idBandeira)
    {
        $this->idBandeira = $idBandeira;
    }

    /**
     * @return mixed
     */
    public function getIdBandeira()
    {
        return $this->idBandeira;
    }

    /**
     * @param mixed $idCartaoCredito
     */
    public function setIdCartaoCredito($idCartaoCredito)
    {
        $this->idCartaoCredito = $idCartaoCredito;
    }

    /**
     * @return mixed
     */
    public function getIdCartaoCredito()
    {
        return $this->idCartaoCredito;
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
     * @param \InstituicaoBancariaModel $instituicaoBancaria
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
     * @param mixed $limite
     */
    public function setLimite($limite)
    {
        $this->limite = $limite;
    }

    /**
     * @return mixed
     */
    public function getLimite()
    {
        return $this->limite;
    }


}

?>
