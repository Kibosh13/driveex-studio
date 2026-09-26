<?php
session_start();
header("Content-Type: application/json; charset=utf-8");
$config = require __DIR__ . "/config.php";
$input = json_decode(file_get_contents("php://input"), true) ?: array();
$ok = isset($input["login"], $input["password"])
  && hash_equals($config["user"], $input["login"])
  && password_verify($input["password"], $config["hash"]);
if ($ok) {
  $_SESSION["driveex_admin"] = true;
  echo json_encode(array("ok" => true));
} else {
  http_response_code(401);
  echo json_encode(array("ok" => false, "error" => "Неверный логин или пароль"));
}
