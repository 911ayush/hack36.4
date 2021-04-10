<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Districts extends Migration
{
    /**
     * Run the migrations.
     protected $connection = 'pgsql';
     *
     * @return void
     */
    protected $connection = 'pgsql';

    public function up()
    {
            Schema::create('districts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('state_id');
            $table->string('districts');
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
