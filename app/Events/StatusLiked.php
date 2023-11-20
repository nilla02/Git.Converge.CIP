<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class StatusLiked implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;



    public $message;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    protected $application, $full_name;
    public function __construct($application)
    {
        $this->application = $application;

        $this->username = $application->ref_number;
        $this->username = $username;
        $this->message  = "{$username} Created a application";
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return ['status-liked'];
    }
}
