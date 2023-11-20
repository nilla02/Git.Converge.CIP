<?php

namespace Database\Seeders;
use App\Models\Region;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Region::truncate();
        $regions = [
            ['name' => 'Middle East & Africa'],
            ['name' => 'Russia'],
            ['name' => 'Asia'],
            ['name' => 'Rest of world'],
        ];
        foreach ($regions as $key => $value) {
            Region::create($value);
        }

    }
}
