<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = "questions";

    protected $fillable =["image","words"];

    protected $casts = [
        "words" => "array"
    ];

    public function level()
    {
        return $this->belongsTo('App\Level');
    }
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

}
