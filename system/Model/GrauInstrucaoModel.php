<?php

class GrauInstrucaoModel
{
    private $id;
    private $grauInstrucao;

    /**
     * @var TiposGrauInstrucao
     */
    //private $tipoGrauInstrucao;

    function __construct($registroDoBancoDeDados = "")
    {
        //$this->tipoGrauInstrucao = new TiposGrauInstrucao();

        if (isset($registroDoBancoDeDados['id_grau_instrucao'])) $this->id = $registroDoBancoDeDados['id_grau_instrucao'];
        if (isset($registroDoBancoDeDados['descricao_grau_instrucao'])) $this->grauInstrucao = $registroDoBancoDeDados['descricao_grau_instrucao'];
    }


    /**
     * @param mixed $grauInstrucao
     */
    public function setGrauInstrucao($grauInstrucao)
    {
        $this->grauInstrucao = $grauInstrucao;
    }

    /**
     * @return mixed
     */
    public function getGrauInstrucao()
    {
        return $this->grauInstrucao;
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
}


?>
