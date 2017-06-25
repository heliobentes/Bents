<?php

namespace Bents\App\Controller {

    use Bents\Core\Controller;
    use Bents\Core\Model\Filter;
    use Bents\Core\Model\User;
    use Bents\Core\View;

    class HomeController extends Controller
    {
        protected $unprotectedActions = array('');

        public function Index()
        {
            View::$bag['teste'] = 'teste 2';

            $user = new User();
            $user = $user->FindById(1);

            $filter = new Filter();
            $filter->where = array('login' => array('%ho%', Filter::OPERATOR_LIKE));
            $filter->fields = array('login', 'createdAt');
            //$filter->orderBy = array('login', array('idUser', Filter::DESCENDANT_ORDER));

            $user = $user->FindByFilter($filter);

            var_dump($user);
            $this->RenderView();

        }

    }
}