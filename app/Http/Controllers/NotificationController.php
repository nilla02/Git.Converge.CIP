<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\FormSuccessfullyCreated;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notifications = auth()->user()->unreadNotifications;

        return inertia::render('Dashboard', [
            'notifications' => $notifications,
        ]);
    }


    public function markAsRead(Request $request)
    {
        Auth::user()->unreadNotifications->where('id', $request->notification_id)->markAsRead();

        return response()->json(['message' => 'Notifications marked as read']);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function getNotificationCount()
    {

        $user = User::find(Auth::user()->id);
        $notificationCount = $user->unreadNotifications->count();

        return Inertia::render('Draft','WebAdministrator', [
            'notificationCount' => $notificationCount,
            // Other data you want to pass to the Inertia view
        ]);
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
