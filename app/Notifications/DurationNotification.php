<?php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class Send90DayNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    protected $application, $full_name;

    public function __construct($application)
    {
        $this->application = $application;
        $this->applicatiion->
        $this->full_name = $this->application->first_name . ' ' . $this->application->last_name;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->greeting('Dear ,')
            ->line('ELAPSED OF 90 DAYS - APPLICATION DELAYED')
            ->line('Please be informed that the 90-day assessment period for the citizenship by investment application for [INSERT APPLICANT NUMBER] elapsed on [INSERT DATE]   ')
            ->line('Unfortunately, the processing of this application is ongoing. Please be assured that the Unit is making every effort to bring this application to closure.')
            ->line('We thank you for your understanding on this matter. ')
            ->line('Sincerely ')
            ->line("<img Id.jpg' />");
    }
    public function toArray($notifiable): array
    {
        return [
            'data' => ' ' . $this->full_name

        ];
    }
}
