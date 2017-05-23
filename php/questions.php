<?php

require_once 'db_settings.php';

$getTable = empty($_POST['table']) ? '' : $_POST['table'];
$getLevel = empty($_POST['level']) ? '' : $_POST['level'];


$pdo = new PDO('mysql:host=localhost;dbname=frontend_island', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$sth = $pdo->prepare("SELECT question, first, second, third, correct FROM $getTable WHERE level = '$getLevel'");
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);

if(empty($result) ){
    echo json_encode('error');
} else {
    echo json_encode($result);
}
