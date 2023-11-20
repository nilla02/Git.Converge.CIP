<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_of_investment extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'code'
    ];
    protected $table = 'type_of_investment';
}
