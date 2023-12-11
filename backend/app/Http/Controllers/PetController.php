<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Models\PetType;
use App\Models\PetSize;
use App\Models\Breed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\stdClass;

class PetController extends Controller
{

    public function addNewPet(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message' => 'Fail', 'result' => 'Access was made illegally.']);
        } else {
            $petData = $request->input('petData');
            $id = $request->input('id');
            $petData['client_id'] = $id;
            $resultPetData = Pet::create($petData);
    
    
            $result_data_object = new \stdClass();
    
            $result_data_object->name = $resultPetData->name;
            $result_data_object->type = PetType::find($resultPetData->pet_type_id)->name;
            $result_data_object->size = PetSize::find($resultPetData->size_id)->name;
            $result_data_object->breed = Breed::find($resultPetData->breed_id)->name;
    
            return response()->json(['message' => 'Success', 'result' => $result_data_object]);
        }
    }

    public function selectedClientPet(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message' => 'Fail', 'result' => 'Access was made illegally.']);
        } else {
            $result_array = [];
        
            $client_id = $request->input('client_id');
            $result = Pet::where('client_id', $client_id)->get();
            foreach ($result as $item) {
    
                $result_data_object = new \stdClass();
    
                $result_data_object->name = $item->name;
                $result_data_object->type = PetType::find($item->pet_type_id)->name;
                $result_data_object->size = PetSize::find($item->size_id)->name;
                $result_data_object->breed = Breed::find($item->breed_id)->name;
    
                array_push($result_array, $result_data_object);
            }
            
            return response()->json(['message' => 'Success', 'result' => $result_array]);
        }
    }
}