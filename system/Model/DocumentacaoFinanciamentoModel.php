<?php

class DocumentacaoFinanciamentoModel
{

    private $id;
    private $nome;
    private $nomeArquivo;
    private $dataEnvio;
    private $idTipoDocumento;
    private $descricaoTipoDocumento;
    private $idFinanciamento;
    private $nomeUnicoDoArquivo;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['data_envio'])) $this->dataEnvio = $registroDoBancoDeDados['data_envio'];
        if (isset($registroDoBancoDeDados['id'])) $this->id = $registroDoBancoDeDados['id'];
        if (isset($registroDoBancoDeDados['id_financiamento'])) $this->idFinanciamento = $registroDoBancoDeDados['id_financiamento'];
        if (isset($registroDoBancoDeDados['id_tipo_documento'])) $this->idTipoDocumento = $registroDoBancoDeDados['id_tipo_documento'];
        if (isset($registroDoBancoDeDados['descricao_tipo_documento'])) $this->descricaoTipoDocumento = $registroDoBancoDeDados['descricao_tipo_documento'];
        if (isset($registroDoBancoDeDados['nome'])) $this->nome = $registroDoBancoDeDados['nome'];
        if (isset($registroDoBancoDeDados['nome_arquivo'])) $this->nomeArquivo = $registroDoBancoDeDados['nome_arquivo'];
        if (isset($registroDoBancoDeDados['nome_unico_do_arquivo'])) $this->nomeUnicoDoArquivo = $registroDoBancoDeDados['nome_unico_do_arquivo'];
    }

    /**
     * @param mixed $dataEnvio
     */
    public function setDataEnvio($dataEnvio)
    {
        $this->dataEnvio = $dataEnvio;
    }

    /**
     * @return mixed
     */
    public function getDataEnvio()
    {
        return $this->dataEnvio;
    }

    /**
     * @param mixed $descricaoTipoDocumento
     */
    public function setDescricaoTipoDocumento($descricaoTipoDocumento)
    {
        $this->descricaoTipoDocumento = $descricaoTipoDocumento;
    }

    /**
     * @return mixed
     */
    public function getDescricaoTipoDocumento()
    {
        return $this->descricaoTipoDocumento;
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
     * @param mixed $idFinanciamento
     */
    public function setIdFinanciamento($idFinanciamento)
    {
        $this->idFinanciamento = $idFinanciamento;
    }

    /**
     * @return mixed
     */
    public function getIdFinanciamento()
    {
        return $this->idFinanciamento;
    }

    /**
     * @param mixed $idTipoDocumento
     */
    public function setIdTipoDocumento($idTipoDocumento)
    {
        $this->idTipoDocumento = $idTipoDocumento;
    }

    /**
     * @return mixed
     */
    public function getIdTipoDocumento()
    {
        return $this->idTipoDocumento;
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


}