<?php

class ParticipanteModel implements JsonSerializable
{
    private $id;
    private $nome;
    private $dataNascimento;
    private $cpf;
    private $cnpj;
    private $inscricaoEstadual;
    private $email;
    private $telefoneResidencial;
    private $telefoneCelular;
    private $telefoneComercial;
    private $telefoneOutro;
    private $site;
    private $logradouro;
    private $complemento;
    private $numero;
    private $bairro;
    private $cidade;
    private $uf;
    private $cep;
    private $ehParticipanteAtivo;
    private $dataCadastro;
    private $sexo;
    private $rg;
    private $orgaoEmissorRg;
    private $ufOrgaoEmissorRg;
    private $dataEmissaoRg;
    private $nomeMae;
    private $nomePai;

    private $idRegimeCasamento;
    private $regimeCasamento;

    private $dataCasamento;

    private $idEstadoCivil;
    private $descricaoEstadoCivil;

    private $profissao;
    private $numeroPisPasep;
    private $nacionalidade;
    private $naturalidade;
    private $ufNaturalidade;

    private $idGrauInstrucao;
    private $grauInstrucao;

    private $idTipoParticipante;
    private $descricaoTipoParticipante;

    private $ehUniaoEstavel; //1=sim, 2=não


    //<editor-fold desc="Objetos de outros models...">
    /**
     * @var FonteRendaModel[]
     */
    private $arrayFontesRenda;

    /**
     * @var DadosBancariosModel[]
     */
    private $arrayDadosBancarios;

    /**
     * @var ParentescoModel[]
     */
    private $arrayDadosParentesco;

    /**
     * @var AplicacaoFinanceiraModel[]
     */
    private $arrayAplicacoesFinanceiras;

    /**
     * @var ResidenciaModel[]
     */
    private $residencia;

    /**
     * @var CompromissoFinanceiroModel[]
     */
    private $arrayCompromissosFinanceiros;

    /**
     * @var CartaoCreditoModel[]
     */
    private $arrayCartoesCredito;

    /**
     * @var EmpresaModel
     */
    private $empresaCorrespondete;

    /**
     * @var ImovelParticipanteModel[]
     */
    private $arrayImoveis;


    /**
     * @var VeiculoParticipanteModel[]
     */
    private $arrayVeiculos;

    /**
     * @var FinanciamentoModel[]
     */
    private $arrayFinanciamentos;

    /**
     * @var DocumentoParticipanteModel[]
     */
    private $arrayDocumentos;

    /**
     * @var DadosProfissionais[]
     */
    private $arrayDadosProfissionais;

    /**
     * @var LiberacaoCreditoModel
     */
    private $dadosLiberacaoCredito;

    //</editor-fold>

    //<editor-fold desc="Construtor...">
    function __construct($registroDoBancoDeDados = "")
    {

        $this->arrayFontesRenda = Array();
        $this->arrayDadosBancarios = Array();
        $this->arrayDadosParentesco = Array();
        $this->arrayAplicacoesFinanceiras = Array();
        $this->arrayCompromissosFinanceiros = Array();
        $this->arrayFinanciamentos = Array();
        $this->arrayVeiculos = Array();
        $this->arrayImoveis = Array();
        $this->arrayCartoesCredito = Array();
        $this->arrayDadosProfissionais = Array();
        $this->residencia = new ResidenciaModel($registroDoBancoDeDados);
        $this->empresaCorrespondete = new EmpresaModel();
        $this->dadosLiberacaoCredito = new LiberacaoCreditoModel();
        $this->arrayDocumentos = Array();

        if (isset($registroDoBancoDeDados['id'])) $this->id = $registroDoBancoDeDados['id'];
        if (isset($registroDoBancoDeDados['nome'])) $this->nome = $registroDoBancoDeDados['nome'];
        if (isset($registroDoBancoDeDados['data_nascimento'])) $this->dataNascimento = $registroDoBancoDeDados['data_nascimento'];
        if (isset($registroDoBancoDeDados['cpf'])) $this->cpf = $registroDoBancoDeDados['cpf'];
        if (isset($registroDoBancoDeDados['cnpj'])) $this->cnpj = $registroDoBancoDeDados['cnpj'];
        if (isset($registroDoBancoDeDados['inscricao_estadual'])) $this->inscricaoEstadual = $registroDoBancoDeDados['inscricao_estadual'];
        if (isset($registroDoBancoDeDados['email'])) $this->email = $registroDoBancoDeDados['email'];
        if (isset($registroDoBancoDeDados['tel_residencial'])) $this->telefoneResidencial = $registroDoBancoDeDados['tel_residencial'];
        if (isset($registroDoBancoDeDados['tel_celular'])) $this->telefoneCelular = $registroDoBancoDeDados['tel_celular'];
        if (isset($registroDoBancoDeDados['tel_comercial'])) $this->telefoneComercial = $registroDoBancoDeDados['tel_comercial'];
        if (isset($registroDoBancoDeDados['tel_outro'])) $this->telefoneOutro = $registroDoBancoDeDados['tel_outro'];
        if (isset($registroDoBancoDeDados['site'])) $this->site = $registroDoBancoDeDados['site'];
        if (isset($registroDoBancoDeDados['logradouro'])) $this->logradouro = $registroDoBancoDeDados['logradouro'];
        if (isset($registroDoBancoDeDados['complemento'])) $this->complemento = $registroDoBancoDeDados['complemento'];
        if (isset($registroDoBancoDeDados['numero'])) $this->numero = $registroDoBancoDeDados['numero'];
        if (isset($registroDoBancoDeDados['bairro'])) $this->bairro = $registroDoBancoDeDados['bairro'];
        if (isset($registroDoBancoDeDados['cidade'])) $this->cidade = $registroDoBancoDeDados['cidade'];
        if (isset($registroDoBancoDeDados['uf'])) $this->uf = $registroDoBancoDeDados['uf'];
        if (isset($registroDoBancoDeDados['cep'])) $this->cep = $registroDoBancoDeDados['cep'];
        if (isset($registroDoBancoDeDados['eh_participante_ativo'])) $this->ehParticipanteAtivo = $registroDoBancoDeDados['eh_participante_ativo'];
        if (isset($registroDoBancoDeDados['data_cadastro'])) $this->dataCadastro = $registroDoBancoDeDados['data_cadastro'];
        if (isset($registroDoBancoDeDados['sexo'])) $this->sexo = $registroDoBancoDeDados['sexo'];
        if (isset($registroDoBancoDeDados['rg'])) $this->rg = $registroDoBancoDeDados['rg'];
        if (isset($registroDoBancoDeDados['orgao_emissor_rg'])) $this->orgaoEmissorRg = $registroDoBancoDeDados['orgao_emissor_rg'];
        if (isset($registroDoBancoDeDados['uf_orgao_emissor_rg'])) $this->ufOrgaoEmissorRg = $registroDoBancoDeDados['uf_orgao_emissor_rg'];
        if (isset($registroDoBancoDeDados['data_emissao_rg'])) $this->dataEmissaoRg = $registroDoBancoDeDados['data_emissao_rg'];
        if (isset($registroDoBancoDeDados['nome_mae'])) $this->nomeMae = $registroDoBancoDeDados['nome_mae'];
        if (isset($registroDoBancoDeDados['nome_pai'])) $this->nomePai = $registroDoBancoDeDados['nome_pai'];

        if (isset($registroDoBancoDeDados['id_estado_civil'])) $this->idEstadoCivil = $registroDoBancoDeDados['id_estado_civil'];
        if (isset($registroDoBancoDeDados['descricao_estado_civil'])) $this->descricaoEstadoCivil = $registroDoBancoDeDados['descricao_estado_civil'];

        if (isset($registroDoBancoDeDados['id_regime_casamento'])) $this->idRegimeCasamento = $registroDoBancoDeDados['id_regime_casamento'];
        if (isset($registroDoBancoDeDados['descricao_regime_casamento'])) $this->regimeCasamento = $registroDoBancoDeDados['descricao_regime_casamento'];
        if (isset($registroDoBancoDeDados['data_casamento'])) $this->dataCasamento = $registroDoBancoDeDados['data_casamento'];

        if (isset($registroDoBancoDeDados['grau_instrucao'])) $this->grauInstrucao = $registroDoBancoDeDados['grau_instrucao'];
        if (isset($registroDoBancoDeDados['id_grau_instrucao'])) $this->idGrauInstrucao = $registroDoBancoDeDados['id_grau_instrucao'];

        if (isset($registroDoBancoDeDados['id_tipo_participante'])) $this->idTipoParticipante = $registroDoBancoDeDados['id_tipo_participante'];
        if (isset($registroDoBancoDeDados['descricao_tipo_participante'])) $this->descricaoTipoParticipante = $registroDoBancoDeDados['descricao_tipo_participante'];

        if (isset($registroDoBancoDeDados['profissao'])) $this->profissao = $registroDoBancoDeDados['profissao'];
        if (isset($registroDoBancoDeDados['numero_pis_pasep'])) $this->numeroPisPasep = $registroDoBancoDeDados['numero_pis_pasep'];
        if (isset($registroDoBancoDeDados['nacionalidade'])) $this->nacionalidade = $registroDoBancoDeDados['nacionalidade'];
        if (isset($registroDoBancoDeDados['naturalidade'])) $this->naturalidade = $registroDoBancoDeDados['naturalidade'];
        if (isset($registroDoBancoDeDados['uf_naturalidade'])) $this->ufNaturalidade = $registroDoBancoDeDados['uf_naturalidade'];
        if (isset($registroDoBancoDeDados['eh_uniao_estavel'])) $this->ehUniaoEstavel = $registroDoBancoDeDados['eh_uniao_estavel'];

    }
    //</editor-fold>

    //<editor-fold desc="Gets e Sets da classe...">
    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getDataNascimento()
    {
        return $this->dataNascimento;
    }

    public function setDataNascimento($dataNascimento)
    {
        $this->dataNascimento = $dataNascimento;
    }

    public function getCpf()
    {
        return $this->cpf;
    }

    public function setCpf($cpf)
    {
        $this->cpf = $cpf;
    }

    public function getCnpj()
    {
        return $this->cnpj;
    }

    public function setCnpj($cnpj)
    {
        $this->cnpj = $cnpj;
    }

    public function getInscricaoEstadual()
    {
        return $this->inscricaoEstadual;
    }

    public function setInscricaoEstadual($inscricaoEstadual)
    {
        $this->inscricaoEstadual = $inscricaoEstadual;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
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
     * @param mixed $idTipoParticipante
     */
    public function setIdTipoParticipante($idTipoParticipante)
    {
        $this->idTipoParticipante = $idTipoParticipante;
    }

    /**
     * @return mixed
     */
    public function getIdTipoParticipante()
    {
        return $this->idTipoParticipante;
    }

    /**
     * @param mixed $telefoneResidencial
     */
    public function setTelefoneResidencial($telefoneResidencial)
    {
        $this->telefoneResidencial = $telefoneResidencial;
    }

    /**
     * @return mixed
     */
    public function getTelefoneResidencial()
    {
        return $this->telefoneResidencial;
    }

    /**
     * @param \LiberacaoCreditoModel $dadosLiberacaoCredito
     */
    public function setDadosLiberacaoCredito($dadosLiberacaoCredito)
    {
        $this->dadosLiberacaoCredito = $dadosLiberacaoCredito;
    }

    /**
     * @return \LiberacaoCreditoModel
     */
    public function getDadosLiberacaoCredito()
    {
        return $this->dadosLiberacaoCredito;
    }


    /**
     * @param mixed $telefoneCelular
     */
    public function setTelefoneCelular($telefoneCelular)
    {
        $this->telefoneCelular = $telefoneCelular;
    }

    /**
     * @return mixed
     */
    public function getTelefoneCelular()
    {
        return $this->telefoneCelular;
    }

    /**
     * @param mixed $telefoneComercial
     */
    public function setTelefoneComercial($telefoneComercial)
    {
        $this->telefoneComercial = $telefoneComercial;
    }

    /**
     * @return mixed
     */
    public function getTelefoneComercial()
    {
        return $this->telefoneComercial;
    }

    /**
     * @param mixed $telefoneOutro
     */
    public function setTelefoneOutro($telefoneOutro)
    {
        $this->telefoneOutro = $telefoneOutro;
    }

    /**
     * @return mixed
     */
    public function getTelefoneOutro()
    {
        return $this->telefoneOutro;
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

    public function getComplemento()
    {
        return $this->complemento;
    }

    public function setComplemento($complemento)
    {
        $this->complemento = $complemento;
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

    public function getEhParticipanteAtivo()
    {
        return $this->ehParticipanteAtivo;
    }

    public function setEhParticipanteAtivo($ehParticipanteAtivo)
    {
        $this->ehParticipanteAtivo = $ehParticipanteAtivo;
    }

    public function getDataCadastro()
    {
        return $this->dataCadastro;
    }

    public function setDataCadastro($dataCadastro)
    {
        $this->dataCadastro = $dataCadastro;
    }

    public function getSexo()
    {
        return $this->sexo;
    }

    public function setSexo($sexo)
    {
        $this->sexo = $sexo;
    }

    public function getRg()
    {
        return $this->rg;
    }

    public function setRg($rg)
    {
        $this->rg = $rg;
    }

    public function getOrgaoEmissorRg()
    {
        return $this->orgaoEmissorRg;
    }

    public function setOrgaoEmissorRg($orgaoEmissorRg)
    {
        $this->orgaoEmissorRg = $orgaoEmissorRg;
    }

    public function getUfOrgaoEmissorRg()
    {
        return $this->ufOrgaoEmissorRg;
    }

    public function setUfOrgaoEmissorRg($ufOrgaoEmissorRg)
    {
        $this->ufOrgaoEmissorRg = $ufOrgaoEmissorRg;
    }

    /**
     * @param mixed $dataEmissaoRg
     */
    public function setDataEmissaoRg($dataEmissaoRg)
    {
        $this->dataEmissaoRg = $dataEmissaoRg;
    }

    /**
     * @return mixed
     */
    public function getDataEmissaoRg()
    {
        return $this->dataEmissaoRg;
    }


    public function getNomeMae()
    {
        return $this->nomeMae;
    }

    public function setNomeMae($nomeMae)
    {
        $this->nomeMae = $nomeMae;
    }

    public function getNomePai()
    {
        return $this->nomePai;
    }

    public function setNomePai($nomePai)
    {
        $this->nomePai = $nomePai;
    }


    public function getProfissao()
    {
        return $this->profissao;
    }

    public function setProfissao($profissao)
    {
        $this->profissao = $profissao;
    }

    public function getNumeroPisPasep()
    {
        return $this->numeroPisPasep;
    }

    public function setNumeroPisPasep($numeroPisPasep)
    {
        $this->numeroPisPasep = $numeroPisPasep;
    }

    public function getNacionalidade()
    {
        return $this->nacionalidade;
    }

    public function setNacionalidade($nacionalidade)
    {
        $this->nacionalidade = $nacionalidade;
    }

    public function getNaturalidade()
    {
        return $this->naturalidade;
    }

    public function setNaturalidade($naturalidade)
    {
        $this->naturalidade = $naturalidade;
    }

    public function getUfNaturalidade()
    {
        return $this->ufNaturalidade;
    }

    public function setUfNaturalidade($ufNaturalidade)
    {
        $this->ufNaturalidade = $ufNaturalidade;
    }


    public function jsonSerialize()
    {
        return get_object_vars($this);
    }
    //</editor-fold>

    //<editor-fold desc="Gets e Sets de Outros Models...">

    /**
     * @param array $arrayFontesRenda
     */
    public function setArrayFontesRenda($arrayFontesRenda)
    {
        $this->arrayFontesRenda = $arrayFontesRenda;
    }

    /**
     * @return FonteRendaModel[]
     */
    public function getArrayFontesRenda()
    {
        return $this->arrayFontesRenda;
    }

    /**
     * @param array $arrayAplicacoesFinanceiras
     */
    public function setArrayAplicacoesFinanceiras($arrayAplicacoesFinanceiras)
    {
        $this->arrayAplicacoesFinanceiras = $arrayAplicacoesFinanceiras;
    }

    /**
     * @param \FinanciamentoModel[] $arrayFinanciamentos
     */
    public function setArrayFinanciamentos($arrayFinanciamentos)
    {
        $this->arrayFinanciamentos = $arrayFinanciamentos;
    }

    /**
     * @return \FinanciamentoModel[]
     */
    public function getArrayFinanciamentos()
    {
        return $this->arrayFinanciamentos;
    }

    /**
     * @return AplicacaoFinanceiraModel[]
     */
    public function getArrayAplicacoesFinanceiras()
    {
        return $this->arrayAplicacoesFinanceiras;
    }

    /**
     * @param array $arrayCartoesCredito
     */
    public function setArrayCartoesCredito($arrayCartoesCredito)
    {
        $this->arrayCartoesCredito = $arrayCartoesCredito;
    }

    /**
     * @return CartaoCreditoModel[]
     */
    public function getArrayCartoesCredito()
    {
        return $this->arrayCartoesCredito;
    }

    /**
     * @param array $arrayCompromissosFinanceiros
     */
    public function setArrayCompromissosFinanceiros($arrayCompromissosFinanceiros)
    {
        $this->arrayCompromissosFinanceiros = $arrayCompromissosFinanceiros;
    }

    /**
     * @return CompromissoFinanceiroModel[]
     */
    public function getArrayCompromissosFinanceiros()
    {
        return $this->arrayCompromissosFinanceiros;
    }

    /**
     * @param array $arrayDadosBancarios
     */
    public function setArrayDadosBancarios($arrayDadosBancarios)
    {
        $this->arrayDadosBancarios = $arrayDadosBancarios;
    }

    /**
     * @return DadoBancarioModel[]
     */
    public function getArrayDadosBancarios()
    {
        return $this->arrayDadosBancarios;
    }

    /**
     * @param array $arrayDadosParentesco
     */
    public function setArrayDadosParentesco($arrayDadosParentesco)
    {
        $this->arrayDadosParentesco = $arrayDadosParentesco;
    }

    /**
     * @param \ImovelParticipanteModel[] $arrayImoveis
     */
    public function setArrayImoveis($arrayImoveis)
    {
        $this->arrayImoveis = $arrayImoveis;
    }

    /**
     * @return \ImovelParticipanteModel[]
     */
    public function getArrayImoveis()
    {
        return $this->arrayImoveis;
    }

    /**
     * @param \VeiculoParticipanteModel[] $arrayVeiculos
     */
    public function setArrayVeiculos($arrayVeiculos)
    {
        $this->arrayVeiculos = $arrayVeiculos;
    }

    /**
     * @return \VeiculoParticipanteModel[]
     */
    public function getArrayVeiculos()
    {
        return $this->arrayVeiculos;
    }


    /**
     * @return ParentescoModel[]
     */
    public function getArrayDadosParentesco()
    {
        return $this->arrayDadosParentesco;
    }

    /**
     * @param mixed $dataCasamento
     */
    public function setDataCasamento($dataCasamento)
    {
        $this->dataCasamento = $dataCasamento;
    }

    /**
     * @return mixed
     */
    public function getDataCasamento()
    {
        return $this->dataCasamento;
    }

    /**
     * @param mixed $descricaoEstadoCivil
     */
    public function setDescricaoEstadoCivil($descricaoEstadoCivil)
    {
        $this->descricaoEstadoCivil = $descricaoEstadoCivil;
    }

    /**
     * @return mixed
     */
    public function getDescricaoEstadoCivil()
    {
        return $this->descricaoEstadoCivil;
    }

    /**
     * @param GrauInstrucaoModel $grauInstrucao
     */
    public function setGrauInstrucao($grauInstrucao)
    {
        $this->grauInstrucao = $grauInstrucao;
    }

    /**
     * @return GrauInstrucaoModel
     */
    public function getGrauInstrucao()
    {
        return $this->grauInstrucao;
    }

    /**
     * @param mixed $idEstadoCivil
     */
    public function setIdEstadoCivil($idEstadoCivil)
    {
        $this->idEstadoCivil = $idEstadoCivil;
    }

    /**
     * @return mixed
     */
    public function getIdEstadoCivil()
    {
        return $this->idEstadoCivil;
    }

    /**
     * @param mixed $idGrauInstrucao
     */
    public function setIdGrauInstrucao($idGrauInstrucao)
    {
        $this->idGrauInstrucao = $idGrauInstrucao;
    }

    /**
     * @return mixed
     */
    public function getIdGrauInstrucao()
    {
        return $this->idGrauInstrucao;
    }

    /**
     * @param mixed $idRegimeCasamento
     */
    public function setIdRegimeCasamento($idRegimeCasamento)
    {
        $this->idRegimeCasamento = $idRegimeCasamento;
    }

    /**
     * @return mixed
     */
    public function getIdRegimeCasamento()
    {
        return $this->idRegimeCasamento;
    }

    /**
     * @param mixed $regimeCasamento
     */
    public function setRegimeCasamento($regimeCasamento)
    {
        $this->regimeCasamento = $regimeCasamento;
    }

    /**
     * @return mixed
     */
    public function getRegimeCasamento()
    {
        return $this->regimeCasamento;
    }

    /**
     * @param \ResidenciaModel[] $residencia
     */
    public function setResidencia($residencia)
    {
        $this->residencia = $residencia;
    }

    /**
     * @return ResidenciaModel
     */
    public function getResidencia()
    {
        return $this->residencia;
    }

    /**
     * @param \EmpresaModel $empresaCorrespondete
     */
    public function setEmpresaCorrespondete($empresaCorrespondete)
    {
        $this->empresaCorrespondete = $empresaCorrespondete;
    }

    /**
     * @return \EmpresaModel
     */
    public function getEmpresaCorrespondete()
    {
        return $this->empresaCorrespondete;
    }

    /**
     * @param \DocumentoParticipanteModel[] $arrayDocumentos
     */
    public function setArrayDocumentos($arrayDocumentos)
    {
        $this->arrayDocumentos = $arrayDocumentos;
    }

    /**
     * @return \DocumentoParticipanteModel[]
     */
    public function getArrayDocumentos()
    {
        return $this->arrayDocumentos;
    }

    /**
     * @param \DadosProfissionais[] $arrayDadosProfissionais
     */
    public function setArrayDadosProfissionais($arrayDadosProfissionais)
    {
        $this->arrayDadosProfissionais = $arrayDadosProfissionais;
    }

    /**
     * @return \DadosProfissionais[]
     */
    public function getArrayDadosProfissionais()
    {
        return $this->arrayDadosProfissionais;
    }


    /**
     * @param mixed $ehUniaoEstavel
     */
    public function setEhUniaoEstavel($ehUniaoEstavel)
    {
        $this->ehUniaoEstavel = $ehUniaoEstavel;
    }

    /**
     * @return mixed
     */
    public function getEhUniaoEstavel()
    {
        return $this->ehUniaoEstavel;
    }


    //</editor-fold>

}

?>
