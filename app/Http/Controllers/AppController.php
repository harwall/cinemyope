<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Facades\App\Services\UserService;
use App\Level;
use App\Question;
use DB;
class AppController extends Controller
{
    public function index()
    {

        session()->forget('user');
        $userService = UserService::start();
        return view('welcome');
    }
    public function getLevels()
    {
        $levels = Level::with('questions')->get();

        $userService = UserService::load();

        $levels->each(function($level) use ($userService){

            $remainingQuestionArray = $userService->getUser()->questions()->whereHas('level',function($query) use($level){
                $query->where('levels.id',$level->id);
            })->get();
            $level->total = $level->questions->count();
            $level->remaining = $level->questions->count() - $remainingQuestionArray->count();

        });
        return $levels;
    }
    public function getLevelQuestion(Request $request,$level)
    {
        $level = Level::find($level);

        $userService = UserService::load();

        $questions = DB::select('
            SELECT questions.id,image,words
            FROM levels
            INNER JOIN questions on questions.level_id = levels.id
            WHERE levels.id = ?
            AND questions.id not in (
                SELECT question_user.question_id
                FROM question_user
                WHERE user_id = ?
            )
        ',[$level->id,$userService->getUser()->id]);
        foreach($questions as $question){
            $question->words = json_decode($question->words);
        }
        return $questions;
    }
    public function storeResponse(Request $request,$questionId)
    {

        $userService = UserService::load();

        $question = Question::find($questionId);

        if($question && $request->input('correct') == true){

            $question->users()->attach($userService->getUser()->id);
        }


    }
    public function resetUser(Request $request)
    {
        if(!$request->has('id')){
            abort(403);
        }
        $user = User::where('access_key',$request->input('id'))->first();
        if($user){
            $user->questions()->detach();
        }

    }
}
