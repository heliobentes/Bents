<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 2:38 PM
 */

namespace Bents\Core\Model {


    use Bents\Core\DAO\UserDAO;
    use Bents\Core\Model;

    class User extends Model
    {
        private $idUser;
        private $login;
        private $pwHash;
        private $pwSalt;
        private $createdAt;

        /**
         * User constructor.
         * @param $user array
         */
        public function __construct($user = null)
        {
            if (isset($user['idUser'])) $this->idUser = $user['idUser'];
            if (isset($user['login'])) $this->login = $user['login'];
            if (isset($user['pwHash'])) $this->pwHash = $user['pwHash'];
            if (isset($user['pwSalt'])) $this->pwSalt = $user['pwSalt'];
            if (isset($user['createdAt'])) $this->createdAt = $user['createdAt'];
        }

        /**
         * @return mixed
         */
        public function getIdUser()
        {
            return $this->idUser;
        }

        /**
         * @return mixed
         */
        public function getLogin()
        {
            return $this->login;
        }

        /**
         * @return mixed
         */
        public function getPwHash()
        {
            return $this->pwHash;
        }

        /**
         * @return mixed
         */
        public function getPwSalt()
        {
            return $this->pwSalt;
        }

        /**
         * @return mixed
         */
        public function getCreatedAt()
        {
            return $this->createdAt;
        }

        /**
         * @param $login string
         * @return array|Role[]
         */
        public function GetRoles($login)
        {
            $dao = new UserDAO();
            return $dao->GetUserRoles($login);
        }
    }
}