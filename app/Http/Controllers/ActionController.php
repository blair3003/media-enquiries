<?php

namespace App\Http\Controllers;

use App\Models\Action;
use App\Http\Requests\ActionStoreRequest;
use App\Http\Requests\ActionUpdateRequest;
use Illuminate\Support\Facades\Auth;

class ActionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(ActionStoreRequest $request)
    {
        $action = Auth::user()->actions()->create($request->validated());

        return to_route('enquiry.show', $action->enquiry_id)
            ->with('success', 'Action posted successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Action $action)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Action $action)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ActionUpdateRequest $request, Action $action)
    {
        $action->update($request->validated());

        return to_route('enquiry.show', $action->enquiry_id)
            ->with('success', 'Action status updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Action $action)
    {
        $action->delete();

        return to_route('enquiry.show', $action->enquiry_id)
            ->with('success', 'Action deleted successfully.');
    }

    public function status(Action $action)
    {
        $status = $action->status === "Completed" ? "In Progress" : "Completed";

        $action->update(['status' => $status]);

        return to_route('enquiry.show', $action->enquiry_id)
            ->with('success', 'Action status updated.');
    }
}
