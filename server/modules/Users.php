<?php
    class Users{
        private $conn;
        private $table = 'users';

        public $id;
        public $name;

        public function __construct($db){
            $this->conn = $db;
        }

        public function read(){
            $query = 'SELECT *
                      FROM users';

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }
    }
?>