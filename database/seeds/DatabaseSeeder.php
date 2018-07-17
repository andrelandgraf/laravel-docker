<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // activate only the Seeders that should put demo data into the DB
        $this->call(PizzaTableSeeder::class);
    }
}
