<template>
	<div class="thanks">
		<div class="content">
			<h1>Merci&nbsp;!</h1>

			<p class="result">
				Votre participation
				<br class="mobile">
				a bien été enregistrée.
			</p>

			<img class="packages" src="/img/lots.png"
			     srcset="/img/lots-x2.png 2x"
			     alt="5 duos de produits les uns à côté des autres">

			<p class="instructions">
				Revenez demain pour découvrir
				<br>
				une nouvelle gestuelle parfumée et
			</p>

			<h2>Retenter votre chance&nbsp;!</h2>

			<a v-if="source == 'app'" class="btn" nohref target="_blank" @click="backToApp()">Je découvre les parfums</a>
			<a v-else class="btn" nohref target="_blank" @click="backToWeb()">Je découvre les parfums</a>
		</div>

		<rules></rules>
		<cnil></cnil>
	</div>
</template>

<script>
    export default {
        name: 'thanks',
        data() {
            return {
                clicked: false
            }
        },
        mounted() {
            this.setSource();
            this.setOS();
            axios.post('/end').then((response) => {
            }).catch((error) => {
            });
        },
        methods: {
            backToApp() {
                var _this = this;
                if (_this.clicked == false) {
                    _this.clicked = true;
                    axios.post('/tracking', { code: 'EVT7' }).then((response) => {
                        window.location.replace("aoc://plp?id=nouvelle-gestuelle&name=Les-nouvelles-gestuelles");
                    }).catch((error) => {
                    });
                    _this.clicked = false;
                }
            },
            backToWeb() {
                var _this = this;
                if (_this.clicked == false) {
                    console.log('bravo');
                    _this.clicked = true;
                    _this.track('EVT8');
                    window.open('https://www.sephora.fr/fete-des-meres/?utm_source=games&utm_medium=jeumamanforever&utm_campaign=pagedefindejeu_20190514','_blank');
                    _this.clicked = false;
                }
            }
        }
    }
</script>