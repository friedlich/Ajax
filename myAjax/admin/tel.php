<?php
   $tel=$_POST["tel"];
   if($tel=='13811111111'){

   	echo '{"status":1,"msg":"手机号码已被注册"}';
   }else{
   	echo '{"status":0,"msg":{"tips":"手机号码可以使用","from":"中国移动"}}';
   }

  ?>