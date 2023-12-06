<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ApplicationCreated;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $full_name = $request->input('full_name');
        $application_logo = $request->input('application_logo');

        // You might want to perform validation and other checks here.

        // Send the email
        Mail::to($request->user())->send(new ApplicationCreated($full_name, $application_logo));

        return response()->json(['message' => 'Email sent successfully']);
    }
}
