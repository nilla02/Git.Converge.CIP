<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Carbon\Carbon;

class Roles extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'create-users']);
        Permission::create(['name' => 'edit-users']);
        Permission::create(['name' => 'delete-users']);

        Permission::create(['name' => 'create-application']);
        Permission::create(['name' => 'edit-application']);
        Permission::create(['name' => 'delete-delete-application']);



       $roles = [
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'unverified_user','code' => 'US','external_name'=>'Unverified User'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'accountant','code' => 'ACC','external_name'=>'Accountant'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'agents','code' => 'AA','external_name'=>'Agent'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'clerks','code' => 'CL','external_name'=>'Clerk'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'admin_compliance_officer','code' => 'ACO','external_name'=>'Verification Officer Adminstrator'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'compliance_officer','code' => 'CO','external_name'=>'Verification Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'admin_due_diligence_officer','code' => 'ADDO','external_name'=>'Due Diligence Officer Administrator'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'due_diligence_officer','code' => 'DDO','external_name'=>'Due Diligence Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'market_&_investor_relations_officer','code' => 'MIO','external_name'=>'Market & Investor Relations Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'super_administrators','code' => 'SA','external_name'=>'Super Administrator'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'website_admin','code' => 'WA','external_name'=>'Website Administrator'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'business_development_officer','code' => 'BDO','external_name'=>'Business Development Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'ceo','code' => 'CEO','external_name'=>'Chief Operating Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'law_enforcement_officer','code' => 'LEO','external_name'=>'Law Enforcement Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'promoter','code' => 'PM','external_name'=>'Promoter'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'corp_sec','code' => 'CS','external_name'=>'Corporate Secretary'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'pm_office','code' => 'PO','external_name'=>'Prime Minister Office'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'risk_assessment_officer','code' => 'RAO','external_name'=>'Risk Assessment Officer'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'bank','code' => 'BK','external_name'=>'Bank Offical'],
        ['created_at'=>carbon::now(),'updated_at'=>carbon::now(),'guard_name'=>'web','name' => 'processing','code' => 'PR','external_name'=>'Processing'],
       ];
       Role::insert($roles);


    }
}
