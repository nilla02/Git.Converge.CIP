<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\TestTable;

class Status_model extends Model
{
    use HasFactory;

    protected $fillable = [

        'internal_title',
        'external title',

    ];
    protected $table = 'status';

}
