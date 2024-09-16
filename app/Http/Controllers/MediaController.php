<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Http\Requests\MediaStoreRequest;
use App\Http\Requests\MediaUpdateRequest;
use Inertia\Inertia;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $media = Media::query()
            ->orderBy(
                request("sort_by", 'name'),
                request("sort_dir", "asc")
            )
            ->paginate(15);

        $queryParams = request()->query();

        return Inertia::render('Media/Index', [
            'media' => $media,
            'queryParams' => $queryParams
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Media/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MediaStoreRequest $request)
    {
        $medium = Media::create($request->validated());
        dd($medium);


        return to_route('media.show', $medium)
            ->with('success', 'Media created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Media $medium)
    {
        return Inertia::render('Media/Show', [
            'media' => $medium->load('reporters', 'enquiries'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Media $medium)
    {
        return Inertia::render('Media/Edit', [
            'media' => $medium
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MediaUpdateRequest $request, Media $medium)
    {
        $medium->update($request->validated());

        return to_route('media.show', $medium)
            ->with('success', 'Media updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Media $medium)
    {
        //
    }
}
