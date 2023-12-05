<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'type_of_agency',
'first_name',
'last_name',
'Group_name',
'Licensee',
'email',
'address',
'country',

     ];
}
