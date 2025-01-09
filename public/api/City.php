<?php

class City implements JsonSerializable
{
    protected int $cityId = 0;
    protected ?string $name = null;
    protected ?string $countryCode = null;
    protected ?int $population = null;
    protected ?string $district = null;

    public function __construct(
        int $cityId = 0,
        ?string $name = null,
        ?string $countryCode = null,
        ?int $population = null,
        ?string $district = null
    ) {
        $this->cityId = $cityId;
        $this->name = $name;
        $this->countryCode = $countryCode;
        $this->population = $population;
        $this->district = $district;
    }

    public function jsonSerialize(): array
    {
        return [
            "id" => $this->getCityId(),
            "nom" => $this->getName(),
            "code" => $this->getCountryCode(),
            "population" => $this->getPopulation(),
            "district" => $this->getDistrict(),
        ];
    }

    // Getters and Setters
    public function getCityId(): int
    {
        return $this->cityId;
    }

    public function setCityId(int $cityId): void
    {
        $this->cityId = $cityId;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function getCountryCode(): ?string
    {
        return $this->countryCode;
    }

    public function setCountryCode(?string $countryCode): void
    {
        $this->countryCode = $countryCode;
    }

    public function getPopulation(): ?int
    {
        return $this->population;
    }

    public function setPopulation(?int $population): void
    {
        $this->population = $population;
    }

    public function getDistrict(): ?string
    {
        return $this->district;
    }

    public function setDistrict(?string $district): void
    {
        $this->district = $district;
    }
}
