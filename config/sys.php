<?php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $base = 'kimcode';        

    try{
        $pdo = new PDO("mysql:host={$host};dbname={$base};charset=UTF8;", $user, $pass);
        //echo 'OK';
    } catch (Exception $e) {
        die ('ERRO: Contate o Administrador');
    }