<?php

$data=$_POST;

 $text=$data['username'];
 $pwd=$data['pwd'];
 if($text=='123'){
    if($pwd=='123'){
header("Location: ./index.html");
    }
 }
?>