<?php

namespace App\Http\Controllers;

use App\Models\PetGender;
use App\Models\PetAge;
use App\Models\PetSize;
use App\Models\Breed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{

    public function getGender(Request $request)
    {
        $gender = PetGender::all();
        return response()->json(['message'=>'Successful', 'data'=>$gender]);
        
    }

    public function getAge(Request $request)
    {
        $age = PetAge::all();
        return response()->json(['message'=>'Successful', 'data'=>$age]);
    }

    public function getSize(Request $request)
    {
        $size = PetSize::all();
        return response()->json(['message'=>'Successful', 'data'=>$size]);
    }

    public function getBreed(Request $request)
    {
        $request->validate([
            'id' => 'required',
        ]);
        $breed = Breed::where('pet_type_id', $request->input('id'))->get();
        return response()->json(['message'=>'Successful', 'data'=>$breed]);
    }

}