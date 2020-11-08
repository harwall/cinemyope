<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $table = "levels";

    protected $fillable = ["name","remaining"];

    protected $visible = ["id","remaining","total","name"];

    public function questions()
    {
        return $this->hasMany('App\Question');
    }


}
