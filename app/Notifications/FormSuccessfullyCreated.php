<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Events\FormSuccessfullyCreatedEvent;

class FormSuccessfullyCreated extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */ protected $application,$full_name;

    public function __construct($application)
    {
        $this->application = $application;
        $this->full_name = $this->application->first_name.' '.$this->application->first_name;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['database', ];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->greeting('Hello,')
            ->line('The you have successfully created a new application for '.$this->full_name)
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
            // Broadcast the event
            FormSuccessfullyCreatedEvent::dispatch($this->full_name);
            // event(new FormSuccessfullyCreatedEvent('The application was successfully created for ' . $this->full_name));

            return [
                'data' => 'The application was successfully created for ' . $this->full_name,
        ];
    }
}
