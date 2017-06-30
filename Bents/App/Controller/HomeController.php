<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\Model\User;
    use Bents\Core\View;

    /**
     * Class HomeController
     * @package Bents\App\Controller
     *
     */
    class HomeController extends Controller
    {

        /**
         *
         *
         */
        public function Index()
        {
            View::$bag['teste'] = 'teste 2';

            $user = new User();


            $reflection = new \ReflectionClass($user);
            $properties = $reflection->getProperties();
            foreach ($properties as $property) {

                $reflection = new \ReflectionProperty($user, $property->getName());
                if (preg_match("/@key/", $reflection->getDocComment())) {
                    ;
                    echo 'A chave é ' . $property->getName();
                    break;
                }

            }
            //var_dump($doc);

//            $user = $user->FindById(1);
//
//            $filter = new Filter();
//            $filter->where = array('login' => array('%ho%', Filter::OPERATOR_LIKE));
//            $filter->fields = array('login', 'createdAt');
//            //$filter->orderBy = array('login', array('idUser', Filter::DESCENDANT_ORDER));
//
//            $user = $user->FindByFilter($filter);

            var_dump($user);
            $this->RenderView();

        }

    }
}