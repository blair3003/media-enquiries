<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Http\Requests\StoreEnquiryRequest;
use App\Http\Requests\UpdateEnquiryRequest;
use Inertia\Inertia;

class EnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enquiries = Enquiry::with('media', 'reporter', 'category')
            ->where('archived', '=', false)
            ->orderBy(
                request("sort_by", 'created_at'),
                request("sort_dir", "desc")
            )
            ->paginate(15);

        $queryParams = request()->query();

        return Inertia::render('Enquiry/Index', [
            'enquiries' => $enquiries,
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
    public function store(StoreEnquiryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Enquiry $enquiry)
    {
        return Inertia::render('Enquiry/Show', [
            'enquiry' => $enquiry->load('media', 'reporter', 'category', 'author', 'actions'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enquiry $enquiry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEnquiryRequest $request, Enquiry $enquiry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enquiry $enquiry)
    {
        //
    }
}
