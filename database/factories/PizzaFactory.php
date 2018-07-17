<?php

use Faker\Generator as Faker;

$factory->define(App\Pizza::class, function (Faker $faker) {
    return [
        'name' => substr($faker->sentence(1), 0, -1),
        'description' => $faker->paragraph,
        'price' => $faker->numberBetween(2, 8)
    ];
});
