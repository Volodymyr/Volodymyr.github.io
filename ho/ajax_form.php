<?php

if (isset($_POST["name"]) && isset($_POST["phonenumber"]) ) {
  $result = array(
    'name' => $_POST["name"],
    'phone' => $_POST["phone"]
    'mail' => $_POST["mail"]
    'text' => $_POST["text"]
  );

  echo json_encode($result);
}

?>