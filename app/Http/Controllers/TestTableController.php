<?php

namespace App\Http\Controllers;

use App\Models\TestTable;
use App\Models\Risk_level;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
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
use App\Notifications\Denied;
use App\Notifications\DefaultNotify;
use App\Notifications\Assigned;
use App\Notifications\PBO;
use App\Notifications\RTC;
use App\Notifications\RISKLEVEL;
use App\Notifications\RW;
use App\Notifications\phase2;
use App\Notifications\ACCAP;
use App\Notifications\RISK1;
use App\Notifications\Processing;
use App\Notifications\Submit;

class TestTableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
            ->when($date,function ($query) use ($date){
$query->where('created_at','<=',$date);
            })
            ->when(in_array('agents', $roles), function ($query) use ($user) {
                $query->where('agent_id', $user->id)->where('type_of_applicant','2')->whereIn('status_id',['8','12','13','19','20','28']);
        })
            ->when(in_array('due_diligence_officer', $roles), function ($query) use ($user) {
                $query->where('ddo_id', $user->id)->where('type_of_applicant', '2')->where('status_id', '2')->orWhere('status_id', '3')->orWhere('status_id', '4');
            })
            ->when(in_array('promoter', $roles), function ($query) use ($user) {
                $query->where('promoter_id', $user->id)->where('type_of_applicant', '2');
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
                $query->where('ddo_id', $user->id)->where('type_of_applicant', '2')->where('risk_level', '2')->orWhere('risk_level', '3');
            })
            ->when(in_array('admin_due_diligence_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))


            ->when(
                in_array('ceo', $roles),
                fn ($query) => $query->where(function ($query) {
                    $query->where('status_id', 'SendtoCEO')
                    ->where('type_of_applicant', '2')
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
                    ->where('type_of_applicant', '2')
                        ->orWhere('status_id', '33');

                })
            )

            ->when(in_array('compliance_officer', $roles), fn (Builder $query, $topic) => $query->where('co_id', $user->id)->orwhere('status_id', '17')
            ->where('type_of_applicant', '2')
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
            $countries = Country::all();
            $regions = Region::all();
            $type_of_applicant = Applicant_Type::all();
            $gender = Gender::all();
            $mstatus = MaritualStatus::all();
            $toi = Type_of_investment::all();

            $promoter = User::whereHas('roles', function ($query) {
                $query->where('name', 'promoter');
            })->get();

            $signedInUser = Auth::user();
            $signedInUserGroup = $signedInUser->group;
            $principle_applicants = TestTable::where('agency', $signedInUser->group)
                ->where('type_of_applicant', '2')
                ->pluck('id');
            // Get an array of user_ids

            $notificationCount = auth()->user()->unreadNotifications->count();
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('Forms/Draft', ['users' => $users, 'promoter'=>$promoter, 'roles' => $user,'days'=>$daysPassed ,'notifications'=>$notifications,"count"=> $notificationCount, 'countries' => $countries, 'principle_applicants' => $principle_applicants,'region'=>$regions,'toa'=>$type_of_applicant
        ,'gender'=>$gender,'mstatus'=>$mstatus,'toi'=>$toi,]);
    }
    public function webadmindb(){

        $user = Auth::user();

        $users_roles = User::with('roles')->get();


        $accountantUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('accountant');
        });

        $agentUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('agents');
        });
        $ddoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('due_diligence_officer');
        });
    $ComplianceUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('compliance_officer');
        });
        $WebAdminUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('website_admin');
        });
        //new
        $riskUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('risk_assessment_officer');
        });
        $promoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('promoter');
        });
        $csUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('corp_sec');
        });
        $boUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('bank_officials');
        });
        $saUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('super_administrators');
        });
        $ceoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('ceo');
        });
        $mirfUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('market_&_investor_relations_officer');
        });
        $bdoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('business_development_officer');
        });
        $pmoUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('pm_office');
        });
        $ddoadminUsers = $users_roles->filter(function ($user) {
            return $user->hasRole('admin_due_diligence_officer');
        });

        // Count the number of users with the  roles
        $accounts = $accountantUsers->count();
        $agents = $agentUsers->count();
        $ddo = $ddoUsers->count();
        $ddoadmin = $ddoadminUsers->count();
        $pmo = $pmoUsers->count();
        $bdo = $bdoUsers->count();
        $bo = $boUsers->count();
        $sa = $saUsers->count();
        $ceo = $ceoUsers->count();
        $cs = $csUsers->count();
        $mirf = $mirfUsers->count();
        $promo = $promoUsers->count();
        $risk = $riskUsers->count();

$totalApplications=Testtable::count();
            $usersall = User::paginate(6);
            $logs = Activity::orderBy('created_at', 'desc')->paginate(6);

$totalusers = User::count();

        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
        ->latest()
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();
        $recentlyModified = TestTable::query()
        ->orderBy('updated_at', 'desc')
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();

        //draft

$draft = TestTable::query()
    ->where(function ($query) {
        $query->where('status_id', 12)
              ->orWhere('status_id', 13);
    })
    ->count();

    $active = TestTable::query()
    ->where(function ($query) {
        $query->where('open_at',)
              ->orWhere('status_id', 13);
    })
    ->whereNotNull('open_at')
    ->count();

        $notifications = auth()->user()->unreadNotifications;
        return inertia::render('WebAdminDb', ['users' => $users,'active'=> $active,'draft'=>$draft,'roles'=>$roles,'updated'=>$recentlyModified,'user_id'=>$user,'logs'=>$logs,'userall'=>$usersall,'accounts'=>$accounts,'risk'=>$risk,'agents'=>$agents,'ddo'=>$ddo,'ddoadmin'=>$ddoadmin,'pmo'=>$pmo,'bdo'=>$bdo,'bo'=>$bo,'sa'=>$sa,'ceo'=>$ceo,'cs'=>$cs,'mirf'=>$mirf,'promo'=>$promo,'totalusers'=>$totalusers,'totalapplicant'=>$totalApplications,'notifications'=>$notifications]);

    }


    public function accountsdb(){

        $user = Auth::user();


        $roles = $user->getRoleNames()->toArray();

            $users = TestTable::query()
            ->latest()
            ->when(in_array('agents', $roles), function ($query) use ($user) {
                $query->where('agent_id', $user->id);
            })
            ->get();
            $totalApplications = $users->count();
        $recentlyModified = TestTable::query()
        ->orderBy('updated_at', 'desc')
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();
        $notifications = auth()->user()->unreadNotifications;
        return inertia::render('AccountDb', ['users' => $users,'roles'=>$roles,'updated'=>$recentlyModified,'user_id'=>$user,'accountstotal'=>$totalApplications,'notifications'=>$notifications]);

    }

    public function Vcontroller(){

        $user = Auth::user();


        // 'accounts'=>$accounts,'risk'=>$risk,'agents'=>$agents,'ddo'=>$ddo,'ddoamdin'=>$ddoadmin,'pmo'=>$pmo,'bdo'=>$bdo,'bo'=>$bo,'sa'=>$sa,'ceo'=>$ceo,'cs'=>$cs,'mirf'=>$mirf,'promo'=>$promo,


        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()
        ->latest()
        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->get();
        $recentlyModified = TestTable::query()
        ->orderBy('updated_at', 'desc') // Order by the 'updated_at' column in descending order
        ->when(in_array('admin_due_diligence_officer', $roles), fn (Builder $query, $topic) => $query->where('status_id', 'pre-processing_accept'))
        ->get();
        $notifications = auth()->user()->unreadNotifications;
        return inertia::render('Vcontroller', ['users' => $users,'roles'=>$roles,'updated'=>$recentlyModified,'user_id'=>$user,'userall'=>$userall,'accounts'=>$accounts,'risk'=>$risk,'agents'=>$agents,'ddo'=>$ddo,'ddoadmin'=>$ddoadmin,'pmo'=>$pmo,'bdo'=>$bdo,'bo'=>$bo,'sa'=>$sa,'ceo'=>$ceo,'cs'=>$cs,'mirf'=>$mirf,'promo'=>$promo,'notifications'=>$notifications]);

    }
    public function Co(){

        $user = Auth::user();


        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::all();
        $notifications = auth()->user()->unreadNotifications;
        return inertia::render('CoDashboard', ['users' => $users,'roles'=>$roles,'notifications'=>$notifications]);

    }


    public function index4(Request $request)
    {

        $data = User::all();
$start_date=$request->start_date;
$end_date=$request->end_date;
if ($start_date && $end_date){
    $start_date=Carbon::parse($start_date);
    $end_date=Carbon::parse($end_date);

}
        $users= TestTable::query()
        ->latest()
        ->when($start_date && $end_date, function ($query) use ($start_date,$end_date) {
            $query->where('created_at','>=',$start_date)->where('created_at','<=',$end_date);
        })
        ->get();
        $count = $users->filter(function ($user) {
            return $user->source_of_funds_path !== null;
        })->count();

        $paid = $users->sum('payment_amount');

$total=$users->count();
$notifications = auth()->user()->unreadNotifications;
        return Inertia::render('Report', ['users' => $users,'data'=>$data,'count'=>$count,'total'=>$total,'notifications'=>$notifications,'paid'=>$paid]);
    }

    public function index2()
    {

        $user = Auth::user();
        $totalApplications = TestTable::where('agent_id', $user->id)->count();
        $draft = TestTable::where('agent_id', $user->id)->where('status_id', 13)->orwhere('status_id', 12)->count();
        $denied = TestTable::where('agent_id', $user->id)->where('status_id', 8)->count();
        $accept = TestTable::where('agent_id', $user->id)->where('status_id', 11)->count();
        $roles = $user->getRoleNames()->toArray();

        $users = TestTable::query()

        ->when(in_array('agents', $roles), function ($query) use ($user) {
            $query->where('agent_id', $user->id);
        })
        ->take(5)
->get();
$userstable = TestTable::query()

->when(in_array('agents', $roles), function ($query) use ($user) {
    $query->where('agent_id', $user->id);
})
->take(5)
->get();



$notifications = auth()->user()->unreadNotifications;


        return Inertia::render('Dashboard', ['users' => $users,'roles'=>$roles,'total'=>$totalApplications,'notifications' => $notifications,'draft'=>$draft,'accept'=>$accept,'denied'=>$denied]);
    }

    public function create()
    {
        $countries = Country::all();
        $regions = Region::all();
        $type_of_applicant = Applicant_Type::all();
        $gender = Gender::all();
        $mstatus = MaritualStatus::all();
        $toi = Type_of_investment::all();

        $promoter = User::whereHas('roles', function ($query) {
            $query->where('name', 'promoter');
        })->get();

        $signedInUser = Auth::user();
        $signedInUserGroup = $signedInUser->group;
        $principle_applicants = TestTable::where('agency', $signedInUser->group)
            ->where('type_of_applicant', '2')
            ->pluck('id');
        // Get an array of user_ids

        // Now you have an array of user_ids who meet the criteria.
        $users = TestTable::all();
        $notifications = auth()->user()->unreadNotifications;

        return Inertia::render('Application', ['users' => $users, 'countries' => $countries, 'principle_applicants' => $principle_applicants,'region'=>$regions,'toa'=>$type_of_applicant
    ,'gender'=>$gender,'promoter'=>$promoter,'mstatus'=>$mstatus,'toi'=>$toi,'notifications' => $notifications]);
        return response()->json(['message' => 'Role created successfully'], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'First_Name' => 'required',
            'Last_Name' => 'required',
            'status_id' => 'nullable',
            'Region' => 'nullable',
            'country_id' => 'nullable',
            'type_of_applicant' => 'nullable',
            'type_of_investment' => 'nullable',
            'date_of_birth' => 'nullable',
            'Marriage_Status' => 'nullable',
            'promoter_id' => 'nullable',
            'Accompanying_dependents' => 'nullable',
            'Gender' => 'nullable',
            'principle_applicant_id' => 'nullable',
           "visa_Number" => 'nullable',
           "visa_issue_date" => 'nullable',
           "visa_expiration_date" => 'nullable',
           "passport_number" => 'nullable',
           "country_of_issue" => 'nullable',
        ]);

       $newRecord=new TestTable();
        $tableId = $newRecord->id;
        $ref_number= $newRecord->ref_number;
        $userId = Auth::id();
        $userGroup = Auth::user()->group;

        $applicantType = $request->input('type_of_applicant');


        $principalApplicantId = null;
        if ($applicantType === '1' || $applicantType === '3' || $applicantType === '4') {
            $principalApplicantId = $request->input('principal_applicant_id');
        }

        if ($principalApplicantId !== null) {
            $primary = TestTable::find($principalApplicantId);

            $userFolder = storage_path('app/media/' . $userGroup . '/' .  $primary->ref_number . '/' . $principalApplicantId);
        } else {

            $userFolder = storage_path('app/media/' . $userGroup . '/' . $ref_number . '/' . $tableId);
        }

        if ($request->hasFile('File')) {
            $file = $request->file('File');
            if ($file->isValid()) {
                $document_checklist_path = uniqid() . '.' . $file->extension();
                $file->move($userFolder, $document_checklist_path);

                // Additional actions after successful upload (e.g., database update)
            } else {
                // Handle file upload error
            }
        } else {
            $document_checklist_path = null;
        }



        $userGroup = Auth::user()->group;
        $agentId = Auth::id();
        $TestTable = TestTable::create([
            'first_name' => $validatedData['First_Name'],
            'last_name' => $validatedData['Last_Name'],
            'Region' => $validatedData['Region'],
            'country_id' => $validatedData['country_id'],
            'type_of_applicant' => $validatedData['type_of_applicant'],
            'type_of_investment' => $validatedData['type_of_investment'],
            'date_of_birth' => $validatedData['date_of_birth'],
            'promoter_id' => $validatedData['promoter_id'],
            'Marriage_Status' => $validatedData['Marriage_Status'],
            'Accompanying_dependents' => $validatedData['Accompanying_dependents'],
            'Gender' => $validatedData['Gender'],
            'agent_id' => $agentId,
            'agency' => $userGroup,
            'principle_applicant_id' => $validatedData['principle_applicant_id'],
            "visa_Number" => $validatedData['visa_Number'],
            "visa_issue_date" => $validatedData['visa_issue_date'],
            "visa_expiration_date" => $validatedData['visa_expiration_date'],
            "passport_number" => $validatedData['passport_number'],
            "country_of_issue" => $validatedData['country_of_issue'],
        ]);


        if($TestTable->type_of_applicant === '2'){

        $dueDiligenceUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'due_diligence_officer');
        })->get();
        $ddo_to_sign = $dueDiligenceUsers->sortBy(function ($user) {
            return $user->today_app_count;
        })->first();


        $AccountsUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'accountant');
        })->get();

        $acc_to_sign = $AccountsUsers->sortBy(function ($user) {
            return $user->today_app_count;
        })->first();


        $ComplianceUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'compliance_officer');
        })->get();

        $co_to_sign = $ComplianceUsers->sortBy(function ($user) {
            return $user->today_app_count;
        })->first();


        $ceoUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'ceo');
        })->get();

        $ceo_to_sign = $ceoUsers->sortBy(function ($user) {
            return $user->today_app_count;
        })->first();


        $riskUsers = User::whereHas('roles', function ($query) {
            $query->where('name', 'risk_assessment_officer');
        })->get();

        $risk_to_sign = $riskUsers->sortBy(function ($user) {
            return $user->today_app_count;
        })->first();

        $TestTable->ddo_id = $ddo_to_sign->id;
        $TestTable->ceo_id = $ceo_to_sign->id;
        $TestTable->co_id = $co_to_sign->id;
        $TestTable->acc_id = $acc_to_sign->id;
        $TestTable->risk_id = $risk_to_sign->id;


        $TestTable->save();

        FormSuccessfullyCreatedEvent::dispatch([Auth::id()], 'The Application created has been DRAFT has been created.');
        FormSuccessfullyCreatedEvent::dispatch([$ddo_to_sign->id, $ceo_to_sign->id, $co_to_sign->id, $acc_to_sign->id, $risk_to_sign->id,],'The application '.$TestTable->ref_number."has been added to your assignment queue");
        Auth::user()->notify(new phase1($TestTable));
$userIds = [$ddo_to_sign->id, $ceo_to_sign->id, $co_to_sign->id, $acc_to_sign->id, $risk_to_sign->id];

// Find user models based on the provided IDs
$users = User::find($userIds);

// Dispatch the Assigned notification for each user
foreach ($users as $user) {
    $user->notify(new Assigned($TestTable));
}
    }


return back()->withInput();
// return redirect()->route('Draft');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {


        $submission = TestTable::with('country','agent','ddo','risk','acc','co')->findOrFail($id);
        $result = TestTable::where('principle_applicant_id', $id)->get();
$risk=Risk_level::all();
        $country= Country::all();
        $regions = Region::all();
        $type_of_applicant = Applicant_Type::all();
        $gender = Gender::all();
        $mstatus = MaritualStatus::all();
        $toi = Type_of_investment::all();
        $agent=$submission->agent_id;
        if (Auth::user()->id == $submission->co_id && !$submission->open_at) {

            $submission->update(['open_at' => Carbon::now()]);
            $user = User::find( $agent);
            $user->notify(new Processing($submission));
        }
        $notifications = auth()->user()->unreadNotifications;

        return Inertia::render('Submissions/EditSubmission', ['risk'=>$risk,'submission' => $submission,'result'=>$result,'country'=>$country,'notifications'=>$notifications,  'region'=>$regions,'toa'=>$type_of_applicant
        ,'gender'=>$gender,'mstatus'=>$mstatus,'toi'=>$toi]);
    }

    public function show2(string $id)
    {



        $submission = TestTable::with('country','agent','ddo','risk','acc','co')->findOrFail($id);
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('Submissions/EditCommissions', ['submission' => $submission,'notifications'=>$notifications,]);
    }
    public function show3(string $id)
    {

        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'due_diligence_officer');
        })->get();
        $submission = TestTable::findOrFail($id);
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('EditDDO', ['submission' => $submission, 'users' => $users,'notifications'=>$notifications]);
    }
    public function show4(string $id)
    {

        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'compliance_officer');
        })->get();
        $submission = TestTable::findOrFail($id);
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('EditCO', ['submission' => $submission, 'users' => $users,'notifications'=>$notifications]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
    }
    public function update2(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);

        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'status_id' => ['required'],
            'document_checklist_path' => 'nullable',
            'law_enforcement_sent'=>'nullable',
            'ddo_notes' => 'nullable',
            'open_at' => 'nullable',
            'agent_investment_notes'=>'nullable',
            'citizenship_certificate_id'=>'nullable',
            'accounts_approval'=>'nullable',
            'co_notes' => 'nullable',
            'risk_level'=>'nullable',
            'payment_amount' => 'nullable',
            'Date_Of_Payment' => 'nullable',
            'Assigned_DDO' => 'nullable',
            'Assigned_Compliance' => 'nullable',
            'authorized_agent_form_path' => 'nullable',
            'proof_of_payment_path' => 'nullable',
            'confirmation_form_path' => 'nullable',
            'registration_application_path' => 'nullable',
            'birth_record_path' => 'nullable',
            'name_change_path' => 'nullable',
            'citizenship_certificate_path' => 'nullable',
            'residence_card_path' => 'nullable',
            'military_records_path' => 'nullable',
            'photograph_certificate_path' => 'nullable',
            'national_id_path' => 'nullable',
            'current_passport_pages_path' => 'nullable',
            'proof_of_residence_path' => 'nullable',
            'marriage_certificate_path' => 'nullable',
            'divorce_decree_path' => 'nullable',
            'curriculum_vitae_path' => 'nullable',
            'professional_reference_path' => 'nullable',
            'bank_reference_path' => 'nullable',
            'sworn_affidavit_financial_path' => 'nullable',
            'sworn_affidavit_spouse_path' => 'nullable',
            'academic_certificates_path' => 'nullable',
            'police_certificates_path' => 'nullable',
            'visas_path' => 'nullable',
            'medical_examiner_declaration_path' => 'nullable',
            'official_transcripts_path' => 'nullable',
            'custody_records_path' => 'nullable',
            'statutory_declaration_path' => 'nullable',
            'copy_of_parent_id_path' => 'nullable',
            'passport_sized_photos_path' => 'nullable',
            'ddo_assessment_path' => 'nullable',
            'ceo_assessment_path' => 'nullable',
            'co_assessment_path' => 'nullable',
            'source_of_funds_path'=>'nullable',
            'proof_of_investment_transferred_path' => 'nullable',
            'proof_of_investment_path' => 'nullable',
            'certified_copy_professional_certificate_medical_examiner_path' => 'nullable',
            'net_worth_document_support_path' => 'nullable',
            'professional_certificate_translator_path' => 'nullable',
            'apostille_path' => 'nullable',
            'professional_certificate_notary_path' => 'nullable',
            'professional_certificate_attorney_path' => 'nullable',
            'professional_certificate_oaths_commissioner_path' => 'nullable',

        ]);

        $patharray = [
            'file_path',
            'proof_of_payment_path',
            'source_of_funds_path',
            'document_checklist_path',
            'authorized_agent_form_path',
            'alternative_citizenship_path',
            'confirmation_form_path',
            'registration_application_path',
            'birth_record_path',
            'citizenship_certificate_id',
            'name_change_path',
            'citizenship_certificate_path',
            'residence_card_path',
            'military_records_path',
            'photograph_certificate_path',
            'national_id_path',
            'current_passport_pages_path',
            'proof_of_residence_path',
            'marriage_certificate_path',
            'divorce_decree_path',
            'curriculum_vitae_path',
            'professional_reference_path',
            'bank_reference_path',
            'sworn_affidavit_financial_path',
            'sworn_affidavit_spouse_path',
            'academic_certificates_path',
            'police_certificates_path',
            'visas_path',
            'law_enforcement_report_path',
            'medical_examiner_declaration_path',
            'official_transcripts_path',
            'custody_records_path',
            'statutory_declaration_path',
            'copy_of_parent_id_path',
            'passport_sized_photos_path',
            'ddo_assessment_path',
            'ceo_assessment_path',
            'co_assessment_path',
            'proof_of_investment_transferred_path',
            'proof_of_investment_path',
            'certified_copy_professional_certificate_medical_examiner_path',
            'net_worth_document_support_path',
            'professional_certificate_translator_path',
            'apostille_path',
            'professional_certificate_notary_path',
            'professional_certificate_attorney_path',
            'professional_certificate_oaths_commissioner_path',
            'addon',
        ];

        $userId = Auth::id();
        $tableId = $submission->id;
        $ref_number=$submission->ref_number;
        $userGroup = Auth::user()->group;
        foreach ($patharray as $value) {
            if ($request->hasFile($value)) {
                $file = $request->file($value);
                $validated[$value] = time() . '.' . $file->extension();
                $file->move(storage_path('app/media/' . $userGroup . '/' . $ref_number . '/' . $tableId), $validated[$value]);
            } else {
                unset($validated[$value]);
            }
        }
        $submission->update($validated);
        return redirect()->route('Draft');
    }

    public function assignddo(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);
        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'Assigned_DDO' => 'nullable',

        ]);


        $submission->update($validated);
        return redirect()->route('Draft');
    }

    public function assignco(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);
        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'Assigned_Compliance' => 'nullable',

        ]);

        $submission->update($validated);
        return redirect()->route('Draft');
    }


    public function update(Request $request, string $id)
    {

        $submission = TestTable::findOrFail($id);

        $tableId = $submission->id;

        $validated = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'status_id' => ['required'],
            'document_checklist_path' => 'nullable',
            'law_enforcement_sent'=>'nullable',
            'ddo_notes' => 'nullable',
            'open_at' => 'nullable',
            'agent_investment_notes'=>'nullable',
            'citizenship_certificate_id'=>'nullable',
            'accounts_approval'=>'nullable',
            'co_notes' => 'nullable',
            'risk_level'=>'nullable',
            'payment_amount' => 'nullable',
            'Date_Of_Payment' => 'nullable',
            'Assigned_DDO' => 'nullable',
            'Assigned_Compliance' => 'nullable',
            'authorized_agent_form_path' => 'nullable',
            'proof_of_payment_path' => 'nullable',
            'confirmation_form_path' => 'nullable',
            'registration_application_path' => 'nullable',
            'birth_record_path' => 'nullable',
            'name_change_path' => 'nullable',
            'citizenship_certificate_path' => 'nullable',
            'residence_card_path' => 'nullable',
            'military_records_path' => 'nullable',
            'photograph_certificate_path' => 'nullable',
            'national_id_path' => 'nullable',
            'current_passport_pages_path' => 'nullable',
            'proof_of_residence_path' => 'nullable',
            'marriage_certificate_path' => 'nullable',
            'divorce_decree_path' => 'nullable',
            'curriculum_vitae_path' => 'nullable',
            'professional_reference_path' => 'nullable',
            'bank_reference_path' => 'nullable',
            'sworn_affidavit_financial_path' => 'nullable',
            'sworn_affidavit_spouse_path' => 'nullable',
            'academic_certificates_path' => 'nullable',
            'police_certificates_path' => 'nullable',
            'visas_path' => 'nullable',
            'medical_examiner_declaration_path' => 'nullable',
            'official_transcripts_path' => 'nullable',
            'custody_records_path' => 'nullable',
            'statutory_declaration_path' => 'nullable',
            'copy_of_parent_id_path' => 'nullable',
            'passport_sized_photos_path' => 'nullable',
            'ddo_assessment_path' => 'nullable',
            'ceo_assessment_path' => 'nullable',
            'co_assessment_path' => 'nullable',
            'source_of_funds_path'=>'nullable',
            'proof_of_investment_transferred_path' => 'nullable',
            'proof_of_investment_path' => 'nullable',
            'certified_copy_professional_certificate_medical_examiner_path' => 'nullable',
            'net_worth_document_support_path' => 'nullable',
            'professional_certificate_translator_path' => 'nullable',
            'apostille_path' => 'nullable',
            'professional_certificate_notary_path' => 'nullable',
            'professional_certificate_attorney_path' => 'nullable',
            'professional_certificate_oaths_commissioner_path' => 'nullable',

        ]);

        $patharray = [
            'file_path',
            'proof_of_payment_path',
            'source_of_funds_path',
            'document_checklist_path',
            'authorized_agent_form_path',
            'alternative_citizenship_path',
            'confirmation_form_path',
            'registration_application_path',
            'birth_record_path',
            'citizenship_certificate_id',
            'name_change_path',
            'citizenship_certificate_path',
            'residence_card_path',
            'military_records_path',
            'photograph_certificate_path',
            'national_id_path',
            'current_passport_pages_path',
            'proof_of_residence_path',
            'marriage_certificate_path',
            'divorce_decree_path',
            'curriculum_vitae_path',
            'professional_reference_path',
            'bank_reference_path',
            'sworn_affidavit_financial_path',
            'sworn_affidavit_spouse_path',
            'academic_certificates_path',
            'police_certificates_path',
            'visas_path',
            'law_enforcement_report_path',
            'medical_examiner_declaration_path',
            'official_transcripts_path',
            'custody_records_path',
            'statutory_declaration_path',
            'copy_of_parent_id_path',
            'passport_sized_photos_path',
            'ddo_assessment_path',
            'ceo_assessment_path',
            'co_assessment_path',
            'proof_of_investment_transferred_path',
            'proof_of_investment_path',
            'certified_copy_professional_certificate_medical_examiner_path',
            'net_worth_document_support_path',
            'professional_certificate_translator_path',
            'apostille_path',
            'professional_certificate_notary_path',
            'professional_certificate_attorney_path',
            'professional_certificate_oaths_commissioner_path',
            'addon',
        ];

        $tableId = $submission->id;

    $agent=User::findOrFail($submission->agent_id);
    $userId = $agent->id;
    $userGroup=$agent->group;
    $ref_number=$submission->ref_number;
        //reference number


//end
        $userFolder = storage_path('app/media/' . $userGroup . '/' .  $ref_number . '/' . $submission->id);


        if ($submission->principle_applicant_id) {
            $primary = TestTable::find($submission->principle_applicant_id);
            $userFolder = storage_path('app/media/' . $userGroup . '/' . $primary->ref_number . '/' . $submission->principle_applicant_id . '/' . $submission->id);
        }
        foreach ($patharray as $value) {


            if ($request->hasFile($value)) {
                $file = $request->file($value);
                if(is_array($file)){
                    $files=[];
                    foreach($file as $key => $sub_file)
                    {
                        $file_name = time().'.'.$sub_file->extension();

                        $sub_file->move($userFolder, $file_name);
$files[]=$file_name;
                    }
                    $validated[$value]=$files;
                }
                else{
                    $validated[$value] = time() . '.' . $file->extension();
                    $file->move($userFolder, $validated[$value]);
                }

            } else {
                unset($validated[$value]);
            }
        }







    $newStatus = $validated['status_id'];



        if ($newStatus == 9 && $submission->status_id !== 9) {
            $agent = $submission->agent_id;
            StatusChangedEvent::dispatch([$agent],'Your Application has been Delayed.More information has been');
            $applicantName=$submission->first_name.$submission->last_name;
            $applicationid=$submission->id;
            $data = [

                    'applicantName' => $applicantName,
                    'applicationid'=>$applicationid,
                    'image' => asset('public\images\logo-min.png')


            ];
            $pdf = \PDF::loadView('emails.myTestMail', $data);
            $user = User::find( $agent);

            Notification::send($user, new DWCause($data, $pdf));

        }

        $submission->update(['status_id' => $newStatus]);




        $newStatus = $validated['accounts_approval'];
        //Accept

        if ($newStatus == "yes" && $submission->accounts_approval !== "yes") {

            $agent = $submission->acc_id;
            $agentco = $submission->ddo_id;
            $agentddo = $submission->co_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$agentddo, $agentco ,"1"],'Accounts have approved the application'.$ref_number);
            $user = User::find( $agentco);
            $user->notify(new ACCAP($submission));
            $users = User::find( $agentddo);
            $users->notify(new ACCAP($submission));
        }



        $newStatus = $validated['status_id'];
        //Accept

        if ($newStatus == 2 && $submission->status_id !== 2) {

            $agent = $submission->ddo_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$agent,"1"],$ref_number. "Has been cleared by the Verification officer to");
            $user = User::find( $agent);

        }

        $newStatus = $validated['status_id'];
        //Accept

        if ($newStatus == 15 && $submission->status_id !== 15 || $newStatus == 14 && $submission->status_id !== 14) {

            $agent = $submission->ddo_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$agent,"1"], "Application".$ref_number. "Has been Withdrawn");
            $user = User::find( $agent);
            $user->notify(new RW($submission));
        }

        $newStatus = $validated['status_id'];
        //Pending Board Decision

        if ($newStatus == 5 && $submission->status_id !== 5) {

            $agent = $submission->agent_id;
            $promoter = $submission->promoter_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$agent,"1",$promoter], "Application".$ref_number. "Pending board decision");
            $user = User::find( $agent);
            $user->notify(new PBO($submission));
            $users = User::find($promoter);
            $users->notify(new PBO($submission));
        }

        $newStatus = $validated['status_id'];
    //Return for compliance

        if ($newStatus == 19 && $submission->status_id !== 19) {

            $agent = $submission->co_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$agent,"1"], "Application".$ref_number. "Has been returned for Compliance");
            $user = User::find($agent);
            $user->notify(new RTC($submission));
        }



        $newStatus = $validated['status_id'];
        //Grand Economic Fund

        if ($newStatus == 11 && $submission->type_of_investment == 1 && $submission->status_id !== 11) {


            $agentddo = $submission->agent_id;
            $ceo = $submission->agent_id;
            $ref_number = $submission->ref_number;



            StatusChangedEvent::dispatch([$ceo,"1"], "Application".$ref_number. " With investment type National Economic Fund has been Granted");
            $date = date('Y-m-d');
            $applicantName=$submission->first_name.$submission->last_name;
            $applicationid=$submission->id;
            $investmentamount=$submission->payment_amount;
            $data = [

                    'applicantName' => $applicantName,
                    'applicationid'=>$applicationid,
                    'investmentamount'=>$investmentamount,
                    'ref_number'=>$ref_number,
                     'date'=>$date,


            ];
            $pdf = \PDF::loadView('emails.notifcation_NEF', $data);
            $user = User::find( $ceo);
            Notification::send($user, new Granted($data, $pdf));
        }
        //Real Estate Project
        if ($newStatus == 11 && $submission->type_of_investment == 2 && $submission->status_id !== 11) {


            $agentddo = $submission->agent_id;
            $ceo = $submission->agent_id;
            $ref_number = $submission->ref_number;



            StatusChangedEvent::dispatch([$ceo,"1"], "Application".$ref_number. " With investment type Real Estate Project has been Granted");
            $date = date('Y-m-d');
            $applicantName=$submission->first_name.$submission->last_name;
            $applicationid=$submission->id;
            $investmentamount=$submission->payment_amount;
            $data = [

                    'applicantName' => $applicantName,
                    'applicationid'=>$applicationid,
                    'investmentamount'=>$investmentamount,
                    'ref_number'=>$ref_number,
                     'date'=>$date,


            ];
            $pdf = \PDF::loadView('emails.notifcation_real_estate', $data);
            $user = User::find($ceo);
            Notification::send($user, new Granted($data, $pdf));
        }
        $newStatus = $validated['status_id'];
    //Real Estate Project
    if ($newStatus == 11 && $submission->type_of_investment == 4 && $submission->status_id !== 11) {


        $agentddo = $submission->agent_id;
        $ceo = $submission->agent_id;
        $ref_number = $submission->ref_number;



        StatusChangedEvent::dispatch([$ceo,"1"], "Application".$ref_number. " With investment type Government Bonds has been Granted");
        $date = date('Y-m-d');
        $applicantName=$submission->first_name.$submission->last_name;
        $applicationid=$submission->id;
        $investmentamount=$submission->payment_amount;
        $data = [

                'applicantName' => $applicantName,
                'applicationid'=>$applicationid,
                'investmentamount'=>$investmentamount,
                'ref_number'=>$ref_number,
                 'date'=>$date,


        ];
        $pdf = \PDF::loadView('emails.notification_bond', $data);
        $user = User::find($ceo);
        Notification::send($user, new Granted($data, $pdf));
    }

        $newStatus = $validated['status_id'];

        //Denied


        if ($newStatus == 8 && $submission->status_id !== 8 ) {


            $agentddo = $submission->agent_id;
            $agent = $submission->agent_id;
            $ref_number = $submission->ref_number;

            StatusChangedEvent::dispatch([$agent,"1"], "Application".$ref_number. "Has been Denied");
            $date = date('Y-m-d');
            $applicantName=$submission->first_name.$submission->last_name;
            $applicationid=$submission->id;
            $data = [

                    'applicantName' => $applicantName,
                    'applicationid'=>$applicationid,
                    'ref_number'=>$ref_number,
                    'date'=>$date,


            ];
            $pdf = \PDF::loadView('emails.notification_denied', $data);
            $user = User::find( $agent);
            Notification::send($user, new Denied($data, $pdf));

        }

        $newStatus = $validated['risk_level'];
        //Risk Level low

        if ($newStatus == 2  && $submission->risk_level !== 2) {



            $risk = $submission->risk_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$risk,"1"], "Application".$ref_number. "Risk Level has been set to:Low risk");
            $user = User::find($risk);
            $user->notify(new RISK1($submission));
        }

        $newStatus = $validated['risk_level'];
        //Risk level medium.

        if ($newStatus == 3 && $submission->status_id !== 3) {



            $risk = $submission->risk_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$risk,"1"], "Application".$ref_number. "Risk Level has been set to:Medium risk");
            $user = User::find( $risk);
            $user->notify(new RISKLEVEL($submission));
        }
        $newStatus = $validated['status_id'];
        //Submit.

        if ($newStatus == 17 && $submission->status_id !== 17) {



            $co = $submission->co_id;
            $ref_number = $submission->ref_number;
            StatusChangedEvent::dispatch([$co,"1"], "Application".$ref_number. "Has been added to your queue.");
            $user = User::find($co);
            $user->notify(new Submit($submission));
        }

        $submission->update($validated);

        TestTable::where('principle_applicant_id', $id)
        ->where('type_of_applicant', '!=', 4)
        ->where('status_id', '!=', 5)
        ->update(['status_id' => $validated['status_id']]);


        return redirect()->route('Draft');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

    }
}
