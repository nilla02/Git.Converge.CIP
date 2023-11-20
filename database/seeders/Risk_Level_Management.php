<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Risk_level;
class Risk_Level_Management extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Risk_level::truncate();
        $risk = [
            ['name' => 'High Risk'],
            ['name' => 'Low Risk'],
            ['name' => 'Meduim Risk'],
        ];
        foreach ($risk as $key => $value) { 
            Risk_level::create($value);
        }
    }
}
