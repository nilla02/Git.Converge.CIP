<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    public function run()
    {
        Permission::create(['name' => 'create-users']);
        Permission::create(['name' => 'edit-users']);
        Permission::create(['name' => 'delete-users']);

        Permission::create(['name' => 'create-application']);
        Permission::create(['name' => 'edit-application']);
        Permission::create(['name' => 'delete-delete-application']);

        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);
      
        $adminRole->givePermissionTo([
            'create-users',
            'edit-users',
            'delete-users',
            'create-application',
            'edit-application',
            'delete-delete-application',
        ]);

        $userRole->givePermissionTo([
            'create-application',
            'edit-application',
           
        ]);
    }
}
