<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta name="robots" content="noindex, nofollow">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="csrf-token" content="{{csrf_token()}}">
      <meta name="x-sid" content="{{\Crypt::encrypt(\Session::getId())}}">
      <title>Cinémyope</title>
      <meta property="og:image" content="/img/posters/1/easy7.jpg">

      <!-- Chrome, Firefox OS and Opera -->
      <meta name="theme-color" content="#811414">
      <!-- Windows Phone -->
      <meta name="msapplication-navbutton-color" content="#811414">
      <!-- iOS Safari -->
      <meta name="apple-mobile-web-app-status-bar-style" content="#811414">

      <script
         src="https://code.jquery.com/jquery-3.3.1.min.js"
         integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
         crossorigin="anonymous"></script>
      <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    </head>
    <body>
        <div id="app" class="wrapper">
          <header>
              <a href="#" class="btn-home" @click="goToHome">
                  <img src="/img/interface/home-white.png">
              </a>

              <a nohref id="btn-music" class="btn-sound">
                  <img id="sound-off" src="/img/interface/sound-off-white.png">
                  <img id="sound-on" src="/img/interface/sound-on-white.png">
              </a>
          </header>
           @yield('content')
        </div>

        <audio id="bg-music" loop muted="true">
            <source src="/music/back-in-summer-nicolai-heidlas.mp3">
            Your browser does not support the audio element.
        </audio>


        <script src="{{ mix('/js/app.js') }}"></script>

        <script type="text/javascript">
          var soundBtn = document.getElementById('btn-music');
          var bgMusic = document.getElementById('bg-music');
          var btnOn = document.getElementById('sound-on');
          var btnOff = document.getElementById('sound-off');

          soundBtn.addEventListener('click', function(){toggleMusic()});

          window.addEventListener('blur', function() {
              bgMusic.muted = true;
              btnOff.style.opacity = "1";
              btnOn.style.opacity = "0";
          });
          
          function toggleMusic() {
            if (bgMusic.muted == true) {
              bgMusic.muted = false;
              bgMusic.play();
              btnOff.style.opacity = "0";
              btnOn.style.opacity = "1";
            } else {
              bgMusic.muted = true;
              btnOff.style.opacity = "1";
              btnOn.style.opacity = "0";
            }
          }
        </script>
    </body>
</html>
