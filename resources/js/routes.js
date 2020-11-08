import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            name: 'home',
            path: '/',
            props: true,
            component: require('./app/home').default,
            // beforeEnter: (to, from, next) => {
            //     axios.get('/status',{ params : { path : to.path }}).then(function(response){
            //         if(response.data.path == "next"){
            //             next();
            //         } else {
            //             Router.push({path : response.data.path});
            //         }
            //     });
            // }
        },
        {
            name: 'game',
            path: '/game',
            props: true,
            component: require('./app/game').default,
/*            beforeEnter: (to, from, next) => {
                axios.get('/status',{ params : { path : to.path }}).then(function(response){
                    if(response.data.path == "next"){
                        next();
                    } else {
                        Router.push({path : response.data.path});
                    }
                });
            }*/
        },
    ]
});
