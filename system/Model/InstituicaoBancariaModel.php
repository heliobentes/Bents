<?php

/**
 * Created by JetBrains PhpStorm.
 * User: joaomarcos
 * Date: 27/06/13
 * Time: 11:32
 * To change this template use File | Settings | File Templates.
 */
class InstituicaoBancariaModel implements JsonSerializable
{

    private $idBanco;
    private $numeroBanco;
    private $nome;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['nome_banco'])) $this->nome = $registroDoBancoDeDados['nome_banco'];
        if (isset($registroDoBancoDeDados['numero_banco'])) $this->numeroBanco = $registroDoBancoDeDados['numero_banco'];
        if (isset($registroDoBancoDeDados['id_banco'])) $this->idBanco = $registroDoBancoDeDados['id_banco'];
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
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

    /**
     * @param mixed $idBanco
     */
    public function setIdBanco($idBanco)
    {
        $this->idBanco = $idBanco;
    }

    /**
     * @return mixed
     */
    public function getIdBanco()
    {
        return $this->idBanco;
    }

    /**
     * @param mixed $numeroBanco
     */
    public function setNumeroBanco($numeroBanco)
    {
        $this->numeroBanco = $numeroBanco;
    }

    /**
     * @return mixed
     */
    public function getNumeroBanco()
    {
        return $this->numeroBanco;
    }

}