<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Media;
use App\Models\Reporter;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enquiry>
 */
class EnquiryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = Category::all();
        $category = $categories->isEmpty() ? Category::factory()->create() : $categories->random();

        $medias = Media::all();
        $media = $medias->isEmpty() ? Media::factory()->create() : $medias->random();

        $reporters = $media->reporters;
        $reporter = $reporters->isEmpty() ? Reporter::factory()->create(['media_id' => $media]) : $reporters->random();

        $users = User::all();
        $author = $users->isEmpty() ? User::factory()->create() : $users->random();

        return [
            'subject' => fake()->words(rand(3, 9), true),
            'description' => fake()->paragraph(),
            'category_id' => $category,
            'media_id' => $media,
            'reporter_id' => $reporter,
            'deadline' => fake()->dateTimeThisMonth(),
            'author_id' => $author,
            'ooh' => fake()->boolean(20),
            'archived' => fake()->boolean(10),
        ];
    }
}
