<?php
session_start();
header("Content-Type: application/json; charset=utf-8");
if (empty($_SESSION["driveex_admin"])) {
  http_response_code(401);
  echo json_encode(array("ok" => false, "error" => "Нужно войти"));
  exit;
}
if (empty($_FILES["file"]["tmp_name"])) {
  http_response_code(400);
  echo json_encode(array("ok" => false, "error" => "Файл не выбран"));
  exit;
}
$dir = dirname(__DIR__) . "/media/uploads";
if (!is_dir($dir)) mkdir($dir, 0755, true);
$ext = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));
if (!in_array($ext, array("jpg", "jpeg", "png", "webp"), true)) {
  http_response_code(400);
  echo json_encode(array("ok" => false, "error" => "Нужен jpg, png или webp"));
  exit;
}
$name = "upload-" . date("Ymd-His") . "." . $ext;
if (!move_uploaded_file($_FILES["file"]["tmp_name"], $dir . "/" . $name)) {
  http_response_code(500);
  echo json_encode(array("ok" => false, "error" => "Не удалось сохранить файл"));
  exit;
}
echo json_encode(array("ok" => true, "path" => "media/uploads/" . $name));
