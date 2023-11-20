<?php

namespace App\Models;

use App\Models\TestTable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'code'
    ];
    public function testtable()
    {
        return $this->hasOne(TestTable::class, 'country_id');
    }

}
