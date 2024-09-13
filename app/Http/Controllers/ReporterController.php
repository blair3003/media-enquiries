<?php

namespace App\Http\Controllers;

use App\Models\Reporter;
use App\Http\Requests\StoreReporterRequest;
use App\Http\Requests\UpdateReporterRequest;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReporterRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Reporter $reporter)
    {
        //
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
    public function update(UpdateReporterRequest $request, Reporter $reporter)
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
