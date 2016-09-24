<?php

require_once 'db_settings.php';

$pdo = new PDO('mysql:host=localhost;dbname=pokemon', DB_USER, DB_PASS,[
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$selectHighscoreSql = 'SELECT name, score FROM highscores GROUP BY score DESC LIMIT 50;';
$statement = $pdo->prepare($selectHighscoreSql);

$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

if($result == []){
	return;
}else {
	echo json_encode($result);
}