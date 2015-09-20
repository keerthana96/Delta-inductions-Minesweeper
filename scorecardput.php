<?php
	$name = $_POST["getname"];
	$min = $_POST["min"];
	$sec = $_POST["sec"];
	if($name!=""&&$min!=0&&$sec!=0)
	{
		$con = mysqli_connect("localhost","root","")
		or die(mysqli_error());
		$name = mysqli_real_escape_string($con,$name);
		mysqli_select_db("minesweeper");
		$c = mysqli_query($con , "INSERT INTO scorecard VALUES ('$name',$min,$sec);");
		if($c)
			echo "you feature in our leaderboard";
		else
			echo "connection failed";
	}
	else
		echo "enter a valid name";
?>