<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 2:58 PM
 */

namespace Bents\Core\Model {


    class Role
    {
        private $controller;
        private $action;

        /**
         * Rule constructor.
         * @param $role array
         */
        public function __construct(array $role)
        {
            $this->controller = $role['controller'];
            $this->action = $role['action'];
        }

        /**
         * @return mixed
         */
        public function getController()
        {
            return $this->controller;
        }

        /**
         * @return mixed
         */
        public function getAction()
        {
            return $this->action;
        }


    }
}