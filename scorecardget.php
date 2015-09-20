<?php
	$conn = mysqli_connect("localhost","root","")
	or die(mysqli_error());
	mysqli_select_db($conn,"minesweeper");
	$data = mysqli_query($conn,"SELECT * FROM scorecard;");
	if(mysqli_num_rows($data)>0)
	{
		echo "<table  style=\"text-align:center;\"><th>Name</th><th>Minutes</th><th>Seconds</th>";
		while($row = mysqli_fetch_assoc($data))
			echo "<tr><td>" .$row['Name']. "</td><td>" .$row['Mins']. "</td><td>" .$row['Sec']."</td></tr>";
		echo "</table>";
		echo "<button name=\"back\" onclick=\"window.location.href='minesweeper.html'\" >Back";
	}
?>