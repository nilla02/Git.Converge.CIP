<?php

namespace App\Models;

use App\Models\TestTable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'code', 'code3', 'codeNumeric', 'postCode', 'active', 'label_nl', 'label_en', 'label_es', 'label_fr', 'domain'
    ];

    public function testtable()
    {
        return $this->hasOne(TestTable::class, 'country_id');
    }

}
