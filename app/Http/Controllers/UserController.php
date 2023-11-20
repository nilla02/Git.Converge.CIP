<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rule;
use App\Models\GroupModel;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $groups = GroupModel::all();
        $users = User::all();
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('UserTable', ['users' => $users,'groups' => $groups,'notifications'=>$notifications]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groups = GroupModel::all();
        $users = User::all();
        $roles = Role::all();
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('UserRegistration', ['users' => $users,'groups' => $groups,'roles'=>$roles,'notifications'=>$notifications]);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'group' => 'nullable',
            'temp_role'=>'nullable',
            'status'=>'nullable'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'group' => $request->group,
            'temp_role'=>$request->temp_role,
            'status'=>$request->status,


        ]);

        $role = Role::find($request->temp_role); // Assuming the role value is sent in the form

        $role = Role::findByName($request->temp_role); // Assuming the role value is sent in the form
        $GR = strtoupper(substr($user->group, 0, 2));

        if ($role) {
            $user->assignRole($role);
        } else {
            $user->assignRole('agents');
        }

        $createdDate = $user->created_at->format('mdY');

        if ($user->temp_role === 'agents') {
            $roleReference = 'AA';
        } elseif ($user->temp_role === 'promoter') {
            $roleReference = 'PM';
        } else {
            // Handle other roles as needed
            $roleReference = 'US'; // 'O' for other
        }


        $referenceNumber=$roleReference.$user->id.$GR.$createdDate;
        $user->license = $referenceNumber;
        $user->save();

        event(new Registered($user));


        return redirect()->route('UserTable');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::with('roles')->findOrFail($id);
        $roles = Role::all();
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('UserEdit', [
            'user' => $user, 'roles' => $roles,'notifications'=>$notifications
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id): View
    {
        $user = User::find($id);
        $roles = Role::pluck('name', 'name')->all();
        $userRole = $user->roles->pluck('name', 'name')->all();
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('users.edit', ['user' => $user,'userRole' =>$userRole,'roles'=>$roles,'notifications'=>$notifications]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $this->validate($request, [
            'name' => 'required',
            'email' => ['required', 'email', Rule::unique('users')->ignore($user->id)],
            'password' => 'nullable|confirmed',
            'roles' => 'required|array'
        ]);

        $input = $request->only(['name', 'email', 'password', 'groups']);

        if (!empty($input['password'])) {
            $input['password'] = Hash::make($input['password']);
        } else {
            unset($input['password']);
        }

        $user->update($input);
        $user->syncRoles($request->input('roles'));

        return redirect()->route('UserTable')->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): RedirectResponse
    {
        User::find($id)->delete();
        return redirect()->route('users.index')
            ->with('success', 'User deleted successfully');
    }
}
