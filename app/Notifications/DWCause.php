<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;
use Illuminate\Queue\SerializesModels;
class DWCause extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */

     public $data;
    public $pdf;
    public function __construct($data, $pdf)
    {
        $this->data = $data;
        $this->pdf = $pdf;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail','database'];
    }


    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
{
    return (new MailMessage)
        ->subject('Subject of the email')
        ->greeting('Hello!')
        ->line('Your Application has been Delayed.')
        ->line('More information has been sent to you in the PDF below.')

        ->attachData($this->pdf->output(), 'document.pdf', [
            'mime' => 'application/pdf',
        ]);
}

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {

            return [
                'data' => 'The application was delayed ',
        ];

    }
}
