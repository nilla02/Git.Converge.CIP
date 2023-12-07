<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;

class Submit extends Notification
{
    use Queueable, SerializesModels;

    /**
     * Create a new notification instance.
     */ protected $application,$full_name, $application_logo;

    public function __construct($application)
    {
        $this->application = $application;
        $this->full_name = $this->application->first_name.' '.$this->application->first_name;
        $this->ref_number=$this->application->ref_number;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['database','mail' ];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {

        return (new MailMessage)
        // ->markdown('emails.application-created', [
        //     'ref_number' => $this->ref_number,

        // ])  ->subject('New Application Created: ' . $this->full_name);
        ->greeting('Hello,')
        ->line('The application '.$this->ref_number,"has been successfully Submited and added in a queue.")
        ->line('A Subsequent Email will be sent when the application begins processing.')
        ->action('View dashboard', url('/'))
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
                'data' => 'The application' . $this->ref_number.'was Draft successfully created',
        ];
    }
}
