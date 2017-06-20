<?php

/**
 * Document : SessionUtils.php
 * Created on : 06/06/2013, 11:45
 * Author : Helio Bentes
 * Description: Classe de funcoes uteis para a session
 */
class SessionUtils
{
    /**
     * Atualizar a sessao do usuario
     * @param $idUsuario
     */
    public static function atualizarSessionDoUsuario($idUsuario)
    {
        $usuario = new UsuarioModel();
        $usuario->setId($idUsuario);

        /**
         * @var UsuarioModel $usuarioLogado
         */
        $usuarioLogado = UsuarioController::ObterArrayUsuariosPorFiltro($usuario);

        /* Obtendo permissões do usuário  */
        $usuarioLogado[0]->setArrayFuncoesAutorizadas(UsuarioController::ObterFuncoesPermitidasPorIdUsuario($usuarioLogado[0]->getId()));
        $usuarioLogado[0]->setArrayModulosAutorizados(UsuarioController::ObterModulosPermitidosPorIdUsuario($usuarioLogado[0]->getId()));

        $_SESSION['usuario'] = serialize($usuarioLogado[0]);
    }
}
