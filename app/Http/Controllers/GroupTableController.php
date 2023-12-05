<?php

namespace App\Http\Controllers;

use App\Models\GroupModel;
use App\Models\business_type_model;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
class GroupTableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $users=GroupModel::all();
        $notifications = auth()->user()->unreadNotifications;
     return Inertia::render('GroupTB',['group_models'=>$users,'notifications'=>$notifications,]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $btype=business_type_model::all();
        $countries=Country::all();
        $users=GroupModel::all();
        $notifications = auth()->user()->unreadNotifications;
     return Inertia::render('AgencyRegistration',['group_models'=>$users,'notifications'=>$notifications,'countries'=>$countries,'btype'=>$btype]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'type_of_agency'=>'required',
            'First_Name' => 'required',
            'Last_Name' => 'required',
            'Group_Name' => 'required',
            'Licensee' => 'nullable ',
            'address' => 'nullable ',
            'email' => 'required|string|email|max:255',
            'country'=>'required',

        ]);

        $groupWords = explode(' ', $validatedData['Group_Name']);
        $firstWord = isset($groupWords[0]) ? $groupWords[0][0] : '';
        $secondWord = isset($groupWords[1]) ? $groupWords[1][0] : '';

        $licenseNumber =strtoupper($firstWord . $secondWord) . '-' . mt_rand(1000, 9999);


        GroupModel::create([
            'type_of_agency'=>$validatedData['type_of_agency'],
            'first_name' => $validatedData['First_Name'],
            'last_name' => $validatedData['Last_Name'],
            'Group_name' => $validatedData['Group_Name'],
            'email' => $validatedData['email'],
            'address'=> $validatedData['address'],
            'country'=> $validatedData['country'],
            'Licensee' =>  $licenseNumber,

        ]);

        return redirect()->route('GroupTB');
    }


    /**
     * Display the specified resource.
     */
    public function show(GroupModel $groupModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GroupModel $groupModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, GroupModel $groupModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GroupModel $groupModel)
    {
        //
    }
}
