<?php

session_start();

require_once 'db_settings.php';

const LOGIN = 'Thank you for login!';
const USERNAME_NO_EXIST = 'Username no exists';
const PASSWORD_NO_MATCH = 'The password does not match';

$getUsername = empty($_POST['username']) ? '' : $_POST['username'];
$getPassword = empty($_POST['password']) ? '' : $_POST['password'];


$pdo = new PDO('mysql:host=localhost;dbname=frontend_island', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$sth = $pdo->prepare("SELECT * FROM users WHERE username = '$getUsername'");

$sth->execute();

$result = $sth->fetchAll(PDO::FETCH_ASSOC);

if(empty($result) ){
    echo json_encode(USERNAME_NO_EXIST);
} else {
    if($result[0]['password'] === $getPassword){
        echo json_encode($result);
	} else {
        echo json_encode(PASSWORD_NO_MATCH);
	}
}
