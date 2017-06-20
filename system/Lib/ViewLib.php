<?php

/*
 * Document : LoginController.php
 * Created on : 10/05/2013, 17:39
 * Author : Helio Bentes
 * Description: Controller do login
 */

class ViewLib
{

    /**
     * Armazena o conteudo HTML
     * @var string
     */
    private $contents;

    /**
     * Parametros passados para a view
     * @var Array
     */
    private $parametros;

    /**
     * View que será chamada
     * @var
     */
    private $view;

    function __construct($view = null, $v_params = null)
    {
        if ($view != null)
            $this->setView($view);
        $this->parametros = $v_params;
    }

    /**
     * Define qual arquivo html deve ser renderizado
     * @param string $st_view
     * @throws Exception
     */
    public function setView($view)
    {
        if (file_exists($view))
            $this->view = $view;
        else
            throw new Exception("Arquivo View '$view' não existe!");
    }

    /**
     * Retorna o nome do arquivo que deve ser renderizado
     * @return string
     */
    public function getView()
    {
        return $this->view;
    }

    /**
     * Define os dados que devem ser repassados pra view
     * @param Array $v_params
     */
    public function setParams(Array $v_params)
    {
        $this->parametros = $v_params;
    }

    public function getParams()
    {
        return $this->parametros;
    }

    /**
     * Retorna uma string contendo todo
     * o conteudo do arquivo de visualização
     *
     * @return string
     */
    public function getContents()
    {

        ob_start();
        if (isset($this->view))
            require_once $this->view;

        $this->contents = ob_get_contents();
        ob_end_clean();
        return $this->sanitize_output($this->contents);
        //return  $this->contents;
    }

    /**
     * Imprime o arquivo de visualizacao
     */
    public function MostraConteudo()
    {
        echo $this->getContents();
        exit;
    }

    /**
     * Comprimir o HTML impresso
     * Retira espaços não usados, comentarios, quebra de linhas etc
     * @param $buffer
     * @return mixed
     */
    public function sanitize_output($buffer)
    {
        $search = array(
            '/\>+/s', //strip whitespaces after tags, except space
            '/[^\S]+\</s', //strip whitespaces before tags, except space
            '/:[^\S]+/s',
            '/;[^\S]+/s',
            '!/\*.*?\*/!s',
            '/\{[^\S]+/s',
            '/[^\S]+\}/s',
            '/\n\s*\n/',
            '!<\!--.*?\--\>!s',
            '/\>[^\S]+\</s',
            '/(\s)+/s' // shorten multiple whitespace sequences
        );
        $replace = array(
            '>',
            '<',
            ':',
            ';',
            '',
            '{',
            '}',
            '',
            '',
            '',
            ' '
        );
        $buffer = preg_replace($search, $replace, $buffer);
        //$buffer = preg_replace('(\r|\n|\t)', '', $buffer);
        return $buffer;
    }

}
