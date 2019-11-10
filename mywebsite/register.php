<?php  
$userName = $_POST["userName"];
if($userName == 'xiaoming'){
	echo "用户名已经注册";
}else{
	echo "用户名可以使用";
}
?>