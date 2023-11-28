<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use App\Models\TestTable;
use Carbon\Carbon;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,HasRoles,LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

     public function run(): void
     {
         User::factory()
                 ->count(30)
                 ->hasPosts(1)
                 ->create();
     }
   protected function getActivitylogOptions(): LogOptions
    {
        $logOptions = new LogOptions();
        $logOptions->logName = 'User Form Edited'; // Choose a suitable log name
        $logOptions->logAttributes = ['name', 'email']; // Set the attributes directly
        return $logOptions;
    }




    protected $fillable = [
        'name',
        'email',
        'password',
        'group',
        'temp_role',
        'license',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // public function role()
    // {
    //     return $this->belongsTo(Role::class, 'role_id');
    // }

     protected $appends = ['role_names','today_app_count'];
    protected function getRoleNamesAttribute($value)
    {
        return $this->getRoleNames()->toArray();
    }
    protected function getTodayAppCountAttribute($value)
    {
        return Testtable::whereDate('created_at', Carbon::today())->where(function($query){
            $query->whereOr('agent_id', $this->id)
            ->orWhere('ddo_id', $this->id)
            ->orWhere('acc_id', $this->id)
            ->orWhere('co_id', $this->id)
            ->orWhere('ceo_id', $this->id)
            ->orWhere('risk_id', $this->id);
        })->count();
    }
}
