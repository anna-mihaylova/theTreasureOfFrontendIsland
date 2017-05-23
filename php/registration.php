<?php

session_start();

require_once 'db_settings.php';

const REGISTRED = 'Thank you for registration!';
const USERNAME_EXIST = 'Username already exists';
const EMAIL_EXIST = 'Email already exists';

$getUsername = empty($_POST['username']) ? '' : $_POST['username'];
$getPassword = empty($_POST['password']) ? '' : $_POST['password'];
$getEmail = empty($_POST['email']) ? '' : $_POST['email'];
$points = 0;
$games = 0;
$wins = 0;
$html = 0;
$css= 0;
$js = 0;
$bomb = 0;
$hook = 0;
$pipe = 0;

$pdo = new PDO('mysql:host=localhost;dbname=frontend_island', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);


$user = [[$getUsername, $getPassword, $getEmail, $points, $games, $wins, $html, $css, $js, $bomb, $hook, $pipe]];

$updateUserSql = 'INSERT INTO users (username, password, email, points, games, wins, html, css, js, bomb, hook, pipe) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

$statement = $pdo->prepare($updateUserSql);
$ids = [];
$sth = $pdo->prepare("SELECT * FROM users WHERE username = '$getUsername'");
$sth->execute();
$resultUsername = $sth->fetchAll(PDO::FETCH_ASSOC);
if(empty($resultUsername) ){
	$sth = $pdo->prepare("SELECT * FROM users WHERE email = '$getEmail'");
	$sth->execute();
	$resultEmail= $sth->fetchAll(PDO::FETCH_ASSOC);
	if(empty($resultEmail) ){
		foreach ($user as $item) {
			$statement->execute($item);
			$ids[] = $pdo->lastInsertId();
		}
		if(empty($ids)){
			return;
		}else {
			echo json_encode(REGISTRED);
            return;
		}
	} else {
		echo json_encode(EMAIL_EXIST);
        return;
	}
} else {
	echo json_encode(USERNAME_EXIST);
    return;
}
