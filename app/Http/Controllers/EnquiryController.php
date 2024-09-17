<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Enquiry;
use App\Http\Requests\EnquiryStoreRequest;
use App\Http\Requests\EnquiryUpdateRequest;
use App\Models\Media;
use App\Models\Reporter;
use Illuminate\Support\Facades\Auth;
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
        return Inertia::render('Enquiry/Create', [
            'categories' => Category::orderBy('name')->get(),
            'media' => Media::orderBy('name')->get(),
            'reporters' => Reporter::with('media')->where('active', '=', true)->orderBy('name')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EnquiryStoreRequest $request)
    {
        $enquiry = Auth::user()->enquiries()->create($request->validated());

        return to_route('enquiry.show', $enquiry)
            ->with('success', 'Enquiry created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Enquiry $enquiry)
    {
        return Inertia::render('Enquiry/Show', [
            'enquiry' => $enquiry->load('media', 'reporter', 'category', 'author'),
            'actions' => $enquiry->actions()->with('author')->orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enquiry $enquiry)
    {
        return Inertia::render('Enquiry/Edit', [
            'enquiry' => $enquiry,
            'categories' => Category::orderBy('name')->get(),
            'media' => Media::orderBy('name')->get(),
            'reporters' => Reporter::with('media')->where('active', '=', true)->orderBy('name')->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EnquiryUpdateRequest $request, Enquiry $enquiry)
    {
        $enquiry->update($request->validated());

        return to_route('enquiry.show', $enquiry)
            ->with('success', 'Enquiry updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enquiry $enquiry)
    {
        //
    }
}
