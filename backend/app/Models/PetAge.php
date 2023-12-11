<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PetAge extends Model
{
    protected $table = 'pet_ages';

    protected $fillable = ['name'];

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}
