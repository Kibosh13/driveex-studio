<?php
session_start();
header("Content-Type: application/json; charset=utf-8");
$file = dirname(__DIR__) . "/content.json";
if ($_SERVER["REQUEST_METHOD"] === "GET") {
  if (!is_file($file)) {
    http_response_code(404);
    echo json_encode(array("ok" => false));
    exit;
  }
  readfile($file);
  exit;
}
if (empty($_SESSION["driveex_admin"])) {
  http_response_code(401);
  echo json_encode(array("ok" => false, "error" => "Нужно войти"));
  exit;
}
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data) || !isset($data["equipment"])) {
  http_response_code(400);
  echo json_encode(array("ok" => false, "error" => "Некорректные данные"));
  exit;
}
if (file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)) === false) {
  http_response_code(500);
  echo json_encode(array("ok" => false, "error" => "Не удалось записать файл"));
  exit;
}
echo json_encode(array("ok" => true));
