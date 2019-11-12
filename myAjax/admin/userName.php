<?php  

$cbName=$_GET["cb"];
$userName = $_GET["userName"];
if($userName == 'xiaoming'){
	echo $cbName."('NO')";
}else{
	echo $cbName."('OK')";
}
?>