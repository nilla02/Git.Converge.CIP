<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormTable extends Model
{
    use HasFactory;
    protected $table = 'form_table'; // Set the table name

    protected $fillable = [
    'SL1_file_path',
       'Sl2_file_path',
       'Sl3_file_path',
        // Add more fields as needed
    ];
}
