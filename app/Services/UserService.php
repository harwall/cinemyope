<?php
namespace App\Services;


use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Cache;

class UserService
{


    protected $user;
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function played()
    {
        if (!$this->logged()) {
            return false;
        }

        if (!$this->user->played_at) {
            return false;
        }

        return (Carbon::parse($this->user->played_at)->isToday());
    }
    public function getUserId()
    {
        return $this->user->id;
    }
    public function logged()
    {
        return (session()->has('user') || session()->get('user') instanceof User);
    }

    public function start()
    {
        if ($this->logged()) {
            $this->user = session()->get('user');
            return $this;
        }

        if (!$this->request->has('id')) {
            // abort(403);
        }
        $user = $this->loadByKey($this->request->id);

        if (!$user) {
            $this->createEmptyUser();
        }

        return $this;
    }

    protected function loadByKey($key)
    {
        $user = User::where("access_key",$key)->first();

        if ($user) {
            $this->rememberUser($user);
        }

        return $user;
    }

    protected function rememberUser(User $user = null)
    {
        if ($user) {
            $this->user = $user;
        }

        session()->put('user', $this->user);
        return $this;
    }

    protected function createEmptyUser()
    {
        if (!$this->request->has('id')) {
            //abort(403, 'No id');
        }


        $accessKey = ($this->request->has('id')) ? $this->request->id : uniqid();

        $src = ($this->request->has('src')) ? $this->request->src : null ;

        $user = User::create([
            "access_key" => $accessKey,
            "src" => $src
        ]);

        return $this->rememberUser($user);
    }


    public function load()
    {
        if ($this->logged()) {
            $this->user = session()->get('user');
        }
        return $this;
    }

    public function update($data = null)
    {
        $this->user->update($data);
        $user = $this->user->fill($data);
        return $this->rememberUser($user);
    }

    public function getUser()
    {
        return $this->user;
    }


    protected function validateEmail($value)
    {
        return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
    }

}
