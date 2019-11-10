<?php  
  header("Content-Type:text/xml");
  $arr = array();
  $arr[0] = array("name" => "小明" ,"age" => "18" ,"sex" => "男" );
  $arr[1] = array("name" => "小红" ,"age" => "17" ,"sex" => "女" );
  $arr[2] = array("name" => "小刚" ,"age" => "20" ,"sex" => "男" );
  $arr[3] = array("name" => "小王" ,"age" => "19" ,"sex" => "男" );
?>
<?xml version="1.0" encoding="utf-8" ?>
<students>
    <?php 
        foreach ($arr as $key => $value) { 
    ?>

    <student>
        <name><?php echo $value['name'] ?></name>
        <age><?php echo $value['age'] ?></age>
        <sex><?php echo $value['sex'] ?></sex>
    </student>

    <?php
       }
    ?>
   
</students>

