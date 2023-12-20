<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaController extends Controller
{
  public function serve(Request $request,$file){

    $filepath = storage_path("app/media/{$file}");

return response()->file($filepath);
  }

  public function download(Request $request,$agency,$folder){




    $zip_file = $folder.'.zip';
    $zip = new \ZipArchive();
    $zip->open($zip_file, \ZipArchive::CREATE | \ZipArchive::OVERWRITE);

    $path = storage_path("app/media/{$agency}/{$folder}");
    $files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($path));
    foreach ($files as $name => $file)
    {
        // We're skipping all subfolders
        if (!$file->isDir()) {
            $filePath     = $file->getRealPath();

            // extracting filename with substr/strlen
            $relativePath ="/" . substr($filePath, strlen($path) + 1);

            $zip->addFile($filePath, $relativePath);
        }
    }
    $zip->close();
    return response()->download($zip_file);
return response()->file($filepath);
  }
}
