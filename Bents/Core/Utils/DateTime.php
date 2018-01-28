<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 1/27/18
 * Time: 6:02 PM
 */

namespace Bents\Core\Utils;


class DateTime
{
    /**
     * @param $date
     * @param string $format = "%d/%m/%Y"
     * @return string
     */
    public static function Format($date, $format = '%d/%m/%Y'){
        return strftime($format,strtotime($date));
    }
}