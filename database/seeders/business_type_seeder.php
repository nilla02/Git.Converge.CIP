<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\business_type_model;

class business_type_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {   $business = [
        ['name' => 'Autharised Agent', 'code' => 'AA'],
        ['name' => 'DD Provider', 'code' => 'DDP'],
        ['name' => 'Marketing Agent', 'code' => 'MA'],
        ['name' => 'Citizenship By Investment Saint Lucia', 'code' => 'CIPSLU'],
    ];
    foreach ($business as $key => $value) {
        business_type_model::create($value);
    }
    }
}
