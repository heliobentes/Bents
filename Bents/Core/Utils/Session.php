<?php

namespace Bents\Core\Utils {

    use Bents\Application;
    use Bents\Core\Config;

    class Session
    {
//        /**
//         * Update User Session
//         * @param $idUsuario
//         */
//        public static function atualizarSessionDoUsuario($idUsuario)
//        {
//            $usuario = new UsuarioModel();
//            $usuario->setId($idUsuario);
//
//            /**
//             * @var UsuarioModel $usuarioLogado
//             */
//            $usuarioLogado = UsuarioController::ObterArrayUsuariosPorFiltro($usuario);
//
//            /* Obtendo permissões do usuário  */
//            $usuarioLogado[0]->setArrayFuncoesAutorizadas(UsuarioController::ObterFuncoesPermitidasPorIdUsuario($usuarioLogado[0]->getId()));
//            $usuarioLogado[0]->setArrayModulosAutorizados(UsuarioController::ObterModulosPermitidosPorIdUsuario($usuarioLogado[0]->getId()));
//
//            $_SESSION['usuario'] = serialize($usuarioLogado[0]);
//        }

        /**
         * @return Config
         */
        public static function GetConfigurationFromSession()
        {
            $_SESSION['config'] = null;

            if (isset($_SESSION['config'])) {
                return $_SESSION['config'];
            } else {
                $json = file_get_contents(Application::$appPath . 'config.json');
                $obj = json_decode($json);
                $_SESSION['config'] = $obj;
                return $obj;
            }
        }
    }
}