<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Voterlist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('voterlist', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('caname');
            $table->string('votername');
            $table->string('gardian');
            $table->integer('age');
            $table->bigInteger('mobile');
            $table->integer('voterid');
            $table->string('gender');
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
        //
    }
}
