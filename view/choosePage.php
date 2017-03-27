<?php

      $data=$_GET;
      $title=$data["title"];
      if($title==="请假"){
      $datas=file_get_contents("../datas/leaves.txt");
        echo $datas;
      }
      else{
      $datas='{"err":"nothing"}';
      echo $datas;
      }

?>