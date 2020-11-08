<template>
<div class="social">
    <a class="social__fb" @click.prevent="fb">
        <img src="/img/social/facebook.png">
    </a>
    
    <a class="social__mail" nohref @click.prevent="mail">
        <img src="/img/social/email.png">
    </a>
    
    <a class="social__tw" nohref @click.prevent="tw">
        <img src="/img/social/whatsapp.png">
    </a>
    <a class="social__sms" nohref @click.prevent="sms">
        <img src="/img/social/whatsapp.png">
    </a>

    <a class="social__messenger" nohref @click.prevent="messenger" v-if="src == 'inter'">
        <img src="/img/social/messenger.png">
    </a>
    
    <a class="social__whatsapp" nohref @click.prevent="whatsapp" v-if="src == 'inter'">
        <img src="/img/social/whatsapp.png">
    </a>
</div>
</template>

<script>
export default {
    name: 'social',
    data() {
        return {
            subject: 'Sujet',
            body: 'Body',
            quote: 'Quote',
            fbAppID: 'id',
            smsTxt: 'SMS',
            twTxt: 'Groupama Centre-atlantique : Sur ce coup là, on sort le grand jeu ! Allez-vous gagner ? https://lkd.pw/d/U5LJQVLE',
            site: window.location.origin,
            src: window.src,
        }
    },
    mounted() {
        this.initFb();
    },
    methods: {
        initFb() {
            window.fbAsyncInit = () => {
                FB.init({appId: this.fbAppID, xfbml: true, version: 'v2.9'});
                FB.AppEvents.logPageView();
            };
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/fr_FR/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },
        fb() {
            this.track('EVT11');
            FB.ui({method: 'share', href: this.site, quote: this.quote});
        },
        mail() {
            this.track('EVT12');
            let link = 'mailto:?subject='+encodeURIComponent(this.subject)+'&body='+encodeURIComponent(this.body)+' '+encodeURIComponent(this.site);
            window.open(link);
        },
        tw() {
            this.track('EVT12');
            let link = 'https://twitter.com/intent/tweet?&text='+encodeURIComponent(this.twTxt);
            window.open(link);
        },
        sms() {
            this.track('EVT12');
            let link = 'sms:/0600000000/?body='+this.sms+' '+this.site;
            window.open(link);
        },
        messenger() {
            this.track('EVT12');
            let link = 'fb-messenger://share?link='+encodeURIComponent(this.site)+'&app_id='+encodeURIComponent(this.fbAppID);
            window.open(link);
        },
        whatsapp() {
            this.track('EVT12');
            let link = 'whatsapp://send?text='+encodeURIComponent(this.$t('social.whatsapp.text'))+' '+encodeURIComponent(this.site);
            window.open(link);
        }
    }
}   
</script>