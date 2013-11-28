<?php
require_once("rs.php");
$accessKey = 'px5Itiq0hsoWItF4j1-jQXlyZtwA7ClePXfa3jPl';
$secretKey = 'L476dqun0zwQy26ZNLBR2CQricJ3UyTSnvXMrmcZ';
$bucket = "da22";

Qiniu_SetKeys($accessKey, $secretKey);
$mac = new Qiniu_Mac($accessKey,$secretKey);
if($_POST["putExtra"]){
	$extra = json_decode($_POST["putExtra"]);
	if($extra){
		$scope = $bucket.":".$extra->{'key'};
		$policy = new Qiniu_RS_PutPolicy($scope);
		$policy->Expires = 3600*24*30;
		echo $policy->token($mac);
	}
}
?>
