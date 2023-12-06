<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ApplicationCreated extends Mailable
{
    use Queueable, SerializesModels;

    protected $application,$full_name;

    public function __construct($application)
    {
        $this->application = $application;
        $this->full_name = $this->application->first_name.' '.$this->application->first_name;
    }





    public function build()
    {
        return $this->markdown('emails.application-created')
            ->subject('New Application Created: ' . $this->full_name);
    }
}
