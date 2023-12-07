<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
 use App\Notifications\DurationNotification;
 use App\Notifications\phase1;
 use Illuminate\Support\Facades\Notification;
 use App\Notifications\DWCause;
 use App\Models\TestTable;
 use App\Events\StatusChangedEvent;
 use App\Models\User;
class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {

            // $schedule->call(function () {
            //     $applications = TestTable::all();

            //     foreach ($applications as $application) {
            //      $user = User::find(1);// Assuming you have a user associated with the application
            //     //  $user->notify(new DurationNotification($application));
            //      Notification::send($user, new DurationNotification($application));
            //     // Notification::send($user, new DWCause($data, $pdf));

            //     }
            // })->everyMinute(); // You can adjust the schedule frequency as needed

            $schedule->call(function () {
                $applications = TestTable::all();
                foreach ($applications as $application) {
                    $user = User::find($application->agent_id);
                    $user->notify(new phase1($TestTable));
                // StatusChangedEvent::dispatch([$user->id],'Your Application has been Delayed.More information has!!!!  been');
                }


            })->cron("* * * * *"); // You can adjust the schedule frequency as needed



    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
