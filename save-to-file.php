<?php
  $log_file_name = '/home/pi/projects/dinnerGame/log.txt'; // Change to the log file name
  $message = $_POST['message']."\r\n"; // incoming message
  file_put_contents($log_file_name, $message, FILE_APPEND);
  header('Location: /'); // redirect back to the main site
?>
