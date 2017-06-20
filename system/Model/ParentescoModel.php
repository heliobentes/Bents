<?php

class ParentescoModel
{
    private $id;
    private $participante;
    private $idParente;
    private $idTipoParentesco;
    private $tipoParentesco;
    private $compoeRenda; //1=sim, 2=não

    function __construct($registroDoBancoDeDados = "")
    {
        $this->participante = new ParticipanteModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['id_parentesco'])) $this->id = $registroDoBancoDeDados['id_parentesco'];
        if (isset($registroDoBancoDeDados['id_parente'])) $this->idParente = $registroDoBancoDeDados['id_parente'];
        if (isset($registroDoBancoDeDados['id_tipo_parentesco'])) $this->idTipoParentesco = $registroDoBancoDeDados['id_tipo_parentesco'];
        if (isset($registroDoBancoDeDados['descricao_tipo_parentesco'])) $this->tipoParentesco = $registroDoBancoDeDados['descricao_tipo_parentesco'];
        if (isset($registroDoBancoDeDados['compoe_renda'])) $this->compoeRenda = $registroDoBancoDeDados['compoe_renda'];
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
     * @param mixed $idParente
     */
    public function setIdParente($idParente)
    {
        $this->idParente = $idParente;
    }

    /**
     * @return mixed
     */
    public function getIdParente()
    {
        return $this->idParente;
    }

    /**
     * @param mixed $idTipoParentesco
     */
    public function setIdTipoParentesco($idTipoParentesco)
    {
        $this->idTipoParentesco = $idTipoParentesco;
    }

    /**
     * @return mixed
     */
    public function getIdTipoParentesco()
    {
        return $this->idTipoParentesco;
    }

    /**
     * @param \ParticipanteModel $participante
     */
    public function setParticipante($participante)
    {
        $this->participante = $participante;
    }

    /**
     * @return \ParticipanteModel
     */
    public function getParticipante()
    {
        return $this->participante;
    }

    /**
     * @param mixed $tipoParentesco
     */
    public function setTipoParentesco($tipoParentesco)
    {
        $this->tipoParentesco = $tipoParentesco;
    }

    /**
     * @return mixed
     */
    public function getTipoParentesco()
    {
        return $this->tipoParentesco;
    }//Mãe, Pai, avô..


    /**
     * @param mixed $compoeRenda
     */
    public function setCompoeRenda($compoeRenda)
    {
        $this->compoeRenda = $compoeRenda;
    }

    /**
     * @return mixed
     */
    public function getCompoeRenda()
    {
        return $this->compoeRenda;
    }

}

?>
