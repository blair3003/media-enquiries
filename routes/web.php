<?php

use App\Http\Controllers\ActionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReporterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('enquiry.index');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return redirect()->route('enquiry.index');
    })->name('dashboard');

    Route::get('/enquiry/archived', [EnquiryController::class, 'archived'])->name('enquiry.archived');
    Route::resource('enquiry', EnquiryController::class);
    Route::resource('media', MediaController::class);
    Route::resource('reporter', ReporterController::class);
    Route::resource('action', ActionController::class);
    Route::resource('category', CategoryController::class);
    Route::post('/action/{action}/status', [ActionController::class, 'status'])->name('action.status');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
