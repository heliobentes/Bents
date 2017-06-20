<?php

class ResidenciaModel
{
    private $idParticipante;
    private $idTipoResidencia;
    private $tipoResidencia;
    private $valorAluguel;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['id_tipo_residencia'])) $this->idTipoResidencia = $registroDoBancoDeDados['id_tipo_residencia'];
        if (isset($registroDoBancoDeDados['tipo_residencia'])) $this->tipoResidencia = $registroDoBancoDeDados['tipo_residencia'];
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['valor_aluguel'])) $this->valorAluguel = $registroDoBancoDeDados['valor_aluguel'];
    }


    //<editor-fold  desc="Gets e Sets da classe...">

    /**
     * @param mixed $descricaoTipoResidencia
     */
    public function setDescricaoTipoResidencia($descricaoTipoResidencia)
    {
        $this->descricaoTipoResidencia = $descricaoTipoResidencia;
    }


    /**
     * @return mixed
     */
    public function getIdParticipante()
    {
        return $this->idParticipante;
    }

    /**
     * @param mixed $valorAluguel
     */
    public function setValorAluguel($valorAluguel)
    {
        $this->valorAluguel = $valorAluguel;
    }

    /**
     * @return mixed
     */
    public function getValorAluguel()
    {
        return $this->valorAluguel;
    }

    /**
     * @param TiposResidencia $tipoResidencia
     */
    public function setTipoResidencia($tipoResidencia)
    {
        $this->tipoResidencia = $tipoResidencia;
    }

    /**
     * @return TiposResidencia
     */
    public function getTipoResidencia()
    {
        return $this->tipoResidencia;
    }

    /**
     * @param mixed $idTipoResidencia
     */
    public function setIdTipoResidencia($idTipoResidencia)
    {
        $this->idTipoResidencia = $idTipoResidencia;
    }

    /**
     * @return mixed
     */
    public function getIdTipoResidencia()
    {
        return $this->idTipoResidencia;
    }


    //</editor-fold>
}

?>
