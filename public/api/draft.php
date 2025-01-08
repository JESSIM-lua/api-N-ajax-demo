<?php

    $servername = "localhost";
    $username = "root";
    $password = "123+aze";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=worlddb", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
      } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
      }


    $stmt = $conn->prepare("SELECT * FROM `city` WHERE CountryCode = 'FRA'");
    $stmt->execute();
    $cities = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($cities, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

    