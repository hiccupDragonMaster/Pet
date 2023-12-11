<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PetSize;

class PetSizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $petSizes = [
            ['name' => 'Mini', 'description' => '(0-25 pounds)'],
            ['name' => 'Midi', 'description' => '(26-50 pounds)'],
            ['name' => 'Maxi', 'description' => '(51-90 pounds)'],
            ['name' => 'Maxi+', 'description' => '(91+ pounds)'],
        ];

        foreach ($petSizes as $size) {
            PetSize::create($size);
        }
    }
}
