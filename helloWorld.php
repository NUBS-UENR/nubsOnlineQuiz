<?php
if (isset($_POST['submit'])){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$msg=$_POST['msg'];

	$to='robertksam2000@gmail.com';
	$subject='Form Submission';
	$message="Name: ".$name."\n"."Phone: ".$phone."\n"."Wrote the following: "."\n\n".$msg;
	$headers="From: ".$email;

	if(mail($to, $subject, $message, $headers)){
		echo "<h1> Sent successfully, you are now a member of NUBS UENR"." ".$name.", We will contact you shortly!</h1>";
	}
	else{
		echo "Hmmm, it seems something is wrong";
	}
}
?>