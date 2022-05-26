<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGalleryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gallery', function (Blueprint $table) {
            $table->id();
            $table->text('title')->nullable();
            $table->string('image');
            $table->string('video')->nullable();
            $table->string('small_thumbnail')->nullable();
            $table->string('medium_thumbnail')->nullable();
            $table->string('big_thumbnail')->nullable();
            $table->integer('lft');
            $table->integer('rgt');
            $table->integer('depth');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gallery');
    }
}
