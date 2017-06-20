<?php

require_once 'Model/ModelPessoas.php';
require_once 'DAO/DAOPessoas.php';
require_once 'Controller/EmpresaController.php';
require_once 'Controller/PessoaController.php';
require_once 'Controller/AvaliacaoController.php';
require_once 'Controller/ExameController.php';
require_once 'Model/ModelUnidadeLotacao.php';
require_once 'Model/ModelAvaliacao.php';

class ArquivoCSVController
{

    public function ImportarCSVPessoasAction()
    {
        if (isset($_FILES['arquivoCSVPessoas']) && isset($_POST['empresa']) && $_POST['token'] == $_SESSION['token']) {

            $fileCSV = $_FILES['arquivoCSVPessoas'];
            $dthora = strftime('%Y%m%d_%H%M%S');
            if (move_uploaded_file($fileCSV['tmp_name'], 'ArquivosCSV/colaboradores' . $dthora . '.csv')) {

                $file = file_get_contents('ArquivosCSV/colaboradores' . $dthora . '.csv');
            } else {
                throw new Exception('Erro no upload do arquivo.');
                die();
            }
        } else {

            throw new Exception('Erro no upload do arquivo.');
            die();
        }


//                $file = file_get_contents('ARQUIVOS/colaboradores.csv');
        //Passando o conteudo em CSV para um array arrPessoas.
        //Os campos abaixo devem estar na mesma ordem do arquivo CSV de pessoas
        $arrFields = array('ehPessoaAtiva', 'cpf', 'matricula', 'nome', 'sigla', 'descricao_cargo', 'nome_cidade_lotacao');
        $arrPessoas = '';
        //Qubrando o conteudo por linhas onde ha quebra de linha
        $arrLinhas = explode("\r\n", $file);
        //Montando array de pessoas com os chaves como nome das propriedades do objeto
        foreach ($arrLinhas as $key => $linha) {
            if ($key != 0 && $linha != null) {
                $arrPessoasExploded = explode(";", $linha);
                if (count($arrPessoasExploded) != count($arrFields)) {
                    die("Erro ao processar arquivo CSV");
                }
                foreach ($arrPessoasExploded as $keyExploded => $elemento) {
                    //Verifica e só processa a linha que tiver o texto ativo ou inativo na primeira coluna
                    if (strtolower($arrPessoasExploded[0]) == 'ativo' || strtolower($arrPessoasExploded[0]) == 'inativo') {
                        $arrPessoas[$key][$arrFields[$keyExploded]] = $elemento;
                    }
                }
            }
        }
        if (isset($_POST['empresa']) && $_POST['token'] == $_SESSION['token']) {
            //Os arrays abaixo contém informações sobre a empresa. Os valores que são inseridos no campo são só os Ids. Serão utilizados para
            //comparar com a descrição e obter o id.
            $dadosEmpresa = new EmpresaController();
            $arrCargos = $dadosEmpresa->ObterArrayTodosCargosPorIdEmpresa($_POST['empresa']);
            $arrSegmentos = $dadosEmpresa->ObterArrayTodosSegmentosPorIdEmpresa($_POST['empresa']);
            $arrUnidades = $dadosEmpresa->ObterArrayTodasUnidadesPorIdEmpresa($_POST['empresa']);

            //Criando um novo objeto e inserindo no banco
            //Obtendo a data do início do processo de inserção no banco de dados:
            $dataInicioProcessamentoComBD = date('Y-m-d H:i:s');

            foreach ($arrPessoas as $pessoaCSV) {

                $pessoa = new ModelPessoas($pessoaCSV);
                $pessoa->setIdEmpresa($_POST['empresa']);
                if (isset($_POST['ehRecrutamento']) && $_POST['ehRecrutamento'] == '1') {
                    $pessoa->setEhRecrutamento(1);
                }
                $pessoa->setDescricaoCargo($pessoaCSV['descricao_cargo']);


                foreach ($arrSegmentos as $segmento) {
                    if (strtolower($segmento->getSigla()) == strtolower($pessoaCSV['sigla'])) {
                        $pessoa->setIdSegmento($segmento->getId());
                        break;
                    }
                }

                foreach ($arrUnidades as $unidade) {
                    if (strtolower($unidade->getNomeCidadeLotacao()) == strtolower($pessoaCSV['nome_cidade_lotacao'])) {
                        $pessoa->setIdUnidadeLotacao($unidade->getId());
                        break;
                    }
                }

                if (strtolower($pessoaCSV['ehPessoaAtiva']) == 'ativo') {
                    $pessoa->setEhPessoaAtiva(1);
                }
                if (strtolower($pessoaCSV['ehPessoaAtiva']) == 'inativo' || $pessoaCSV['ehPessoaAtiva'] == '') {
                    $pessoa->setEhPessoaAtiva(0);
                }

                PessoaController::CadastrarOuAtualizarPessoa($pessoa);
                //echo ($pessoa->getNome());
            }

            //Ao final do processo, todas as pessoas que não tiveram sua data de modificação atualizadas,
            //deverão ter seu atributo "eh_pessoa_ativa" setado para 0, indicando que esta pessoa não veio nesta
            //planílha e não estará mais ativa no banco de dados.
            //$pessoaController->InativarPessoasModificadasAntesDaDataPorIdEmpresa($dataInicioProcessamentoComBD, 2);
            PessoaController::InativarPessoasModificadasAntesDaDataPorIdEmpresa($dataInicioProcessamentoComBD, $_POST['empresa']);

            $colaborador = new ModelPessoas();
            $arrColaboradores = PessoaController::ObterArrayPessoasPorFiltro($colaborador);
            $arrEmpresas = EmpresaController::ObterArrayEmpresasPorFiltro(new ModelEmpresa());
            $colaboradoresView = new View("View/colaboradores.php");
            $colaboradoresView->setParams(array('colaboradores' => $arrColaboradores, 'empresas' => $arrEmpresas));
            $colaboradoresView->showContents();
        }
    }

    public function ImportarCSVAvaliacoesAction()
    {
        if (isset($_FILES['arquivoCSVAvaliacoes']) && isset($_POST['empresa']) && $_POST['token'] == $_SESSION['token']) {

            $fileCSV = $_FILES['arquivoCSVAvaliacoes'];
            $dthora = strftime('%Y%m%d_%H%M%S');
            if (move_uploaded_file($fileCSV['tmp_name'], 'ArquivosCSV/avaliacoes' . $dthora . '.csv')) {

                $file = file_get_contents('ArquivosCSV/avaliacoes' . $dthora . '.csv');
            } else {
                throw new Exception('Erro no upload do arquivo.');
                die();
            }
        } else {

            throw new Exception('Erro no upload do arquivo.');
            die();
        }

        //$file = file_get_contents('ARQUIVOS/avaliacoes.csv');


        //Passando o conteudo em CSV para um array arrPessoas.
        //Os campos abaixo devem estar na mesma ordem do arquivo CSV de avaliacoes
        $arrFieldsCSV = array('cpf', 'matricula', 'dataAvaliacao', 'ehIndicado', 'refazerZul', 'refazerPalo', 'refazerAC', 'obs');
        $arrPessoas = '';
        //Qubrando o conteudo por linhas onde ha quebra de linha
        $arrLinhas = explode("\r\n", $file);

        //Montando array de pessoas com os chaves como nome das propriedades do objeto
        foreach ($arrLinhas as $key => $linha) {
            if ($key != 0 && $linha != null) {
                $arrPessoasExploded = explode(";", $linha);
                if (count($arrPessoasExploded) != count($arrFieldsCSV)) {
                    die("Erro ao processar arquivo CSV");
                }
                foreach ($arrPessoasExploded as $keyExploded => $elemento) {
                    $arrPessoas[$key][$arrFieldsCSV[$keyExploded]] = $elemento;
                }
            }
        }
        if (isset($_POST['empresa']) && $_POST['token'] == $_SESSION['token']) {


            $o_view = new View('View/avaliacao.php');
            $exames = ExameController::ObterArrayTodosExamesPorIdEmpresa(2);
            $qtdeErros = 0;
            $qtdeOk = 0;
            $arrInfo = Array();

            foreach ($arrPessoas as $pessoaCSV) {
                if ($pessoaCSV['dataAvaliacao'] == '') {
                    $qtdeErros++;
                    continue;
                }

                $pessoa = new ModelPessoas();
                $pessoa->setIdEmpresa($_POST['empresa']);
                if ($pessoaCSV['matricula'] != '') {
                    $pessoaMatricula = new ModelPessoas();
                    $pessoaMatricula->setMatricula($pessoaCSV['matricula']);
                    $arrPessoaEncontrada = PessoaController::ObterArrayPessoasPorFiltro($pessoaMatricula);
                    if (count($arrPessoaEncontrada) > 0)
                        $pessoa->setId($arrPessoaEncontrada[0]->getId());
                    else {
                        $qtdeErros++;
                        continue;
                    }

                }

                if ($pessoaCSV['cpf'] != '') {
                    $pessoaCpf = new ModelPessoas();
                    $pessoaCpf->setCpf($pessoaCSV['cpf']);
                    $arrPessoaEncontrada = PessoaController::ObterArrayPessoasPorFiltro($pessoaCpf);
                    if (count($arrPessoaEncontrada) > 0)
                        $pessoa->setId($arrPessoaEncontrada[0]->getId());
                    else {
                        $qtdeErros++;
                        continue;
                    }

                }


                /* if ($pessoaCSV['obs'] != 'OK') {
                     $arrExames = Array();
                     if ($pessoaCSV['obs'] == 'REFAZER TODOS') {
                         $exame = new ModelExame();
                         $exame->setId(1);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                         $exame = new ModelExame();
                         $exame->setId(2);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                         $exame = new ModelExame();
                         $exame->setId(3);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                     }
                     if ($pessoaCSV['obs'] == 'REFAZER ZULLIGER' || $pessoaCSV['obs'] == 'FALTA ZULL') {
                         $exame = new ModelExame();
                         $exame->setId(1);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                     }
                     if ($pessoaCSV['obs'] == 'REFAZER AC E PALO' || $pessoaCSV['obs'] == 'FALTA AC E PALO') {
                         $exame = new ModelExame();
                         $exame->setId(2);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                         $exame = new ModelExame();
                         $exame->setId(3);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                     }
                     if ($pessoaCSV['obs'] == 'REFAZER PALO' || $pessoaCSV['obs'] == 'FALTA PALO') {
                         $exame = new ModelExame();
                         $exame->setId(3);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                     }
                     if ($pessoaCSV['obs'] == 'REFAZER PALO E ZULLIGER' || $pessoaCSV['obs'] == 'FALTA PALO E ZULL') {
                         $exame = new ModelExame();
                         $exame->setId(1);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                         $exame = new ModelExame();
                         $exame->setId(3);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                     }
                     if ($pessoaCSV['obs'] == 'REFAZER AC' || $pessoaCSV['obs'] == 'FALTA AC') {
                         $exame = new ModelExame();
                         $exame->setId(1);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                         $exame = new ModelExame();
                         $exame->setId(3);
                         $exame->setPrecisaRefazerExame(1);
                         $arrExames[] = $exame;
                     }
                 }*/
                if ($pessoaCSV['refazerZul'] != '') {
                    $exame = new ModelExame();
                    $exame->setId(1);
                    $exame->setPrecisaRefazerExame(1);
                    $arrExames[] = $exame;
                }

                if ($pessoaCSV['refazerAC'] != '') {
                    $exame = new ModelExame();
                    $exame->setId(2);
                    $exame->setPrecisaRefazerExame(1);
                    $arrExames[] = $exame;
                }

                if ($pessoaCSV['refazerPalo'] != '') {
                    $exame = new ModelExame();
                    $exame->setId(3);
                    $exame->setPrecisaRefazerExame(1);
                    $arrExames[] = $exame;
                }

                $avaliacao = new ModelAvaliacao();

                if ($pessoaCSV['obs'] != '') {
                    $avaliacao->setObservacao($pessoaCSV['obs']);
                }

                $avaliacao->setPessoa($pessoa);
                $usuario = new ModelUsuario();
                $usuario->setId($_SESSION['idUsuarioLogado']);
                $avaliacao->setAvaliador($usuario);

                $dataAvaliacao = implode("-", array_reverse(explode("/", $pessoaCSV['dataAvaliacao'])));

                $avaliacao->setDataAvaliacao($dataAvaliacao);
                if (isset($arrExames)) {
                    $avaliacao->setArrayExames($arrExames);
                }
                if (strtolower($pessoaCSV['ehIndicado']) == 'contra indicado' || strtolower($pessoaCSV['ehIndicado']) == 'contraindicado' || strtolower($pessoaCSV['ehIndicado']) == 'contra-indicado') {
                    $avaliacao->setEhIndicado(0);
                    $avaliacao->setIdParecer(2);
                }

                if (strtolower($pessoaCSV['ehIndicado']) == 'indicado') {
                    $avaliacao->setEhIndicado(1);
                    $avaliacao->setIdParecer(1);
                }
                if (strtolower($pessoaCSV['ehIndicado']) == 'laudo pendente') {
                    $avaliacao->setEhIndicado(2);
                    //$avaliacao->setIdParecer(3);
                }

                $arrInfo[] = AvaliacaoController::SalvarAvaliacao($avaliacao);
            }

            foreach ($arrInfo as $info) {
                if ($info == 'erro' || $info == 0) {
                    $qtdeErros++;
                } else {
                    $qtdeOk++;
                }

            }
            $o_view->setParams(array('INFO' => $qtdeOk . " registros inseridos com sucesso. " . $qtdeErros . " registros não inseridos.", 'exames' => $exames));
            $o_view->showContents();
        }
    }

    public function CSVAvaliacoesAction()
    {
        $empresa = new ModelEmpresa();
        $arrEmpresas = EmpresaController::ObterArrayEmpresasPorFiltro($empresa);
        $o_view = new View('View/avaliacoesUpload.php');
        $o_view->setParams(array('empresas' => $arrEmpresas));
        $o_view->showContents();
    }

}

?>
