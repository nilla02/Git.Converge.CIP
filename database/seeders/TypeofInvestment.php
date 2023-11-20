<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Type_of_investment;

class TypeofInvestment extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Type_of_investment::truncate();
        $toi = [
            ['name' => ' National Economic Fund','code'=>'N'],
            ['name' => 'Real Estate Project','code'=>'R'],
            ['name' => 'Enterprise Project','code'=>'E'],
            ['name' => 'Government Bonds','code'=>'G'],
        ];
        foreach ($toi as $key => $value) {
            Type_of_investment::create($value);
        }
    }
}
