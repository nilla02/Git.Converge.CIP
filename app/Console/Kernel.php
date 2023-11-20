<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
 use App\Notifications\DurationNotification;
class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {

            $schedule->call(function () {
                $applications = TestTable::all();

                foreach ($applications as $application) {
                    $user = $application->user; // Assuming you have a user associated with the application
                    $duration = $application->duration; // Get the duration value for this application

                    $createdDate = $application->created_at;
                    $targetDate = $createdDate->addDays($duration);

                    if (now()->isSameDay($targetDate)) {
                        // Send the notification to the user as the target date has been reached
                        $user->notify(new DurationNotification($application));
                    }
                }
            })->daily(); // You can adjust the schedule frequency as needed
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
