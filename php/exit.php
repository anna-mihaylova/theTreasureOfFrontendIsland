<?php

session_start();

require_once 'db_settings.php';

const REGISTRED = 'Thank you for registration!';
const USERNAME_EXIST = 'Username already exists';
const EMAIL_EXIST = 'Email already exists';

$getUsername = empty($_POST['username']) ? '0' : $_POST['username'];
$getPoints = empty($_POST['points']) ? '0' : $_POST['points'];
$getGames = empty($_POST['games']) ? '0' : $_POST['games'];
$getWins = empty($_POST['wins']) ? '0' : $_POST['wins'];
$getHtml = empty($_POST['html']) ? '0' : $_POST['html'];
$getCss = empty($_POST['css']) ? '0' : $_POST['css'];
$getJs = empty($_POST['js']) ? '0' : $_POST['js'];
$getBomb = empty($_POST['bomb']) ? '0' : $_POST['bomb'];
$getHook = empty($_POST['hook']) ? '0' : $_POST['hook'];
$getPipe = empty($_POST['pipe']) ? '0' : $_POST['pipe'];


$pdo = new PDO('mysql:host=localhost;dbname=frontend_island', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);


$updateUserSql = "UPDATE users SET `points`='$getPoints', `games`='$getGames' , `wins`='$getWins',
                            `html`='$getHtml', `css`='$getCss', `js`='$getJs' , `bomb`='$getBomb',
                             `hook`='$getHook' , `pipe`='$getPipe' WHERE username ='$getUsername'";
$statement = $pdo->exec($updateUserSql);

if($statement !== false){
    echo json_encode('Success');
}
