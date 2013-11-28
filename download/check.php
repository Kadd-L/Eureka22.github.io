<?php
require_once("rs.php");
// $accessKey = '6Ua-pviUhl0k75Juee5wOxb4LxXC_iGUxJQFBtzf';
// $secretKey = 'L_KNbmmO2nKPLlJOG1TxHvP4q56F3-lx_PhEs4zL';
// $bucket = "test";


// if($_POST["accessKey"]&&$_POST["secretKey"]&&$_POST["bucket"]){
// 	$accessKey = $_POST["accessKey"];
// 	$secretKey = $_POST["secretKey"];
// 	$bucket = $_POST["bucket"];
// }

$accessKey = 'px5Itiq0hsoWItF4j1-jQXlyZtwA7ClePXfa3jPl';
$secretKey = 'L476dqun0zwQy26ZNLBR2CQricJ3UyTSnvXMrmcZ';
$bucket = "da22";
$key = $_GET['key'];
$client = new Qiniu_MacHttpClient(null);
echo json_encode(Qiniu_RS_Stat($client,$bucket,$key));

?>