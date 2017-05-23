<?
$account="thetreasureoffrontendisland@gmail.com";
$password="theTreasureOfFrontendIsland";
$to="thetreasureoffrontendisland@gmail.com";
$from="thetreasureoffrontendisland@gmail.com";
$from_name="thetreasureoffrontendisland";
$msg="<strong>This is a bold text.</strong>"; // HTML message
$subject="HTML message";
/*End Config*/

include("phpmailer/class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Host = "74.208.5.2";
$mail->SMTPAuth= true;
$mail->Port = 25; // Or 587
$mail->Username= $account;
$mail->Password= $password;
$mail->SMTPSecure = "tls";
$mail->SMTPKeepAlive = true;
$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body = $msg;
$mail->addAddress($to);
if(!$mail->send()){
 echo "Mailer Error: " . $mail->ErrorInfo;
}else{
 echo "E-Mail has been sent";
}
?>
