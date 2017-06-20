<?php

class ModeloFormularioModel implements JsonSerializable
{
    private $banco;
    private $nomeArquivo;
    private $nomeUnicoDoArquivo;
    private $dataCadastro;
    private $usuarioCadastro;
    private $nomeFormulario;
    private $idCategoriaDocumento;
    private $descricaoCategoriaDocumento;

    function __construct($registroDoBancoDeDados = "")
    {
        $this->banco = new InstituicaoBancariaModel($registroDoBancoDeDados);
        $this->usuarioCadastro = new UsuarioModel($registroDoBancoDeDados);

        if (isset($registroDoBancoDeDados['nome_formulario'])) $this->nomeFormulario = $registroDoBancoDeDados['nome_formulario'];
        if (isset($registroDoBancoDeDados['data_cadastro'])) $this->dataCadastro = $registroDoBancoDeDados['data_cadastro'];
        if (isset($registroDoBancoDeDados['nome_unico_do_arquivo'])) $this->nomeUnicoDoArquivo = $registroDoBancoDeDados['nome_unico_do_arquivo'];
        if (isset($registroDoBancoDeDados['nome_arquivo'])) $this->nomeArquivo = $registroDoBancoDeDados['nome_arquivo'];
        if (isset($registroDoBancoDeDados['id_categoria_documento'])) $this->idCategoriaDocumento = $registroDoBancoDeDados['id_categoria_documento'];
        if (isset($registroDoBancoDeDados['descricao_categoria_documento'])) $this->descricaoCategoriaDocumento = $registroDoBancoDeDados['descricao_categoria_documento'];
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    /**
     * @param \InstituicaoBancariaModel $banco
     */
    public function setBanco($banco)
    {
        $this->banco = $banco;
    }

    /**
     * @return \InstituicaoBancariaModel
     */
    public function getBanco()
    {
        return $this->banco;
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
     * @param mixed $nomeArquivo
     */
    public function setNomeArquivo($nomeArquivo)
    {
        $this->nomeArquivo = $nomeArquivo;
    }

    /**
     * @return mixed
     */
    public function getNomeArquivo()
    {
        return $this->nomeArquivo;
    }

    /**
     * @param mixed $nome
     */
    public function setNomeFormulario($nomeFormulario)
    {
        $this->nomeFormulario = $nomeFormulario;
    }

    /**
     * @return mixed
     */
    public function getNomeFormulario()
    {
        return $this->nomeFormulario;
    }


    /**
     * @param mixed $nomeUnicoDoArquivo
     */
    public function setNomeUnicoDoArquivo($nomeUnicoDoArquivo)
    {
        $this->nomeUnicoDoArquivo = $nomeUnicoDoArquivo;
    }

    /**
     * @return mixed
     */
    public function getNomeUnicoDoArquivo()
    {
        return $this->nomeUnicoDoArquivo;
    }

    /**
     * @param \UsuarioModel $usuarioCadastro
     */
    public function setUsuarioCadastro($usuarioCadastro)
    {
        $this->usuarioCadastro = $usuarioCadastro;
    }

    /**
     * @return \UsuarioModel
     */
    public function getUsuarioCadastro()
    {
        return $this->usuarioCadastro;
    }

    /**
     * @param mixed $descricaoCategoriaDocumento
     */
    public function setDescricaoCategoriaDocumento($descricaoCategoriaDocumento)
    {
        $this->descricaoCategoriaDocumento = $descricaoCategoriaDocumento;
    }

    /**
     * @return mixed
     */
    public function getDescricaoCategoriaDocumento()
    {
        return $this->descricaoCategoriaDocumento;
    }

    /**
     * @param mixed $idCategoriaDocumento
     */
    public function setIdCategoriaDocumento($idCategoriaDocumento)
    {
        $this->idCategoriaDocumento = $idCategoriaDocumento;
    }

    /**
     * @return mixed
     */
    public function getIdCategoriaDocumento()
    {
        return $this->idCategoriaDocumento;
    }

    /**
     * @param mixed $nome
     */
    public function setNome($nome)
    {
        $this->nome = $nome;
    }


}