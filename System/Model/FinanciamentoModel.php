<?php

class FinanciamentoModel implements JsonSerializable
{
    private $id;
    private $usuarioCorrespondente;
    private $banco;
    private $imovel;
    private $valorSolicitado;
    private $idStatusFinanciamento;
    private $descricaoStatusFinanciamento;
    private $valorAprovado;
    private $dataSolicitacao;
    private $arrayParticipantes;
    private $arrayDocumentos;
    private $statusFinanciamento;
    private $descricaoBemPretendido;
    private $empresaCorrespondente;
    private $descricaoTipoParticipante;
    private $qtdOcorrencias;


    function __construct($registroDoBancoDeDados = "")
    {
        $this->arrayDocumentos = Array();
        $this->arrayParticipantes = Array();

        $this->banco = new InstituicaoBancariaModel($registroDoBancoDeDados);
        $this->usuarioCorrespondente = new UsuarioModel($registroDoBancoDeDados);
        $this->statusFinanciamento = new StatusInteracaoModel($registroDoBancoDeDados);
        $this->empresaCorrespondente = new EmpresaModel($registroDoBancoDeDados);
        $this->imovel = new ImovelParticipanteModel($registroDoBancoDeDados);


        if (isset($registroDoBancoDeDados['data_solicitacao'])) $this->dataSolicitacao = $registroDoBancoDeDados['data_solicitacao'];
        if (isset($registroDoBancoDeDados['id'])) $this->id = $registroDoBancoDeDados['id'];
        if (isset($registroDoBancoDeDados['imovel'])) $this->imovel = $registroDoBancoDeDados['imovel'];
        if (isset($registroDoBancoDeDados['valor_solicitado'])) $this->valorSolicitado = $registroDoBancoDeDados['valor_solicitado'];
        if (isset($registroDoBancoDeDados['valor_aprovado'])) $this->valorAprovado = $registroDoBancoDeDados['valor_aprovado'];
        if (isset($registroDoBancoDeDados['descricao_bem_pretendido'])) $this->descricaoBemPretendido = $registroDoBancoDeDados['descricao_bem_pretendido'];

        if (isset($registroDoBancoDeDados['id_status_financiamento'])) $this->idStatusFinanciamento = $registroDoBancoDeDados['id_status_financiamento'];
        if (isset($registroDoBancoDeDados['descricao_status_financiamento'])) $this->descricaoStatusFinanciamento = $registroDoBancoDeDados['descricao_status_financiamento'];

        if (isset($registroDoBancoDeDados['descricao_tipo_participante'])) $this->descricaoTipoParticipante = $registroDoBancoDeDados['descricao_tipo_participante'];

        if (isset($registroDoBancoDeDados['qtd_ocorrencias'])) $this->qtdOcorrencias = $registroDoBancoDeDados['qtd_ocorrencias'];

    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    /**
     * @param DocumentacaoFinanciamentoModel[] $arrayDocumentos
     */
    public function setArrayDocumentos($arrayDocumentos)
    {
        $this->arrayDocumentos = $arrayDocumentos;
    }

    /**
     * @return DocumentacaoFinanciamentoModel[]
     */
    public function getArrayDocumentos()
    {
        return $this->arrayDocumentos;
    }

    /**
     * @param array $arrayParticipantes
     */
    public function setArrayParticipantes($arrayParticipantes)
    {
        $this->arrayParticipantes = $arrayParticipantes;
    }

    /**
     * @return ParticipanteModel[]
     */
    public function getArrayParticipantes()
    {
        return $this->arrayParticipantes;
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
     * @param mixed $dataSolicitacao
     */
    public function setDataSolicitacao($dataSolicitacao)
    {
        $this->dataSolicitacao = $dataSolicitacao;
    }

    /**
     * @param EmpresaModel $empresaCorrespondente
     */
    public function setEmpresaCorrespondente($empresaCorrespondente)
    {
        $this->empresaCorrespondente = $empresaCorrespondente;
    }

    /**
     * @return EmpresaModel
     */
    public function getEmpresaCorrespondente()
    {
        return $this->empresaCorrespondente;
    }

    /**
     * @param mixed $descricaoTipoParticipante
     */
    public function setDescricaoTipoParticipante($descricaoTipoParticipante)
    {
        $this->descricaoTipoParticipante = $descricaoTipoParticipante;
    }

    /**
     * @return mixed
     */
    public function getDescricaoTipoParticipante()
    {
        return $this->descricaoTipoParticipante;
    }


    /**
     * @return mixed
     */
    public function getDataSolicitacao()
    {
        return $this->dataSolicitacao;
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
     * @param mixed $descricaoStatusFinanciamento
     */
    public function setDescricaoStatusFinanciamento($descricaoStatusFinanciamento)
    {
        $this->descricaoStatusFinanciamento = $descricaoStatusFinanciamento;
    }

    /**
     * @return mixed
     */
    public function getDescricaoStatusFinanciamento()
    {
        return $this->descricaoStatusFinanciamento;
    }


    /**
     * @return mixed
     */
    public function getIdStatusFinanciamento()
    {
        return $this->idStatusFinanciamento;
    }

    /**
     * @param mixed $imovel
     */
    public function setIdStatusFinanciamento($idStatusFinanciamento)
    {
        $this->idStatusFinanciamento = $idStatusFinanciamento;
    }

    /**
     * @param ImovelParticipanteModel $imovel
     */
    public function setImovel($imovel)
    {
        $this->imovel = $imovel;
    }

    /**
     * @return ImovelParticipanteModel
     */
    public function getImovel()
    {
        return $this->imovel;
    }


    /**
     * @param \StatusFinanciamentoModel $statusFinanciamento
     */
    public function setStatusFinanciamento($statusFinanciamento)
    {
        $this->statusFinanciamento = $statusFinanciamento;
    }

    /**
     * @return \StatusFinanciamentoModel
     */
    public function getStatusFinanciamento()
    {
        return $this->statusFinanciamento;
    }

    /**
     * @param \UsuarioModel $usuarioCorrespondente
     */
    public function setUsuarioCorrespondente($usuarioCorrespondente)
    {
        $this->usuarioCorrespondente = $usuarioCorrespondente;
    }

    /**
     * @return \UsuarioModel
     */
    public function getUsuarioCorrespondente()
    {
        return $this->usuarioCorrespondente;
    }

    /**
     * @param mixed $valorAprovado
     */
    public function setValorAprovado($valorAprovado)
    {
        $this->valorAprovado = $valorAprovado;
    }

    /**
     * @return mixed
     */
    public function getValorAprovado()
    {
        return $this->valorAprovado;
    }

    /**
     * @param mixed $valorSolicitado
     */
    public function setValorSolicitado($valorSolicitado)
    {
        $this->valorSolicitado = $valorSolicitado;
    }

    /**
     * @return mixed
     */
    public function getValorSolicitado()
    {
        return $this->valorSolicitado;
    }

    /**
     * @param mixed $descricaoBemPretendido
     */
    public function setDescricaoBemPretendido($descricaoBemPretendido)
    {
        $this->descricaoBemPretendido = $descricaoBemPretendido;
    }

    /**
     * @return mixed
     */
    public function getDescricaoBemPretendido()
    {
        return $this->descricaoBemPretendido;
    }

    /**
     * @param mixed $qtdOcorrencias
     */
    public function setQtdOcorrencias($qtdOcorrencias)
    {
        $this->qtdOcorrencias = $qtdOcorrencias;
    }

    /**
     * @return mixed
     */
    public function getQtdOcorrencias()
    {
        return $this->qtdOcorrencias;
    }

}

?>
