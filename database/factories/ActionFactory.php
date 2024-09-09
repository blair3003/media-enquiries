<?php

namespace Database\Factories;

use App\Models\Enquiry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Action>
 */
class ActionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $users = User::all();
        $author = $users->isEmpty() ? User::factory()->create() : $users->random();

        $enquiries = Enquiry::all();
        $enquiry = $enquiries->isEmpty() ? Enquiry::factory()->create() : $enquiries->random();

        $status = $enquiry->archived ? 'Completed' : fake()->randomElement(['Completed', 'In Progress']);

        return [
            'author_id' => $author,
            'enquiry_id' => $enquiry,
            'message' => fake()->sentence(),
            'status' => $status,
        ];
    }
}
