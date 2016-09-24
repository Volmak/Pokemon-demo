<?php

require_once 'db_settings.php';
$name = empty($_POST['name']) ? '' : $_POST['name'];
$score = empty($_POST['score']) ? '' : intval($_POST['score']);

$pdo = new PDO('mysql:host=localhost;dbname=pokemon', DB_USER, DB_PASS,[
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$insert = [$name, $score];

$insertHighscoreSql = 'INSERT INTO highscores (name, score) VALUES (?,?)';
$statement = $pdo->prepare($insertHighscoreSql);
$ids = [];

$statement->execute($insert);
$ids[] = $pdo->lastInsertId();
	
if($ids[0] == "" && $ids[1] == ""){
	return;
}else {
	echo json_encode($name . ': ' . $score . " points  - saved!");
}