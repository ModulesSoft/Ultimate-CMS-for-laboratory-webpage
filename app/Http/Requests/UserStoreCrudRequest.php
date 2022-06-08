<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreCrudRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // only allow updates if the user is Super Admin
        return backpack_auth()->check() && backpack_user()->id == 1;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'    => 'required|unique:' . config('permission.table_names.users', 'users') . ',email',
            'name'     => 'required',
            'password' => 'required|confirmed',
        ];
    }
}
