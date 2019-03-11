<?php 

  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  include_once '../../config/DataBase.php';
  include_once '../../modules/Users.php';


  $database = new Database();
  $db = $database->connect();
  $user = new Users($db);
  $result = $user->read();
  $num = $result->rowCount();

  // Check if any posts
  if($num > 0) {
    // Post array
    $users_arr = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
      $users_item = array(
        'name' => $name,
      );

      array_push($users_arr, $users_item);
    }


    echo json_encode($users_arr);
  } else {
 
    echo json_encode(
      array('message' => 'No Users Found')
    );
  }

  ?>

