<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Pizza
 * This is the show-off model with instructions for how to use a laravel model
 * @package App
 */
class Pizza extends Model
{
    /**
     *  overrides the table name of this model
     *  by default Laravel will use the plural version of the model class name (lower case)
     *  see: https://stackoverflow.com/questions/30159257/base-table-or-view-not-found-1146-table-laravel-5
     * @var string
     */
    public $table = 'pizza';

    /**
     * The attributes that are mass fillable (map from array to attributes)
     * @var array
     */
    protected $fillable = array('name', 'description', 'price');
}
