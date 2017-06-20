<?php

class ModuloSistemaModel
{

    private $id;
    private $nome;
    private $descricao;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['descricao_modulo'])) $this->descricao = $registroDoBancoDeDados['descricao_modulo'];
        if (isset($registroDoBancoDeDados['id_modulo'])) $this->id = $registroDoBancoDeDados['id_modulo'];
        if (isset($registroDoBancoDeDados['nome_modulo'])) $this->nome = $registroDoBancoDeDados['nome_modulo'];
    }

    /**
     * @param mixed $descricao
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    /**
     * @return mixed
     */
    public function getDescricao()
    {
        return $this->descricao;
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