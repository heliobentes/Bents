<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 1/27/18
 * Time: 7:34 PM
 */

namespace Bents\Core\Utils;


class Numbers
{

    /**
     * @param float|int $number
     * @param int $decimals
     * @param string $decimalSep
     * @param string $thousandSep
     * @return string
     */
    public static function Format($number,$decimals=2, $decimalSep = '.',$thousandSep=','){
        return number_format($number,$decimals,$decimalSep,$thousandSep);
    }
}