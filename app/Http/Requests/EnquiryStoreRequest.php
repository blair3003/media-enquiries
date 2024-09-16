<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class EnquiryStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'ooh' => $this->boolean('ooh', false)
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'subject' => [
                'required',
                'string',
                'max:255'
            ],
            'description' => [
                'required',
                'string',
                'max:5000'
            ],
            'category_id' => [
                'required',
                'exists:categories,id'
            ],
            'media_id' => [
                'required',
                'exists:media,id'
            ],
            'reporter_id' => [
                'required',
                'exists:reporters,id'
            ],
            'deadline' => [
                'required',
                'date'
            ],
            'ooh' => [
                'boolean'
            ]
        ];
    }
}
