<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PetSize extends Model
{
    protected $table = 'pet_sizes';

    protected $fillable = ['name', 'description'];
}
