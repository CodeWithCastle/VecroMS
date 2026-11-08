<?php
	error_reporting(0);
	include("connect.php");
	?>
<?php
	if(isset($_POST['addnew'])){
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$mobile=$_POST['mobile'];
		$mail=$_POST['mail'];
		$address=$_POST['address'];
		$lga=$_POST['lga'];
		$reg=time();
		$status= "active";


		$setUser = mysqli_query($connect_to_server, "INSERT INTO users(user_id, user_firstname, user_lastname, user_mobile, user_email, user_address, user_lga, reg_time, status) VALUES('', '".$fname."', '".$lname."', '".$mobile."', '".$mail."', '".$address."', '".$lga."', '".$reg."', '".$status."')" );

		if($setUser){
			echo '<script>alert("Registration Successful")</script>';
			header("refresh:0; url=../../projects/garagepro");
		}


	}
?>
