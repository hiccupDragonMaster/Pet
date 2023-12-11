<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    protected $table = 'pets';

    protected $fillable = ['name', 'pet_type_id', 'breed_id', 'size_id', 'age_id', 'client_id', 'gender_id'];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function petType()
    {
        return $this->belongsTo(PetType::class, 'pet_type_id');
    }

    public function breed()
    {
        return $this->belongsTo(Breed::class, 'breed_id');
    }

    public function size()
    {
        return $this->belongsTo(PetSize::class, 'size_id');
    }

    public function gender()
    {
        return $this->belongsTo(PetGender::class, 'gender_id');
    }

    public function age()
    {
        return $this->belongsTo(PetAge::class, 'age_id');
    }
}
