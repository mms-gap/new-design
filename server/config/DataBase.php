<?php
    class DataBase {
        private $host ='localhost';
        private $db_name = 'mms-gap-new';
        private $user_name = 'root';
        private $password = 'newpass';
        private $conn;

        public function connect() {
            $this->conn = null;

            try {
                $this->conn = new PDO('mysql:host=' .$this->host .";dbname=" .$this->db_name,
                $this->user_name, $this->password);
                $this->conn->setAttribute(PDO :: ATTR_ERRMODE, PDO :: ERRMODE_EXCEPTION);
            }
            catch (PDOException $e){
                echo 'Connction error : ' .$e->getmessage();
            }

            return $this->conn;
        }
    }

?>