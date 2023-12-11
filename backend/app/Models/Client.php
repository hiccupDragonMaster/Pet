<?php

namespace App\Models;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Client extends Model
{
    protected $table = 'clients';

    protected $fillable = ['first_name', 'last_name', 'email', 'phone', 'address'];

    public function pets()
    {
        return $this->hasMany(Pet::class);
    }

}
