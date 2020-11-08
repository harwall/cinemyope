<template>
<div class="home">
    <div class="inner-wrapper">
        <div class="stars-counter">
            <p>total : {{totalStars}}</p>
            <img src="/img/home/star-filled.png">
        </div>
        <div class="questions-container" v-for="(level, index) in levels">
            <h2>{{level.name}}</h2>
            <a nohref class="category-btn" @click="next(level.id)" v-bind:class="{ 'category-btn-disabled' : available[index] == false }">
                <span>{{(level.name).charAt(0)}}</span>
                <div class="locked">
                    <p>{{nextLevelNeeded * index}}</p><img src="/img/home/star-filled.png">
                </div>

                <div class="star-container">
                    <p>{{level.total - (level.remaining)}}/{{level.total}}</p><img src="/img/home/star-filled.png">
                </div>
            </a>
        </div>
        <div class="reset-container">
            <img src="/img/home/reset.png" @click="resetAll()">
            <p>reset</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
	name: 'home',
    data() {
        return {
            levels: [],
            nextLevelNeeded: 12,
            totalStars: 0,
            available: [
                true,
            ]
        }
    },
    mounted() {
        this.getLevels();
    },
    methods: {
        getLevels() {
            var _this = this;
            axios.get('/levels').then((response) => {
                _this.levels = response.data;
                _this.getTotalStars();
                _this.getAvailable();
            }).catch((error) => {
                    let status = error.response.status;
                    let messages = error.response.data;

                    if (typeof(messages) === 'object') {
                        Object.keys(messages).forEach((index) => this.errors[index] = messages[index][0]);
                    }
                });
        },
        getTotalStars() {
            var _this = this;
            _this.totalStars = 0;
            for (var i = 0; i <= _this.levels.length - 1; i++) {
                _this.totalStars = _this.totalStars + (_this.levels[i].total - _this.levels[i].remaining);
            }
        },
        getAvailable() {
            var _this = this;
            for (var i = 1; i <= _this.levels.length - 1; i++) {
                if (_this.totalStars >= (_this.nextLevelNeeded * i)) {
                    _this.available.push(true);
                } else {
                    _this.available.push(false);
                }
            }
        },
        next(difficulty) {
            Router.push( { name: 'game', params: { game: true, difficulty: difficulty } } );
        },
        resetAll() {
            var _this = this;

            var search = window.location.search;
            var search_param = new URLSearchParams(search);
            var userId = search_param.get('id');

            if (confirm('Êtes-vous sûr ? Toute votre progression sera perdue.')) {
                axios.get(("/forceReset?id=" + userId)).then((response) => {
                    _this.getLevels();
                }).catch((error) => {
                });
            }
        }
    }
}	
</script>