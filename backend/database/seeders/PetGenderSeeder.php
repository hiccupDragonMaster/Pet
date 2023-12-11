<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PetGender;

class PetGenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $petGenders = [
            'Male',
            'Neutered Male',
            'Female',
            'Spayed Female',
        ];

        foreach ($petGenders as $gender) {
            PetGender::create(['name' => $gender]);
        }
    }
}
