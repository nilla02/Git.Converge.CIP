<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // Import the DB facade
use Illuminate\Support\Str; // Import the Str class

class testtable extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('test_tables')->insert([
            'first_name' => Str::random(10),
            'last_name' => Str::random(10),
            'ref_number' => Str::random(10),
            'agent_id' => rand(1, 10), // Generates a random integer between 1 and 10 (adjust the range as needed)
            'status_id' => Str::random(10),
            'Region' => Str::random(10),
            'payment_amount'=> Str::random(10),
            'co_id'=> Str::random(10),
            'acc_id'=> Str::random(10),
            'promoter_id'=> Str::random(10),
            'agency'=> Str::random(10),
            'ddo_id'=> Str::random(10),
            'ceo_id'=> Str::random(10),
            'ceo_notes'=> Str::random(10),
            'ddo_notes'=> Str::random(10),
            'co_notes'=> Str::random(10),
            'marriage_status'=> Str::random(10),
        ]);

    }
}
