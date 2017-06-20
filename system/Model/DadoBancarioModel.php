<?php

class DadoBancarioModel
{
    private $idParticipante;
    private $idTipoConta;
    private $tipoConta;
    private $limite;
    private $instituicaoBancaria;

    function __construct($registroDoBancoDeDados = "")
    {

        $this->instituicaoBancaria = new InstituicaoBancariaModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['tipo_conta'])) $this->tipoConta = $registroDoBancoDeDados['tipo_conta'];
        if (isset($registroDoBancoDeDados['id_tipo_conta'])) $this->idTipoConta = $registroDoBancoDeDados['id_tipo_conta'];
        if (isset($registroDoBancoDeDados['limite'])) $this->limite = $registroDoBancoDeDados['limite'];

    }


    public function getIdParticipante()
    {
        return $this->idParticipante;
    }

    public function setIdParticipante($idParticipante)
    {
        $this->idParticipante = $idParticipante;
    }

    public function getTipoConta()
    {
        return $this->tipoConta;
    }

    public function setTipoConta($tipoConta)
    {
        $this->tipoConta = $tipoConta;
    }

    public function getLimite()
    {
        return $this->limite;
    }

    public function setLimite($limite)
    {
        $this->limite = $limite;
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
     * @param mixed $idTipoConta
     */
    public function setIdTipoConta($idTipoConta)
    {
        $this->idTipoConta = $idTipoConta;
    }

    /**
     * @return mixed
     */
    public function getIdTipoConta()
    {
        return $this->idTipoConta;
    }


}

?>
