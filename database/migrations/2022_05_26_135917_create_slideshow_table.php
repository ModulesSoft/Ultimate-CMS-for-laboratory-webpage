<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSlideshowTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slideshow', function (Blueprint $table) {
            $table->id();
            $table->text('title')->nullable();
            $table->string('landscape_image');
            $table->string('portrait_image')->nullable();
            $table->text('link')->nullable();
            $table->integer('lft');
            $table->integer('rgt');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('slideshow');
    }
}
