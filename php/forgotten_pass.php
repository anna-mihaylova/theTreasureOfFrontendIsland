<?php

class GetPassword extends RecursiveIteratorIterator {
    function __construct($it) {
        parent::__construct($it, self::LEAVES_ONLY);
    }

    function current() {
        return  parent::current();
    }
}

$servername = "localhost";
$username = "root";
$password = "rootroot";
$dbname = "frontend_island";

$getUserEmail = empty($_POST['username']) ? '' : $_POST['username'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT password FROM users WHERE email = '$getUserEmail'");
    $stmt->execute();

    // set the result array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
	// get the right password
    foreach(new GetPassword(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
      // this is password
        echo $v;
        // must send email
          $to = $getUserEmail;
          $subject = "Forgotten password";
          $txt = "Hello! Here is you password: " .$v;
          $headers = "From: frontendislandgame03@gmail.com" . "\r\n" ;
          echo "Email was send!";
          mail($to,$subject,$txt,$headers);
    }

  }
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
?>
