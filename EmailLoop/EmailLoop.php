<?php
// ini_set( 'display_errors', 1 );
// error_reporting( E_ALL );
// $name = $_GET["name"];
// $from = $_GET['fromEmail'];
// $to = $_GET["toEmail"];
// $subject = $_GET["subject"];
// $message = $_GET["message"];
// $headers = "From: " .$from;
// if (empty($from)) {
//     $headers = "From: NoEmail";
// }

// if ( !empty($message)  ) {
//     for($x = 0; $x < $_GET['num1']; $x++) {
//         mail($to, $subject, $message, $headers);
//     }
//     echo $x . 'Email Has Been Sent! <br>';
// }
// else {
//     echo 'Email Has NOT Been Sent <br>';
// }

mail('StephenG753@Gmail.com', 'Hello', 'Hi');
echo "Done";

$home = "index.html";
echo "<br><a href = " .$home .">Back Home</a>";
?>