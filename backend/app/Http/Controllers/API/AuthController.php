<?php
namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{   
    
    public function register(Request $request)
    {
        // $request->validate([
        //     'first_name' => 'required',
        //     'last_name' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'password' => 'required|confirmed',
        // ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response(['message' => 'successful']);
    }

    public function login(Request $request)
    {
        
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        $user = User::where('email', $request->email)->first();
        
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Credentials incorrect',
            ], 401);
        }
    
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'success' => true,
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }

    public function logout(Request $request){
        try {
            // Get the token from the request
            $token = $request->user()->currentAccessToken();

            // Check if token exists
            if (!$token) {
                throw new \Exception('No active access token found.');
            }

            // Revoke the token
            $token->delete();

            // Return a success response
            return response()->json([
                'success' => true,
                'message' => 'Successfully logged out'
            ], 200);

        } catch (\Exception $e) {
            // Handle the exception and return an error response
            return response()->json([
                'success' => false,
                'message' => 'Failed to log out: ' . $e->getMessage()
            ], 500);
        }
    }

    public function refreshToken(Request $request)
    {
        // Assuming you have some way to validate a refresh token
        $refreshToken = $request->input('refresh_token');
        if ($this->isValidRefreshToken($refreshToken)) {
            $user = auth()->user();
            $newToken = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $newToken,
            ]);
        } else {
            return response()->json(['message' => 'Invalid refresh token'], 401);
        }
    }
}