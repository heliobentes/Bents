<?php

class PasswordUtils
{
    public static function CodificarSenha($senha, $salt)
    {
        $saltFixo = '$6$f9Sp6p7ikww2$X5pxLlKDxiQhaakRrdIXOeRG09aOzLAlL9doHWGEIsaekoOVp8WAwnudlFhs9IUsTu0Z0zlBpVeHnT9XvXFd20';
        return sha1($senha . $salt . $saltFixo);
    }

    public static function GeraSalt()
    {
        return rand(0, 99999999);
    }

    public static function VerificarSenhaAtual($senhaAtual)
    {
        return UsuarioDAO::VerificarSenhaAtual($senhaAtual);
    }
}
