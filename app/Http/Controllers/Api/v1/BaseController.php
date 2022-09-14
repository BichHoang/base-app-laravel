<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Routing\Controller;
use App\Utils\HttpCodeTransform;

class BaseController extends Controller
{
    public function sendResponseError(array|null $error, string $message, int $code)
    {
        $res = [
            'error' => [
                'errors' => $error,
                'message' => $message,
                'code' => $code,
                'status_code' => HttpCodeTransform::STATUS_CODE[$code],
            ]
        ];
        return response()->json($res, $code);
    }

    public function sendResponseSuccess($data, $message = '', $code = 200)
    {
        $res = [
            'data' => $data,
            'message' => $message,
            'code' => $code,
            'status_code' => HttpCodeTransform::STATUS_CODE[$code],
        ];
        return response()->json($res, $code);
    }
}
