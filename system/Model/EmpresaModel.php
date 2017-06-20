<?php

class EmpresaModel implements JsonSerializable
{
    private $id;
    private $nomeFantasia;
    private $razaoSocial;
    private $cnpj;
    private $inscricaoEstadual;
    private $email;
    private $telefoneContato1;
    private $telefoneContato2;
    private $nomePessoaContato;
    private $site;
    private $idTipoEmpresa;
    private $tipoEmpresa;
    private $ehEmpresaAtiva;
    private $dataCadastro;
    private $endereco;

    function __construct($registroDoBancoDeDados = "")
    {

        $this->endereco = new EnderecoModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['id'])) $this->id = $registroDoBancoDeDados['id'];
        if (isset($registroDoBancoDeDados['nome_fantasia'])) $this->nomeFantasia = $registroDoBancoDeDados['nome_fantasia'];
        if (isset($registroDoBancoDeDados['razao_social'])) $this->razaoSocial = $registroDoBancoDeDados['razao_social'];
        if (isset($registroDoBancoDeDados['site'])) $this->site = $registroDoBancoDeDados['site'];
        if (isset($registroDoBancoDeDados['bairro'])) $this->bairro = $registroDoBancoDeDados['bairro'];
        if (isset($registroDoBancoDeDados['email'])) $this->email = $registroDoBancoDeDados['email'];
        if (isset($registroDoBancoDeDados['telefone_contato_1'])) $this->telefoneContato1 = $registroDoBancoDeDados['telefone_contato_1'];
        if (isset($registroDoBancoDeDados['telefone_contato_2'])) $this->telefoneContato2 = $registroDoBancoDeDados['telefone_contato_2'];
        if (isset($registroDoBancoDeDados['nome_pessoa_contato'])) $this->nomePessoaContato = $registroDoBancoDeDados['nome_pessoa_contato'];
        if (isset($registroDoBancoDeDados['cidade'])) $this->cidade = $registroDoBancoDeDados['cidade'];
        if (isset($registroDoBancoDeDados['uf'])) $this->uf = $registroDoBancoDeDados['uf'];
        if (isset($registroDoBancoDeDados['logradouro'])) $this->logradouro = $registroDoBancoDeDados['logradouro'];
        if (isset($registroDoBancoDeDados['numero'])) $this->numero = $registroDoBancoDeDados['numero'];
        if (isset($registroDoBancoDeDados['bairro'])) $this->bairro = $registroDoBancoDeDados['bairro'];
        if (isset($registroDoBancoDeDados['cep'])) $this->cep = $registroDoBancoDeDados['cep'];
        if (isset($registroDoBancoDeDados['cnpj'])) $this->cnpj = $registroDoBancoDeDados['cnpj'];
        if (isset($registroDoBancoDeDados['inscricao_estadual'])) $this->inscricaoEstadual = $registroDoBancoDeDados['inscricao_estadual'];

        if (isset($registroDoBancoDeDados['id_tipo_empresa'])) $this->idTipoEmpresa = $registroDoBancoDeDados['id_tipo_empresa'];
        if (isset($registroDoBancoDeDados['tipo_empresa'])) $this->tipoEmpresa = $registroDoBancoDeDados['tipo_empresa'];
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    /**
     * @return \EnderecoModel
     */
    public function getEndereco()
    {
        return $this->endereco;
    }

    /**
     * @return \EnderecoModel
     */
    public function setEndereco($endereco)
    {
        $this->endereco = $endereco;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getNomeFantasia()
    {
        return $this->nomeFantasia;
    }

    public function setNomeFantasia($nome)
    {
        $this->nomeFantasia = $nome;
    }

    public function getRazaoSocial()
    {
        return $this->razaoSocial;
    }

    public function setRazaoSocial($razaoSocial)
    {
        $this->razaoSocial = $razaoSocial;
    }

    public function getCnpj()
    {
        return $this->cnpj;
    }

    public function setCnpj($cnpj)
    {
        $this->cnpj = $cnpj;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getTelefoneContato1()
    {
        return $this->telefoneContato1;
    }

    public function setTelefoneContato1($telefoneContato1)
    {
        $this->telefoneContato1 = $telefoneContato1;
    }

    public function getTelefoneContato2()
    {
        return $this->telefoneContato2;
    }

    public function setTelefoneContato2($telefoneContato2)
    {
        $this->telefoneContato2 = $telefoneContato2;
    }

    public function getNomePessoaContato()
    {
        return $this->nomePessoaContato;
    }

    public function setNomePessoaContato($nomePessoaContato)
    {
        $this->nomePessoaContato = $nomePessoaContato;
    }

    public function getInscricaoEstadual()
    {
        return $this->inscricaoEstadual;
    }

    public function setInscricaoEstadual($inscricaoEstadual)
    {
        $this->inscricaoEstadual = $inscricaoEstadual;
    }

    public function getSite()
    {
        return $this->site;
    }

    public function setSite($site)
    {
        $this->site = $site;
    }

    public function getLogradouro()
    {
        return $this->logradouro;
    }

    public function setLogradouro($logradouro)
    {
        $this->logradouro = $logradouro;
    }

    public function getNumero()
    {
        return $this->numero;
    }

    public function setNumero($numero)
    {
        $this->numero = $numero;
    }

    public function getBairro()
    {
        return $this->bairro;
    }

    public function setBairro($bairro)
    {
        $this->bairro = $bairro;
    }

    public function getCidade()
    {
        return $this->cidade;
    }

    public function setCidade($cidade)
    {
        $this->cidade = $cidade;
    }

    public function getUf()
    {
        return $this->uf;
    }

    public function setUf($uf)
    {
        $this->uf = $uf;
    }

    public function getCep()
    {
        return $this->cep;
    }

    public function setCep($cep)
    {
        $this->cep = $cep;
    }

    public function getTipoEmpresa()
    {
        return $this->tipoEmpresa;
    }

    public function setTipoEmpresa($tipoEmpresa)
    {
        $this->tipoEmpresa = $tipoEmpresa;
    }

    /**
     * @param mixed $dataCadastro
     */
    public function setDataCadastro($dataCadastro)
    {
        $this->dataCadastro = $dataCadastro;
    }

    /**
     * @return mixed
     */
    public function getDataCadastro()
    {
        return $this->dataCadastro;
    }

    /**
     * @param mixed $ehEmpresaAtiva
     */
    public function setEhEmpresaAtiva($ehEmpresaAtiva)
    {
        $this->ehEmpresaAtiva = $ehEmpresaAtiva;
    }

    /**
     * @return mixed
     */
    public function getEhEmpresaAtiva()
    {
        return $this->ehEmpresaAtiva;
    }

    /**
     * @param mixed $idTipoEmpresa
     */
    public function setIdTipoEmpresa($idTipoEmpresa)
    {
        $this->idTipoEmpresa = $idTipoEmpresa;
    }

    /**
     * @return mixed
     */
    public function getIdTipoEmpresa()
    {
        return $this->idTipoEmpresa;
    }


}

?>
