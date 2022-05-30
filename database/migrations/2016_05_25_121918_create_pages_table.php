<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // TODO: use JSON data type for 'extras' instead of string
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            // $table->string('template')->nullable();
            $table->string('name');
            $table->string('title');
            $table->string('slug')->default('')->unique();
            $table->text('introduction')->nullable();
            $table->text('conclusion')->nullable();
            $table->text('extras')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('pages');
    }
}
