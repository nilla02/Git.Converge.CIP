<?php

use Illuminate\Support\Facades\Broadcast;
use App\Models\TestTable;
use App\Models\User;


/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/



Broadcast::channel('user.{id}.applications', function (User $user, int $id) {
    return $user->id === $id;
});


Broadcast::channel('user.{id}.granted', function (User $user, int $id) {
    return $user->id === $id;
});




// get all users with risk role -> populate with applications ids (user->assignedAPps by today)
// agent,consultant,account,risk,ddo
//  get all users with role with agent
//  -- get the agent or agents with min applications if more than one agent pick the first one or random
//  -- consultant
//  -- account
//  --  post model create event (assignmetns and broadcast)
