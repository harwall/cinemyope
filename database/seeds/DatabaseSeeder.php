<?php

use Illuminate\Database\Seeder;
use App\Level;
use App\Question;
use League\Csv\Reader;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Level::create([
            "name" => "easy"
        ]);
        Level::create([
            "name" => "medium"
        ]);
        Level::create([
            "name" => "hard"
        ]);
        Level::create([
            "name" => "impossible"
        ]);


        $reader = Reader::createFromPath(storage_path('app/tableau.csv'), 'r');
        $reader->setDelimiter(';');
        $records = $reader->getRecords();
        foreach($records as $record){
            $level = Level::whereName($record[0])->first();

            $level->questions()->create([
                "image" => $record[1],
                "words" => explode("|",$record[2])
            ]);
        }
    }
}
