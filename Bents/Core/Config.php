<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/21/17
 * Time: 6:13 PM
 */

namespace Bents\Core {


    use Bents\Core\Configuration\DataBase;
    use Bents\Core\Configuration\Debug;
    use Bents\Core\Configuration\Globalization;
    use Bents\Core\Configuration\Security;
    use Bents\Core\Configuration\SystemBehavior;

    class Config
    {
        /**
         * @return Debug
         */
        public static function Debug(): Debug
        {
            return new Debug();
        }

        /**
         * @return SystemBehavior
         */
        public static function SystemBehavior(): SystemBehavior
        {
            return new SystemBehavior();
        }

        /**
         * @return DataBase
         */
        public static function DataBase(): DataBase
        {
            return new DataBase();
        }

        /**
         * @return Globalization
         */
        public static function Globalization(): Globalization
        {
            return new Globalization();
        }

        /**
         * @return Security
         */
        public static function Security(): Security
        {
            return new Security();
        }
    }
}