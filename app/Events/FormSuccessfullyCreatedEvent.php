<?php
// App\Events\FormSuccessfullyCreatedEvent.php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\InteractsWithBroadcasting;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class FormSuccessfullyCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithBroadcasting, InteractsWithSockets;
    // use Dispatchable, InteractsWithSockets, SerializesModels;
    public $message;
    // public $ids;

    /**
     * Create a new event instance.
     *
     * @param  string  $message
     * @return void
     */
    public function __construct($ids, $message)
    {
        $this->broadcastVia('pusher');
        $this->ids = $ids;
        $this->message = $message;

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        $privateChannels = [];

        foreach ($this->ids as $id) {
            $privateChannels[] = new PrivateChannel('user.' . $id.'.applications');
        }

        return $privateChannels;

    }
    // public function broadcastAs()
    // {
    //     return  'app';
    // }
}
