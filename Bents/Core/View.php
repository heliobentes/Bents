<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/20/17
 * Time: 8:30 PM
 */

namespace Bents\Core {


    class View
    {

        /**
         * Parametros passados para a view
         * @var mixed
         */
        public $viewBag;
        /**
         * Armazena o conteudo HTML
         * @var string
         */
        private $contents;
        /**
         * View que será chamada
         * @var
         */
        private $view;

        /**
         * Define qual arquivo html deve ser renderizado
         * @param string $st_view
         * @throws Exception
         */
        public function SetView($view)
        {
            //Se a view não for definida, seta a view como nome do controller atual + index
            if ($view == null) {
                $view = StartUp::$controller . '/' . StartUp::$action;
            }

            $view = StartUp::$path . '/View/' . $view . '.php';

            if (file_exists($view))
                $this->view = $view;
            else
                throw new \Exception("Arquivo View '$view' não existe!");
        }


        /**
         * Define os dados que devem ser repassados pra view
         * @param Array $v_params
         */
        public function SetParams(Array $v_params = null)
        {
            $this->viewBag = $v_params;
        }


        /**
         * Retorna uma string contendo
         * o conteudo do arquivo de visualização
         *
         * @return string
         */
        public function GetContents()
        {
            ob_start();
            if (isset($this->view))
                require_once $this->view;

            $this->contents = ob_get_contents();
            ob_end_clean();
            return $this->SanitizeOutput($this->contents);
            //return  $this->contents;
        }



        /**
         * Comprimir o HTML impresso
         * Retira espaços não usados, comentarios, quebra de linhas etc
         * @param $buffer
         * @return mixed
         */
        //TODO: reorganizar esse satize para ficar amis inteligente
        private function SanitizeOutput($buffer)
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
}