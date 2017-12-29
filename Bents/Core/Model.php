<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 5:10 PM
 */

namespace Bents\Core {


    use Bents\Core\DAO\ModelDAO;
    use Bents\Core\Model\Filter;

    class Model
    {

        /**
         * @param $id string|int
         * @return mixed|null
         */
        public function FindById($id)
        {
            $modelDAO = new ModelDAO();
            return $modelDAO->GetById(get_class($this), $id);

        }

        public function FindByFilter(Filter $filter)
        {
            $modelDAO = new ModelDAO();
            return $modelDAO->FindByFilter(get_class($this), $filter);
        }
    }
}