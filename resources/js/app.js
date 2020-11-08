
// require('remodal');
require('./bootstrap');

//START MultiLang
function getLang() {
    let lang = document.documentElement.lang;
    let typeLang = typeof(lang);

    if (typeLang === String) {
        throw "lang must be a String, " + typeLang + "given : " + lang;
    }else {
        return lang;
    }
};
import messages from './lang';
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);

// const i18n = new VueI18n({
//     locale: getLang(),
//     messages,
// });
//END MultiLang

Vue.mixin({
    data() {
        return {
            lang: 'fr',
            os: 'window', // window or android or ios
            source: 'web', // web or inter
            device: 'desktop', // desktop or mobile
            lastDay: false // desktop or mobile
        }
    },
    created() {
        // this.setSource();
        // this.lastDay();
    },
    methods: {
        track(code) {
            axios.post('/tracking', { code: code });
        },
        openPopin(type) {
            let modal = $('[data-remodal-id='+type+']').remodal({hashTracking: false, closeOnOutsideClick: true});
            modal.open();
        },
        setOS() {
            if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ) {
                this.device = 'ios';
            }else if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
                this.device = 'android';
            }else {
                this.device = 'desktop';
            }
        },
        setSource() {
            this.source = document.getElementById('app').getAttribute('data-src');
        },
        setLastDay() {
            this.lastDay = document.getElementById('app').getAttribute('data-lastDay');
        },
        setLang() {
            this.lang = window.lang;
        },
        setDevice() {
            if( navigator.userAgent.match(/Android/i)
                 || navigator.userAgent.match(/webOS/i)
                 || navigator.userAgent.match(/iPhone/i)
                 || navigator.userAgent.match(/iPad/i)
                 || navigator.userAgent.match(/iPod/i)
                 || navigator.userAgent.match(/BlackBerry/i)
                 || navigator.userAgent.match(/Windows Phone/i)
            ){
                this.device = 'mobile';
            }else {
                this.device = 'desktop';
            }
        },


        //NEW METHODS
        goToHome() {
            Router.push( { name: 'home', params: { home: true } } );
        },
        checkMusicState() {
            var bgMusic = document.getElementById('bg-music');
            var btnOn = document.getElementById('sound-on');
            var btnOff = document.getElementById('sound-off');

            if (bgMusic.muted == true) {
                btnOff.style.opacity = "1";
                btnOn.style.opacity = "0";
            } else {
                btnOff.style.opacity = "0";
                btnOn.style.opacity = "1";
            }
        }
    }
});

const app = new Vue({
    //i18n, // import multiLang in app
    el: '#app',
    router: Router,
});

