<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
          Schema::create('group_models', function (Blueprint $table) {
            $table->id();
            $table->text('first_name')->required();
            $table->text('last_name')->required();
            $table->text('Group_name')->required();
            $table->text('Licensee')->required();
            $table->timestamps();

    });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('group_models');
    }
};
