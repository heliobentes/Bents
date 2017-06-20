<?php

class UsuarioModel implements JsonSerializable
{
    private $id;
    private $login;
    private $senha;
    private $email;
    private $nome;
    private $idTipoUsuario;
    private $tipoUsuario;
    private $salt;
    private $ehUsuarioAtivo;
    private $dataCadastro;
    private $correspondente;
    private $novaSenha;
    private $arrayFuncoesAutorizadas;
    private $arrayModulosAutorizados;

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    function __construct($registroDoBancoDeDados = "")
    {

        $this->arrayFuncoesAutorizadas = Array();
        $this->arrayModulosAutorizados = Array();

        if (isset($registroDoBancoDeDados['id_usuario'])) $this->id = $registroDoBancoDeDados['id_usuario'];
        if (isset($registroDoBancoDeDados['login'])) $this->login = $registroDoBancoDeDados['login'];
        if (isset($registroDoBancoDeDados['senha'])) $this->senha = $registroDoBancoDeDados['senha'];
        if (isset($registroDoBancoDeDados['email'])) $this->email = $registroDoBancoDeDados['email'];
        if (isset($registroDoBancoDeDados['nome'])) $this->nome = $registroDoBancoDeDados['nome'];
        if (isset($registroDoBancoDeDados['id_tipo_usuario'])) $this->idTipoUsuario = $registroDoBancoDeDados['id_tipo_usuario'];
        if (isset($registroDoBancoDeDados['tipo_usuario'])) $this->tipoUsuario = $registroDoBancoDeDados['tipo_usuario'];
        if (isset($registroDoBancoDeDados['salt'])) $this->salt = $registroDoBancoDeDados['salt'];
        if (isset($registroDoBancoDeDados['eh_usuario_ativo'])) $this->ehUsuarioAtivo = $registroDoBancoDeDados['eh_usuario_ativo'];
        if (isset($registroDoBancoDeDados['data_cadastro'])) $this->dataCadastro = $registroDoBancoDeDados['data_cadastro'];

    }

    /**
     * @param mixed $novaSenha
     */
    public function setNovaSenha($novaSenha)
    {
        $this->novaSenha = $novaSenha;
    }

    /**
     * @return mixed
     */
    public function getNovaSenha()
    {
        return $this->novaSenha;
    }


    /**
     * @param mixed $correspondente
     */
    public function setCorrespondente(EmpresaModel $correspondente)
    {
        $this->correspondente = $correspondente;
    }

    /**
     * @return mixed
     */
    public function getCorrespondente()
    {
        return $this->correspondente;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getLogin()
    {
        return $this->login;
    }

    public function setLogin($login)
    {
        $this->login = $login;
    }

    public function getSenha()
    {
        return $this->senha;
    }

    public function setSenha($senha)
    {
        $this->senha = $senha;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getIdTipoUsuario()
    {
        return $this->idTipoUsuario;
    }

    public function setIdTipoUsuario($idTipoUsuario)
    {
        $this->idTipoUsuario = $idTipoUsuario;
    }

    public function getTipoUsuario()
    {
        return $this->tipoUsuario;
    }

    public function setTipoUsuario($tipoUsuario)
    {
        $this->tipoUsuario = $tipoUsuario;
    }

    public function getSalt()
    {
        return $this->salt;
    }

    public function setSalt($salt)
    {
        $this->salt = $salt;
    }

    public function getEhUsuarioAtivo()
    {
        return $this->ehUsuarioAtivo;
    }

    public function setEhUsuarioAtivo($ehUsuarioAtivo)
    {
        $this->ehUsuarioAtivo = $ehUsuarioAtivo;
    }

    public function getDataCadastro()
    {
        return $this->dataCadastro;
    }

    public function setDataCadastro($dataCadastro)
    {
        $this->dataCadastro = $dataCadastro;
    }

    /**
     * @param FuncoesSistemaModel[] $arrayFuncoesAutorizadas
     */
    public function setArrayFuncoesAutorizadas($arrayFuncoesAutorizadas)
    {
        $this->arrayFuncoesAutorizadas = $arrayFuncoesAutorizadas;
    }

    /**
     * @return FuncoesSistemaModel[]
     */
    public function getArrayFuncoesAutorizadas()
    {
        return $this->arrayFuncoesAutorizadas;
    }

    /**
     * @param ModuloSistemaModel[] $arrayModulosAutorizados
     */
    public function setArrayModulosAutorizados($arrayModulosAutorizados)
    {
        $this->arrayModulosAutorizados = $arrayModulosAutorizados;
    }

    /**
     * @return ModuloSistemaModel[]
     */
    public function getArrayModulosAutorizados()
    {
        return $this->arrayModulosAutorizados;
    }


}

?>
