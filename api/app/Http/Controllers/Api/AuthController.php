<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $data = $request->only(['email', 'password']);
        $user = User::create([
            'email' => $data['email'],
            'name' => 'test',
            'password' => bcrypt($data['password']),
        ]);

        return new UserResource($user);
    }
}
