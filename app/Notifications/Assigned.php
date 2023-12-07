<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;
class Assigned extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */ protected $application,$full_name;

    public function __construct($application)
    {
        $this->application = $application;
        $this->ref = $this->application->ref_number;
        $this->full_name = $this->application->first_name.' '.$this->application->first_name;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->greeting('Hello,')
            ->line('The application '.$this->ref,"has been added to your assignment queue")
            ->action('View dashboard', url('/home'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray($notifiable): array
    {


            return [
                'data' => 'The application'. $this->ref. 'was successfully created and assign to your queue',
        ];
    }
}
