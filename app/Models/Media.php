<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
    ];

    public function enquiries(): HasMany
    {
        return $this->hasMany(Enquiry::class);
    }

    public function reporters(): HasMany
    {
        return $this->hasMany(Reporter::class);
    }
}
