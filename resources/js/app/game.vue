<template>
<div class="game">
    <p class="countdown" v-if="won == false"><span>film suivant : </span>{{countdown}}</p>
    <div class="inner-wrapper">
        <div class="black-filter"></div>
        
        <div v-if="won == false">
            <div class="questions-container">
                <div v-for="(question, index) in questions">
                    <transition name="slide-fade" mode="out-in">
                        <img v-if="questionNumber == index" class="question-illustration" :src="'/img/posters/' + difficulty + '/' + questions[index].image + '.jpg'">
                    </transition>
                </div>
                <p class="skip-btn" @click="testAnswer(true)">></p>
            </div>

            <p class="hint" v-bind:class="{ 'hint-good' : movieNameFound == true , 'hint-bad' : movieNameFound == false || badAnswer == true }">
                <span v-if="movieNameFound == true || movieNameFound == false">{{movieName}}</span>   
                <span v-else>Trouvez le nom du film</span>
            </p>

            <div class="answer-container">
                <input id="answer-id" class="answer-input" type="text" name="answer" autocomplete="off" v-model="user.answer" placeholder="Nom du film" @focus="scrollTop()">
                <a nohref class="answer-btn" @click="testAnswer()">
                    <span>OK</span>
                </a>
            </div>
        </div>

        <div v-else class="won-container">
            <h2>
                Vous avez 
                <br>
                tout trouvé&nbsp;!
            </h2>
            <a nohref class="next-btn" @click="nextCategory()">
                <span>Catégorie suivante</span>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'game',
    data() {
        return {
            difficulty: null,
            questionNumber: null,
            initialCountdown: 60,
            countingDown: false,
            countdown: null,
            movieName: '',
            movieNameFound: null,
            badAnswer: false,
            clicked: false,
            posting: false,
            won: false,
            questions: [],
            user: {
                answer: ''
            },
        }
    },
    mounted() {
        this.difficulty = this.$attrs.difficulty;
        this.getDifficulty();
    },
    methods: {
        scrollTop() {
            setTimeout(function(){ 
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
            }, 200);
        },
        getDifficulty() {
            var _this = this;
            if (_this.difficulty != (undefined || null)) {
                axios.get(("/levels/" + (_this.difficulty).toString())).then((response) => {
                    _this.questions = response.data;
                    _this.initRandomPoster();
                }).catch((error) => {
                     Router.push( { name: 'home', params: { home: true } } );
                });
            } else {
                Router.push( { name: 'home', params: { home: true } } );
            }
        },
        testAnswer(instantly) {
            var _this = this;
            if (_this.clicked == false) {
                _this.clicked = true;
                //removing accents and capital letters in the user's answer to make the matching more tolerant
                var normalized = (_this.user.answer.toLowerCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                var normalizedTrimed = normalized.trim()
                console.log(normalizedTrimed);
                if (_this.questions[_this.questionNumber].words.includes(normalizedTrimed) && _this.posting == false) {
                    _this.posting = true;
                    axios.post(("/questions/" + (_this.questions[_this.questionNumber].id).toString() + "?correct=true")).then((response) => {
                        _this.nextPoster(true);
                    })
                    .catch((error) => {
                    });
                }else if(instantly == true) {
                    _this.nextPoster(false);
                } else {
                    _this.badAnswer = true;
                    setTimeout(function(){ 
                        _this.clicked = false;
                        _this.badAnswer = false;
                    }, 500);
                }
            }
        },
        initRandomPoster() {
            var _this = this;
            _this.checkWon();
            if (_this.won == false) {
                _this.questionNumber = Math.floor(Math.random() * Math.floor(_this.questions.length));
                _this.decrementCountdown();
                _this.movieName = _this.questions[_this.questionNumber].words[0];
            }
        },
        decrementCountdown() {
            var _this = this;
            if (_this.countingDown == true) {
                setTimeout(function(){ 
                    if (_this.countdown > 0) {
                        _this.countdown--;
                        _this.decrementCountdown();
                    } else {
                        _this.nextPoster();
                    }
                }, 1000);
            } else {
                _this.countdown = _this.initialCountdown;
            }
        },
        checkWon() {
            var _this = this;
            _this.countdown = _this.initialCountdown;
            if (_this.questions.length == 0) {
                if (_this.difficulty == 4) {
                    Router.push( { name: 'home', params: { home: true } } );
                } else {
                    _this.won = true;
                    _this.countingDown = false;
                }
            } else {
                _this.won = false;
                _this.countingDown = true
            }
        },
        nextPoster(good) {
            var _this = this;
            _this.movieName = _this.questions[_this.questionNumber].words[0];
            _this.countdown = _this.initialCountdown;
            _this.countingDown = false;
            if (good == true) {
                _this.movieNameFound = true;
                setTimeout(function(){ 
                    _this.movieNameFound = null;
                    if (_this.questionNumber != 0) {
                        _this.questionNumber--;
                        setTimeout(function(){ 
                            _this.questions.splice((_this.questionNumber + 1),1);
                        }, 500);
                    } else {
                        _this.questions.splice(0,1);
                        _this.checkWon();
                        if (_this.won == false) {
                            _this.questionNumber = (_this.questions.length - 1);
                        }
                    }
                    _this.user.answer = '';
                    _this.countingDown = true;
                    _this.decrementCountdown();
                    document.getElementById('answer-id').blur();
                    _this.posting = false;
                    _this.clicked = false;
                }, 1500);
            } else {
                _this.movieNameFound = false;
                setTimeout(function(){ 
                    _this.movieNameFound = null;
                    if (_this.questionNumber != 0) {
                        _this.questionNumber--;
                    } else {
                        _this.questionNumber = (_this.questions.length - 1);
                    }
                    _this.user.answer = '';
                    _this.countingDown = true;
                    _this.decrementCountdown();
                    document.getElementById('answer-id').blur();
                    _this.clicked = false;
                }, 1500);
            }
        },
        nextCategory() {
            var _this = this;
            _this.difficulty++;
            _this.getDifficulty();
        }
    }
}   
</script>