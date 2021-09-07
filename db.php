<?php
$servername = "us-cdbr-east-04.cleardb.com";
$dbUsername ="b5c7a3eaf1b9bd";
$dbpwd = "074dabf5";
$dbName = "heroku_479a956ccf60830";

$conn = mysqli_connect($servername,$dbUsername,$dbpwd,$dbName);
if(!$conn){
  die("Connection Failed:".mysqli_connect_error());
}
?>