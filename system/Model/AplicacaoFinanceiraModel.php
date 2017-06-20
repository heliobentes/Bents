<?php

class AplicacaoFinanceiraModel
{
    private $idParticipante;
    private $idTipoAplicacao;
    private $tipoAplicacao;
    private $instituicaoBancaria;
    private $valor;

    function __construct($registroDoBancoDeDados = "")
    {
        $this->instituicaoBancaria = new InstituicaoBancariaModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['id_tipo_aplicacao'])) $this->idTipoAplicacao = $registroDoBancoDeDados['id_tipo_aplicacao'];
        if (isset($registroDoBancoDeDados['tipo_aplicacao'])) $this->tipoAplicacao = $registroDoBancoDeDados['tipo_aplicacao'];
        if (isset($registroDoBancoDeDados['valor'])) $this->valor = $registroDoBancoDeDados['valor'];
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
     * @param mixed $idTipoAplicacao
     */
    public function setIdTipoAplicacao($idTipoAplicacao)
    {
        $this->idTipoAplicacao = $idTipoAplicacao;
    }

    /**
     * @return mixed
     */
    public function getIdTipoAplicacao()
    {
        return $this->idTipoAplicacao;
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
     * @param mixed $tipoAplicacao
     */
    public function setTipoAplicacao($tipoAplicacao)
    {
        $this->tipoAplicacao = $tipoAplicacao;
    }

    /**
     * @return mixed
     */
    public function getTipoAplicacao()
    {
        return $this->tipoAplicacao;
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


}


?>
