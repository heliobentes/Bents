<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 2:58 PM
 */

namespace Bents\Core\Model {


    class Permission
    {
        private $controller;
        private $action;

        /**
         * Rule constructor.
         * @param $permission array
         */
        public function __construct(array $permission)
        {
            $this->controller = $permission['controller'];
            $this->action = $permission['action'];
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