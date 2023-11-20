<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Risk_level extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];
    protected $table = 'risk_level_table';
}
