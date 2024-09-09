<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Blair',
            'email' => 'blair@forthdev.com',
        ]);

        User::factory()->create([
            'name' => 'Dave',
            'email' => 'dave@forthdev.com',
        ]);

        User::factory()->create([
            'name' => 'Julie',
            'email' => 'julie@forthdev.com',
        ]);

        $this->call(CategorySeeder::class);
        $this->call(MediaSeeder::class);
        $this->call(ReporterSeeder::class);
        $this->call(EnquirySeeder::class);
        $this->call(ActionSeeder::class);
    }
}
