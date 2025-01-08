<?php

class City extends stdClass implements JsonSerializable
{
    protected $City_Id = 0;
    protected $Name;
    protected $Country_Code;
    protected $Population;
    protected $District;

    public function __construct($City_Id, $Name, $Country_Code, $Population, $District)
    {
        $this->City_Id = $City_Id;
        $this->Name = $Name;
        $this->Country_Code = $Country_Code;
        $this->Population = $Population;
        $this->District = $District;
    }



    public function jsonSerialize()
    {
        return [
            "id" => $this->getCityId(),
            "nom" => $this->getName(),
            "code" => $this->getCountryCode(),
            "population" => $this->getPopulation(),
            "district" => $this->getDistrict()

        ];
    }


    public function getCityId()
    {
        return $this->City_Id;
    }

    public function setCityId($City_Id)
    {
        $this->City_Id = $City_Id;
    }

    public function getName()
    {
        return $this->Name;
    }

    public function setName($Name)
    {
        $this->Name = $Name;
    }

    public function getCountryCode()
    {
        return $this->Country_Code;
    }

    public function setCountryCode($Country_Code)
    {
        $this->Country_Code = $Country_Code;
    }

    public function getPopulation()
    {
        return $this->Population;
    }

    public function setPopulation($Population)
    {
        $this->Population = $Population;
    }

    public function getDistrict()
    {
        return $this->District;
    }

    public function setDistrict($District)
    {
        $this->District = $District;
    }




}