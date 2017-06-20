<?php

class FuncoesSistemaModel
{

    private $id;
    private $nome;
    private $moduloSistema;

    function __construct($registroDoBancoDeDados = "")
    {
        $this->moduloSistema = new ModuloSistemaModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['id_funcao'])) $this->id = $registroDoBancoDeDados['id_funcao'];
        if (isset($registroDoBancoDeDados['nome_funcao'])) $this->nome = $registroDoBancoDeDados['nome_funcao'];
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
     * @param ModuloSistemaModel $moduloSistema
     */
    public function setModuloSistema($moduloSistema)
    {
        $this->moduloSistema = $moduloSistema;
    }

    /**
     * @return ModuloSistemaModel
     */
    public function getModuloSistema()
    {
        return $this->moduloSistema;
    }

    /**
     * @param mixed $nome
     */
    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    /**
     * @return mixed
     */
    public function getNome()
    {
        return $this->nome;
    }


}