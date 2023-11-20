<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use Inertia\Inertia;
class ActivityLogController extends Controller
{
    public function index()
    {
        $logs=Activity::all();
     return Inertia::render('CipLogs',['logs'=>$logs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
      
            'log_name'=> 'required',
            'description'=> 'required',
            'subject_id'=> 'required',
             'causer_id'=> 'required',
            'properties'=> 'required',
        ]);


        Activity::create([
            'log_name' => $validatedData['log_name'],
            'description' => $validatedData['description'],
            'properties' => $validatedData['properties'], 
            'causer_id' => $validatedData['causer_id'],
            'subject_id' => $validatedData['subject_id'],
        ]);
        return redirect()->route('CipLogs'); 
    }

}
