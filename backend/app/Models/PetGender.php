<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PetGender extends Model
{
    protected $table = 'pet_genders';

    protected $fillable = ['name'];
}
