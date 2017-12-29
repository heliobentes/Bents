<?php
/**
 * Created by PhpStorm.
 * User: heliobentes
 * Date: 6/29/17
 * Time: 8:18 PM
 */

namespace Bents\Core\Migration {


    use Bents\Application;
    use Bents\Core\DAO;
    use Bents\Core\Log;

    class Migration extends DAO
    {
        public static function Run()
        {
            try {
                if (!file_exists(Application::$corePath . 'Migration/.migration')) {
                    $dao = new DAO();
                    $pdo = $dao::$dbConn;

                    $sql = file_get_contents(Application::$corePath . 'Migration/migration.sql');
                    $stmt = $pdo->prepare($sql);
                    $stmt->execute();

                    $fp = fopen(Application::$corePath . 'Migration/.migration', 'w+');
                    fclose($fp);
                    echo 'Migration Done!<br>Refresh the page to continue using the system.';
                    exit;
                }

            } catch (\Exception $e) {
                Log::SaveLog($e);
                header($_SERVER['SERVER_PROTOCOL'] . 'HTTP/1.1 500 Internal Server Error', true, 500);
                include Config::SystemBehavior()->getErrorPage(500);
                exit;
            }
        }
    }
}