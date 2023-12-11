<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Call the PetTypeSeeder first
        $this->call(PetTypesSeeder::class);

        // Call the DogBreedSeeder
        $this->call(DogBreedSeeder::class);

        // Call the CatBreedSeeder
        $this->call(CatBreedSeeder::class);

        // Call the PetSizeSeeder
        $this->call(PetSizeSeeder::class);

        // Call the PetAgeSeeder
        $this->call(PetAgeSeeder::class);

        // Call the PetGenderSeeder
        $this->call(PetGenderSeeder::class);
    }
}
