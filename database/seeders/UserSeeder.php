<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
        public function run()
        {
            // Create a user
            $user = User::create([
                'name' => 'admin',
                'email' => 'netgeo1234@gmail.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'website_admin')->first(); // Assuming 'admin' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }

            $user = User::create([
                'name' => 'ceo',
                'email' => 'ceo@test.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'ceo')->first(); // Assuming 'ceo' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }

            $user = User::create([
                'name' => 'ddo',
                'email' => 'ddo@test.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'due_diligence_officer')->first(); // Assuming 'due diligence officers' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }

            $user = User::create([
                'name' => 'vc',
                'email' => 'vc@test.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'compliance_officer')->first(); // Assuming 'verification officer' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }

            $user = User::create([
                'name' => 'acc',
                'email' => 'acc@test.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'accountant')->first(); // Assuming 'accountant' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }

            $user = User::create([
                'name' => 'risk',
                'email' => 'risk@test.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'risk_assessment_officer')->first(); // Assuming 'risk' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }

            $user = User::create([
                'name' => 'agent',
                'email' => 'agent@test.com',
                'password' => Hash::make('password'),
            ]);


            // Assign roles to the user
            $adminRole = Role::where('name', 'agents')->first(); // Assuming 'agent' is a role you've created
            if ($adminRole) {
                $user->assignRole($adminRole);
            }
        }
}

