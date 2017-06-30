<?php

namespace Bents\Core\Utils {

    use Bents\Core\Config;

    class PasswordUtils
    {
        /**
         * Return the password encoded
         * @param $password string
         * @param $salt string
         * @return string
         */
        public static function EncodePassword($password, $salt)
        {
            $fixedSalt = Config::Security()->GetFixedSalt();
            return sha1($password . $salt . $fixedSalt);
        }

        /**
         * Return a string containing a salt to add to the DataBase
         * @return string
         */
        public static function GenerateSalt()
        {
            $codes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_-?:+=';
            $salt = '';
            for ($i = 0; $i < 20; $i++) {
                $salt .= $codes[rand(0, 76)];
            }
            return $salt;
        }

        /**
         * Check if the password is valid
         * @param $password
         * @return bool
         */
        public static function ValidatePassword($password)
        {
            return UsuarioDAO::VerificarSenhaAtual($password);
        }
    }
}