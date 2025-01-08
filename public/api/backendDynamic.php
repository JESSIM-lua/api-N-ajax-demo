<?php
require_once "./City.php";
header_remove();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

function getCitiesFromCountry(string $countryCode): array {
    $servername = "localhost";
    $username = "root";
    $password = "123+aze";
    $cities = [];


    try {
        $conn = new PDO("mysql:host=$servername;dbname=worlddb", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    $stmt = $conn->prepare("SELECT * FROM `city` WHERE CountryCode = :CountryCode");
    $stmt->bindParam(':CountryCode', $countryCode);
    $stmt->execute();
    $cities = $stmt->fetchAll(PDO::FETCH_CLASS, 'City');
    return $cities;
}

if (isset($_GET['code'])) {
    $cities = getCitiesFromCountry($_GET['code']);

 
} else {
    $cities = [];
}

echo json_encode($cities, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

