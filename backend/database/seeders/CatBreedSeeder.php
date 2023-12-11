<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PetType;
use App\Models\Breed;

class CatBreedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Find the pet type for dogs
        $catType = PetType::where('name', 'cat')->first();

        if (!$catType) {
            echo "Dog pet type not found. Make sure to run PetTypeSeeder first.\n";
            return;
        }

        $breeds = [
            "Abyssinian",
            "Aegean",
            "African Serval",
            "Afro-Chausie",
            "American Bobtail",
            "American Curl",
            "American Keuda",
            "American Longhair",
            "American Polydactyl",
            "American Shorthair",
            "American Wirehair",
            "Applehead Siamese",
            "Ashera",
            "Asian",
            "Asian Semi-Longhair",
            "Australian Mist",
            "Balinese",
            "Bengal",
            "Bicolor",
            "Birman",
            "Blue Russian",
            "Bombay",
            "Brazilian Shorthair",
            "Bristol",
            "British Longhair",
            "British Semi-Longhair",
            "British Shorthair",
            "Burmese",
            "Calico",
            "California Spangled Cat",
            "Caracat",
            "Chantilly/Tiffany",
            "Chartreux",
            "Chausie",
            "Cheetoh",
            "Colorpoint Shorthair",
            "Cornish Rex",
            "Cymric",
            "Devon Rex",
            "Dilute Calico",
            "Domestic Longhaired Cat",
            "Domestic Mediumhair",
            "Domestic Shorthaired Cat",
            "Don Sphynx",
            "Egyptian Mau",
            "Euro-Chausie",
            "European Burmese",
            "European Shorthair",
            "Exotic Shorthair",
            "Farm Cat",
            "German Rex",
            "Ginger Tabby",
            "Havana Brown",
            "Hemingway",
            "Himalayan",
            "Himalayan-Persian",
            "Ichabod",
            "Jaguarundi Curl",
            "Japanese Bobtail",
            "Javanese",
            "Jungle-Bob",
            "Jungle-Curl",
            "Korat",
            "LaPerm",
            "Machbagral",
            "Maine Coon",
            "Maltese",
            "Manx",
            "Minx",
            "Mitten Cat",
            "Mixed",
            "Munchkin",
            "Nebelung",
            "Norwegian Forest Cat",
            "Not Defined",
            "Ocicat",
            "Ojos Azules",
            "Oncicat",
            "Oriental Bicolour",
            "Oriental Longhair",
            "Oriental Shorthair",
            "Other",
            "Owyhee Bob",
            "Pantherette",
            "Persian",
            "Peterbald",
            "Pixie-bob",
            "Punjabi",
            "Ragamuffin",
            "Ragdoll",
            "Red Point Siamese",
            "Russian Blue",
            "Russian White",
            "Safari",
            "Savannah",
            "Scottie-Chausie",
            "Scottish Fold",
            "Selkirk Rex",
            "Serengeti",
            "Siamese",
            "Siamese/Tabby",
            "Siberian",
            "Singapura",
            "Skookum",
            "Smoke",
            "Snowshoe",
            "Sokoke",
            "Somali",
            "Sphynx",
            "Stone Cougar",
            "Sumxu",
            "Tabby",
            "Thai",
            "Tiger Cat",
            "Tiger/Siamese",
            "Tonkinese",
            "Torby",
            "Tortoiseshell",
            "Toyger",
            "Traditional Siamese",
            "Turkish Angora",
            "Turkish Van",
            "Tuxedo",
            "Ukrainian Levkoy",
            "Unknown",
            "Ussuri",
            "Van Kedisi",
            "Viverral",
            "York Chocolate Cat"
        ];

        foreach ($breeds as $breedName) {
            Breed::create([
                'name' => $breedName,
                'pet_type_id' => $catType->id
            ]);
        }
    }
}
