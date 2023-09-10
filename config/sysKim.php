<?php

include_once 'sys.php';

if(isset($_POST['action'])){
    $acao = $_POST['action'];

    if($acao == 'chkcx'){
        session_start();
        if(!isset($_SESSION['id_User'])){
            echo json_encode(0); 
        } else {
            echo json_encode($_SESSION['id_Login']);
        }
    }
}

?>