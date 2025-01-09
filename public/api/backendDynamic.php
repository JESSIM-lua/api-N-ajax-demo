<?php
require_once "./City.php";

header_remove();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

function getCitiesFromCountry(string $countryCode): array {
    $servername = "localhost";
    $username = "root";
    $password = "123+aze";
    $dbname = "worlddb";
    $cities = [];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("
            SELECT City_Id AS cityId, Name AS name, CountryCode AS countryCode, 
                   District AS district, Population AS population
            FROM `city` 
            WHERE CountryCode = :CountryCode
        ");
        $stmt->bindParam(':CountryCode', $countryCode, PDO::PARAM_STR);
        $stmt->execute();

        $citiesData = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach ($citiesData as $data) {
            $cities[] = new City(
                $data['cityId'] ?? 0,
                $data['name'] ?? null,
                $data['countryCode'] ?? null,
                $data['population'] ?? null,
                $data['district'] ?? null
            );
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "error" => "Database connection or query error",
            "message" => $e->getMessage()
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        exit;
    } finally {
        $conn = null;
    }

    return $cities;
}


if (isset($_GET['code']) && preg_match('/^[A-Z]{2,3}$/', $_GET['code'])) {
    $countryCode = $_GET['code'];
    $cities = getCitiesFromCountry($countryCode);
    echo json_encode($cities, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(400);
    echo json_encode([
        "error" => "Invalid or missing 'code' parameter"
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}
