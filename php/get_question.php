<?php

$servername = "localhost";
$username = "root";
$password = "rootroot";
$dbname = "frontend_island";

$questoinId = 3;
$questionTable =  cssquestions;

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM cssquestions WHERE id = '$questoinId'");
    $stmt->execute();

    // set the result array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
	// get the right password

	$data = array();

		foreach($stmt->fetchAll() as $k=>$v) {
		// this is password
			echo json_encode($v);
		}
	}

catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
?>
