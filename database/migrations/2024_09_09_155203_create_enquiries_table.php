<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('subject');
            $table->text('description')->nullable();
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('media_id')->constrained('media');
            $table->foreignId('reporter_id')->constrained('reporters');
            $table->timestamp('deadline');
            $table->foreignId('author_id')->constrained('users');
            $table->boolean('ooh')->default(false);
            $table->boolean('archived')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
