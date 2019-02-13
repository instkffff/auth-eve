<?php

namespace Instkffff\Auth\Eve;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddEveAttribute
{
	/**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'serializing']);
    }
    /**
     * @param Serializing $event
     */
    public function serializing(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['CharacterId'] = $event->model->character_id;
            $event->attributes['AllianceId'] = $event->model->alliance_id;
            $event->attributes['CorporationId'] = $event->model->corporation_id;
            $event->attributes['Alliance'] = $event->model->alliance;
            $event->attributes['Corporation'] = $event->model->corporation;
        }
    }
}