<?php

class DocumentoParticipanteModel implements JsonSerializable
{

    private $id;
    private $nome;
    private $nomeArquivo;
    private $dataEnvio;
    private $idTipoDocumento;
    private $descricaoTipoDocumento;
    private $nomeUnicoDoArquivo;
    private $idParticipante;
    private $idUsuarioCadastro;

    function __construct($registroDoBancoDeDados = "")
    {
        if (isset($registroDoBancoDeDados['data_envio'])) $this->dataEnvio = $registroDoBancoDeDados['data_envio'];
        if (isset($registroDoBancoDeDados['id'])) $this->id = $registroDoBancoDeDados['id'];
        if (isset($registroDoBancoDeDados['id_tipo_documento'])) $this->idTipoDocumento = $registroDoBancoDeDados['id_tipo_documento'];
        if (isset($registroDoBancoDeDados['descricao_tipo_documento'])) $this->descricaoTipoDocumento = $registroDoBancoDeDados['descricao_tipo_documento'];
        if (isset($registroDoBancoDeDados['nome'])) $this->nome = $registroDoBancoDeDados['nome'];
        if (isset($registroDoBancoDeDados['nome_arquivo'])) $this->nomeArquivo = $registroDoBancoDeDados['nome_arquivo'];
        if (isset($registroDoBancoDeDados['nome_unico_do_arquivo'])) $this->nomeUnicoDoArquivo = $registroDoBancoDeDados['nome_unico_do_arquivo'];
        if (isset($registroDoBancoDeDados['id_participante'])) $this->idParticipante = $registroDoBancoDeDados['id_participante'];
        if (isset($registroDoBancoDeDados['id_usuario_cadastro'])) $this->idUsuarioCadastro = $registroDoBancoDeDados['id_usuario_cadastro'];

    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
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

    /**
     * @param mixed $idParticipante
     */
    public function setIdParticipante($idParticipante)
    {
        $this->idParticipante = $idParticipante;
    }

    /**
     * @return mixed
     */
    public function getIdParticipante()
    {
        return $this->idParticipante;
    }

    /**
     * @param mixed $idUsuarioCadastro
     */
    public function setIdUsuarioCadastro($idUsuarioCadastro)
    {
        $this->idUsuarioCadastro = $idUsuarioCadastro;
    }

    /**
     * @return mixed
     */
    public function getIdUsuarioCadastro()
    {
        return $this->idUsuarioCadastro;
    }

}