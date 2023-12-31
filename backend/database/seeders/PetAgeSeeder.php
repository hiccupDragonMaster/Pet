<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PetAge;

class PetAgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $petAges = [
            '< 1 year',
            '1 Year',
            '2 Years',
            '3 Years',
            '4 Years',
            '5 Years',
            '6 Years',
            '7 Years',
            '8 Years',
            '9 Years',
            '10 Years',
            '11 Years',
            '12 Years',
            '13 Years',
            '14 Years',
            '15 Years',
            '16 Years',
            '17 Years',
            '18 Years',
            '19 Years',
            '20 Years',
            '21 Years',
            '22 Years',
            '23 Years',
            '24 Years',
            '25 Years',
            '+25 Years'
        ];

        foreach ($petAges as $age) {
            PetAge::create(['name' => $age]);
        }
    }
}
