<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Reporter;
use App\Http\Requests\ReporterStoreRequest;
use App\Http\Requests\ReporterUpdateRequest;
use Inertia\Inertia;

class ReporterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reporters = Reporter::with('media')
            ->orderBy(
                request("sort_by", 'name'),
                request("sort_dir", "asc")
            )
            ->paginate(15);

        $queryParams = request()->query();

        return Inertia::render('Reporter/Index', [
            'reporters' => $reporters,
            'queryParams' => $queryParams
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Reporter/Create', [
            'media' => Media::orderBy('name')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReporterStoreRequest $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reporter $reporter)
    {
        return Inertia::render('Reporter/Show', [
            'reporter' => $reporter->load('media', 'enquiries'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reporter $reporter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ReporterUpdateRequest $request, Reporter $reporter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reporter $reporter)
    {
        //
    }
}
