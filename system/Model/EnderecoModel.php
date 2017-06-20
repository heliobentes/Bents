<?php

class EnderecoModel
{
    private $cep;
    private $logradouro;
    private $numero;
    private $complemento;
    private $bairro;
    private $cidade;
    private $uf;


    function __construct($registroDoBancoDeDados = "")
    {

        if (isset($registroDoBancoDeDados['logradouro'])) $this->logradouro = $registroDoBancoDeDados['logradouro'];
        if (isset($registroDoBancoDeDados['cep'])) $this->cep = $registroDoBancoDeDados['cep'];
        if (isset($registroDoBancoDeDados['numero'])) $this->numero = $registroDoBancoDeDados['numero'];
        if (isset($registroDoBancoDeDados['complemento'])) $this->complemento = $registroDoBancoDeDados['complemento'];
        if (isset($registroDoBancoDeDados['bairro'])) $this->bairro = $registroDoBancoDeDados['bairro'];
        if (isset($registroDoBancoDeDados['cidade'])) $this->cidade = $registroDoBancoDeDados['cidade'];
        if (isset($registroDoBancoDeDados['uf'])) $this->uf = $registroDoBancoDeDados['uf'];
    }


    /**
     * @return mixed
     */
    public function getBairro()
    {
        return $this->bairro;
    }

    /**
     * @param mixed $bairro
     */
    public function setBairro($bairro)
    {
        $this->bairro = $bairro;
    }

    /**
     * @return mixed
     */
    public function getCep()
    {
        return $this->cep;
    }

    /**
     * @param mixed $cep
     */
    public function setCep($cep)
    {
        $this->cep = $cep;
    }

    /**
     * @return mixed
     */
    public function getCidade()
    {
        return $this->cidade;
    }

    /**
     * @param mixed $cidade
     */
    public function setCidade($cidade)
    {
        $this->cidade = $cidade;
    }

    /**
     * @return mixed
     */
    public function getComplemento()
    {
        return $this->complemento;
    }

    /**
     * @param mixed $complemento
     */
    public function setComplemento($complemento)
    {
        $this->complemento = $complemento;
    }

    /**
     * @return mixed
     */
    public function getLogradouro()
    {
        return $this->logradouro;
    }

    /**
     * @param mixed $logradouro
     */
    public function setLogradouro($logradouro)
    {
        $this->logradouro = $logradouro;
    }

    /**
     * @return mixed
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * @param mixed $numero
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;
    }

    /**
     * @return mixed
     */
    public function getUf()
    {
        return $this->uf;
    }

    /**
     * @param mixed $uf
     */
    public function setUf($uf)
    {
        $this->uf = $uf;
    }


}