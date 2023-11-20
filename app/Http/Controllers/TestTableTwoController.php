<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormTableTwo;

class TestTableTwoController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'File' => 'required|file',
        ]);

        $file = $request->file('File');
        $filePath = $file->store('uploads');

         FormTableTwo::create([
            'file_path' => $filePath,
        ]);

        return redirect()->back()->with('message', 'File uploaded successfully');
    }
}
