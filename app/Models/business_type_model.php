<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class business_type_model extends Model
{

    protected $fillable = [
        'name', 'code'
    ];
    protected $table = 'business_type';
    use HasFactory;
}
