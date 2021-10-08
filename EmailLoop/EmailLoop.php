<?php

$name = $_GET["name"];
$to = $_GET["toEmail"];
$subject = $_GET["subject"];
$message = $_GET["message"];
$headers = "From: " .$name;
if (empty($_GET['emailAddress']) ) {
    $headers = "From: NoEmail";
}

if ( !empty($_GET['message'])  ) {
    for($x = 0; $x < $_GET['num1']; $x++) {
        mail($to, $subject, $message, $headers);
    }
	echo 'Email Has Been Sent! <br>';
}
else {
    echo 'Email Has NOT Been Sent <br>';
}

$home = "index.html";
echo "<br><a href = " .$home .">Back Home</a>";
?>