<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestTable;
use App\Models\Risk_level;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use App\Models\User;
use App\Models\Country;
use App\Models\Region;
use App\Models\Gender;
use App\Notifications\phase1;
use App\Events\FormSuccessfullyCreatedEvent;
use App\Events\StatusChangedEvent;
use App\Models\Applicant_Type;
use App\Models\MaritualStatus;
use App\Models\Type_of_investment;
use Spatie\Activitylog\Models\Activity;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Pagination\Paginator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Notification;
use App\Mail\ApplicationCreated;
use App\Events\MessageReceived;
use Illuminate\Support\Facades\Mail; // Add this line
use App\Notifications\Granted;
use App\Notifications\DWCause;
use App\Notifications\DefaultNotify;
class TableController extends Controller
{
    public function index(Request $request)
    {
        // FormSuccessfullyCreatedEvent::dispatch(["7","1"],'Testing');
        $date=null;

if ($request->days){
    $date=Carbon::today()->subDays($request->days);


}

        $user = Auth::user();


        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
        // ->with('status')
            ->latest()
            ->when($date,function ($query) use ($date){
$query->where('created_at','<=',$date);
            })
            ->when(in_array('agents', $roles), function ($query) use ($user) {
                $query->where('agent_id', $user->id);
            })
            ->when(in_array('due_diligence_officer', $roles), function ($query) use ($user) {
                $query->where('ddo_id', $user->id);
            })
            ->when(in_array('promoter', $roles), function ($query) use ($user) {
                $query->where('promoter_id', $user->id);
            })
            ->when(in_array('accountant', $roles), function ($query) use ($user) {
                // $query->where('acc_id', $user->id)->where('SendtoAcc', $user->id);
                $query->where('acc_id', $user->id);
            })

            ->when(in_array('corp_sec', $roles), function ($query) use ($user) {

            })

            ->when(in_array('risk_assessment_officer', $roles), function ($query) use ($user) {
                $query->where('risk_id', $user->id);
            })
            ->when(in_array('admin_due_diligence_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))


            ->when(
                in_array('ceo', $roles),
                fn ($query) => $query->where(function ($query) {

                })
            )

            ->when(
                in_array('processing', $roles),
                fn ($query) => $query->where(function ($query) {


                })
            )

            ->when(in_array('compliance_officer', $roles), fn (Builder $query, $topic) =>  $query->where('co_id', $user->id)





            )

            ->when(in_array('law_enforcement_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))

            ->when(in_array('website_admin', $roles), function ($query) {
                // Do nothing, no additional filtering needed for admin
            })

            ->get();

         // Replace YourModel with your model
            // foreach ($users as $user) {
            //     $daysPassed = $user->day_passed; // This will call the accessor for each record
            //     // Do something with $daysPassed
            // }



            $daysPassed = []; // Initialize an empty array

            // foreach ($users as $user) {
            //     $daysPassed[] = $user->day_passed; // Add each day_passed value to the array
            // }

            $notificationCount = auth()->user()->unreadNotifications->count();
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('ApplicationTable', ['users' => $users,  'roles' => $user,'days'=>$daysPassed ,'notifications'=>$notifications,"count"=> $notificationCount]);
    }
}
