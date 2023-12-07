<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Status_model;

class Statuses extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
        {

            $statuses = [
                ['internal_title' => 'Pending Review', 'external_title' => 'Pending Review'],
                ['internal_title' => 'Application Assigned', 'external_title' => 'Pending Review'],
                ['internal_title' => 'Pending Background check', 'external_title' => 'Pending Background check'],
                ['internal_title' => 'Background check Underway', 'external_title' => 'Background check Underway'],
                ['internal_title' => 'Pending Decision', 'external_title' => 'Pending Decision'],
                ['internal_title' => 'Investment Pending', 'external_title' => 'Investment Pending'],
                ['internal_title' => 'Investment Received', 'external_title' => 'Investment Received'],
                ['internal_title' => 'Denied', 'external_title' => 'Denied'],
                ['internal_title' => 'Delayed with Cause', 'external_title' => 'Delayed with Cause'],
                ['internal_title' => 'Non-Compliant', 'external_title' => 'Non-Compliant'],
                ['internal_title' => 'Granted', 'external_title' => 'Granted'],
                ['internal_title' => 'Draft Created', 'external_title' => 'Draft'],
                ['internal_title' => 'Draft Edited', 'external_title' => 'Draft'],
                ['internal_title' => 'Application Closed', 'external_title' => 'Closed'],
                ['internal_title' => 'Withdrawn', 'external_title' => 'Withdrawn'],
                ['internal_title' => 'Rejected', 'external_title' => 'Rejected'],
                ['internal_title' => 'Process Law Enforcement', 'external_title' => 'Process Law Enforcement'],
                ['internal_title' => 'Draft Assigned', 'external_title' => 'Draft'],
                ['internal_title' => 'Returned for Compliance', 'external_title' => 'Pending Review'],
                ['internal_title' => 'Draft Closed', 'external_title' => 'Draft'],
                ['internal_title' => 'Updated', 'external_title' => 'Updated'],
                ['internal_title' => 'Query Application', 'external_title' => 'Query Pending'],
                ['internal_title' => 'Denied-RFR In-Process', 'external_title' => 'RFR In-Process'],
                ['internal_title' => 'Denied-RFR Granted', 'external_title' => 'RFR Granted'],
                ['internal_title' => 'Denied-RFR Denied', 'external_title' => 'Denied-RFR Decision Stayed'],
                ['internal_title' => 'Rescinded', 'external_title' => 'Rescinded'],
                ['internal_title' => 'Revoked', 'external_title' => 'Closed'],
                ['internal_title' => 'Granted - Oath Pending', 'external_title' => 'Granted - Oath Pending'],
                ['internal_title' => 'Granted - Oath Non Compliant', 'external_title' => 'Granted - Oath Non Compliant'],
                ['internal_title' => 'Granted - Oath Accepted', 'external_title' => 'Granted - Oath Accepted'],
                ['internal_title' => 'Granted - Oath Submitted', 'external_title' => 'Granted - Oath Processing'],
                ['internal_title' => 'Granted - Pending COR', 'external_title' => 'Granted - Pending COR'],
                ['internal_title' => 'Granted - Pending Law Enforcement ', 'external_title' => 'Granted - Pending Law Enforcement '],

            ];
            foreach ($statuses as $key => $value) {
                Status_model::create($value);
            }
        }
}
