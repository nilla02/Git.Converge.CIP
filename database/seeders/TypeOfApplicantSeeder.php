<?php

namespace Database\Seeders;

use App\Models\Applicant_Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeOfApplicantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Applicant_Type::truncate();
        $toi = [
            ['name' => 'Spouse','code'=>'S'],
            ['name' => 'Principle Applicant','code'=>'P'],
            ['name' => 'Qualifying Dependant','code'=>'Q'],
            ['name' => 'Addon','code'=>'A'],
        ];
        foreach ($toi as $key => $value) {
        Applicant_Type::create($value);
        }
    }
}
