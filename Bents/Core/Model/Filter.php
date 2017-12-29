<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/25/17
 * Time: 6:55 PM
 */

namespace Bents\Core\Model {


    class Filter
    {
        const OPERATOR_LIKE = 'LIKE';
        const OPERATOR_NOT_LIKE = 'NOT LIKE';
        const OPERATOR_EQUAL = '=';
        const OPERATOR_NULL_SAFE_EQUAL = '<=>';
        const OPERATOR_DIFF = '!=';
        const OPERATOR_IN = 'IN';
        const OPERATOR_IS = 'IS';
        const OPERATOR_IS_NOT = 'IS NOT';
        const OPERATOR_IS_NULL = 'IS NULL';
        const OPERATOR_IS_NOT_NULL = 'IS NOT NULL';
        const OPERATOR_LESS_THAN = '<';
        const OPERATOR_LESS_THAN_OR_EQUAL = '<=';
        const OPERATOR_GREATER_THAN = '>';
        const OPERATOR_GREATER_THAN_OR_EQUAL = '>=';


        const ASCENDANT_ORDER = 'ASC';
        const DESCENDANT_ORDER = 'DESC';


        public $where = array();
        public $fields = array('*');
        public $logicalOperator = 'AND';
        public $orderBy = array();
        public $limit = null;
    }
}