<?php


namespace App\Services;

use App\Models\User;
use App\Repository\AuthRepository;
use Illuminate\Support\Facades\Log;
use Prettus\Validator\Exceptions\ValidatorException;

class AuthService
{
    /**
     * @var AuthRepository
     */
    protected AuthRepository $repository;

    /**
     * AuthService constructor.
     *
     * @param AuthRepository $repository
     */
    public function __construct(AuthRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param $user
     *
     * @return User|null
     */
    public function create($user): ?User
    {
        try {
            return $this->repository->create($user);
        } catch (ValidatorException $e) {
            Log::error($e);
            return null;
        }
    }
}
