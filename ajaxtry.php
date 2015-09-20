<?php
$name = $_REQUEST["name"];
$m = $_REQUEST["min"];
$s = $_REQUEST["sec"];
$con = mysqli_connect("localhost","root","")
or die(mysqli_error());
if($con)
echo "success";
mysqli_select_db($con,"minesweeper");
$c= mysqli_query($con,"INSERT INTO scorecard VALUES('$name',$m,$s);");
if($c)
			echo "you feature in our leaderboard";
		else
			echo "connection failed";
?>