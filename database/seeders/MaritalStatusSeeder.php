<?php

namespace Database\Seeders;
use App\Models\MaritualStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MaritalStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MaritualStatus::truncate();
        $marriagestatus = [
            ['name' => 'Single'],
            ['name' => 'Married'],
            ['name' => 'Divorced'],
            ['name' => 'Separated'],
            ['name' => 'Widowed'],
            ['name' => 'Domestic Partnership/Civil Union'],
            ['name' => 'Engaged'],
            ['name' => 'In a Relationship'],
            ['name' => 'Other'],


        ];
        foreach ($marriagestatus as $key => $value) {
            MaritualStatus::create($value);
        }
    }
}
