<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaController extends Controller
{
  public function serve(Request $request,$file){

    $filepath = storage_path("app/media/{$file}");

return response()->file($filepath);
  }
}
