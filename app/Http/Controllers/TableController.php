<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
                $query->where('agent_id', $user->id)->where('type_of_applicant', '2')->orWhere('status_id', '8')->orWhere('status_id', '12')
                ->orWhere('status_id', '13')->orWhere('status_id', '19')->orWhere('status_id', '20');
            })
            ->when(in_array('due_diligence_officer', $roles), function ($query) use ($user) {
                $query->where('ddo_id', $user->id)->where('status_id', '2')->orWhere('status_id', '3')->orWhere('status_id', '4');
            })
            ->when(in_array('promoter', $roles), function ($query) use ($user) {
                $query->where('promoter_id', $user->id);
            })
            ->when(in_array('accountant', $roles), function ($query) use ($user) {
                // $query->where('acc_id', $user->id)->where('SendtoAcc', $user->id);
                $query->where('acc_id', $user->id)->where('type_of_applicant', '2');
            })

            ->when(in_array('corp_sec', $roles), function ($query) use ($user) {
                $query->where('status_id', '5')
                    ->where('accounts_approval', 'yes')
                    ->orWhere('status_id', '9')
                    ->orWhere('status_id', '27')
                    ->orWhere('status_id', '23');
            })

            ->when(in_array('risk_assessment_officer', $roles), function ($query) use ($user) {
                $query->where('ddo_id', $user->id)->where('status_id', '2')->orWhere('status_id', '3')->orWhere('status_id', '4');
            })
            ->when(in_array('admin_due_diligence_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))


            ->when(
                in_array('ceo', $roles),
                fn ($query) => $query->where(function ($query) {
                    $query->where('status_id', 'SendtoCEO')
                        ->orWhere('status_id', 'pending_review')
                        ->orWhere('status_id', 'pre_processing_accept')
                        ->orWhere('status_id', 'non_Compliant')
                        ->orWhere('status_id', 'decision_pending')
                        ->orWhere('status_id', 'delayed_with_cause');
                })
            )

            ->when(
                in_array('processing', $roles),
                fn ($query) => $query->where(function ($query) {
                    $query->where('status_id', '32')
                        ->orWhere('status_id', '33');

                })
            )

            ->when(in_array('compliance_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', '17')
            ->orWhere('status_id', '10')
            ->orWhere('status_id', '22')




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
