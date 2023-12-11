<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{

    public function addClient(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message'=>'Fail', 'result'=>'Access was made illegally.']);
        } else {
            $clientData = $request->input('clientData');
            $petData = $request->input('petData');
            $client_check = Client::where('email', $clientData['email'])->first();
            if ($client_check) {
                return response()->json(['message' => 'Success', 'result' => 0]);
            } else {
                $result = Client::create($clientData);
                $petData['client_id'] = $result->id;
                $resultPetData = Pet::create($petData);
                return response()->json(['message' => 'Success', 'result' => $petData]);
            }
        }
    }

    public function searchClient(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message'=>'Fail', 'result'=>'Access was made illegally.']);
        } else {
            $searchTerm = $request->input('searchTerm');
            $users = Client::query()
                    ->where('first_name', 'LIKE', "%$searchTerm%")
                    ->orWhere('last_name', 'LIKE', "%$searchTerm%")
                    ->orWhere('email', 'LIKE', "%$searchTerm%")
                    ->get();
            return response()->json(['message' => 'Success', 'result' => $users]);
        }
    }
}