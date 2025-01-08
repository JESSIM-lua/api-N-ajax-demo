<?php
header_remove();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$cities = [
    ["id" => 51, "nom" => "Paris", "population" => 1000, "district" => "Ile de france"],
    ["id" => 52, "nom" => "Marseille", "population" => 8000, "district" => "Provence-Alpes-Côte"],
    ["id" => 53, "nom" => "Lyon", "population" => 7000, "district" => "Rhône-Alpes"],
    ["id" => 54, "nom" => "Bordeaux", "population" => 5000, "district" => "Aquitaine"]
];

echo json_encode($cities, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);