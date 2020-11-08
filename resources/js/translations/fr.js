let fr = {
	ingredient: {
		prefix: { 
			le: 'Le', 
			la: 'La',
			les: 'Les',
			null: ''
		},
		name: {
			charbon: 'charbon',
			rose: 'rose',
			ginseng: 'ginseng',
			sucre: 'sucre',
			legumes: 'légumes',
			bambou: 'bambou',
			cafe: 'café',
			miel: 'miel',
			null: ''
		},
		verb: {
			charbon: 'Purifie',
			rose: 'Hydrate',
			ginseng: 'Revitalise',
			sucre: 'Exfolie',
			legumes: 'détoxifient',
			bambou: 'Matifie',
			cafe: 'Lisse',
			miel: 'Nourrit',
			null: ''
		},
		find: {
			charbon: 'Trouvez les 3 morceaux de charbon cachés dans le décor dans le temps imparti !',
			rose: 'Trouvez les 3 roses cachées dans le décor dans le temps imparti !',
			ginseng: 'Trouvez les 3 racines de ginseng cachées dans le décor dans le temps imparti !',
			sucre: 'Trouvez les 3 morceaux de sucre cachés dans le décor dans le temps imparti !',
			legumes: 'Trouvez les 3 légumes verts cachés dans le décor dans le temps imparti !',
			bambou: 'Trouvez les 3 branches de bambou cachées dans le décor dans le temps imparti !',
			cafe: 'Trouvez les 3 grains de café cachés dans le décor dans le temps imparti !',
			miel: 'Trouvez les 3 alvéoles de miel cachées dans le décor dans le temps imparti !',
			null: ''			
		},
		win: {
			charbon: "Vous avez trouvé les 3 morceaux de charbon dans le temps imparti !",
			rose: "Vous avez trouvé les 3 roses dans le temps imparti !",
			ginseng: "Vous avez trouvé les 3 racines de ginseng dans le temps imparti !",
			sucre: "Vous avez trouvé les 3 morceaux de sucre dans le temps imparti !",
			legumes: "Vous avez trouvé les 3 légumes verts dans le temps imparti !",
			bambou: "Vous avez trouvé les 3 branches de bambou dans le temps imparti !",
			cafe: "Vous avez trouvé les 3 grains de café dans le temps imparti !",
			miel: "Vous avez trouvé les 3 alvéoles de miel dans le temps imparti !",
			null: ''			
		},
		loose: {
			charbon: "Vous n'avez pas trouvé les 3 morceaux de charbon dans le temps imparti !",
			rose: "Vous n'avez pas trouvé les 3 roses dans le temps imparti !",
			ginseng: "Vous n'avez pas trouvé les 3 racines de ginseng dans le temps imparti !",
			sucre: "Vous n'avez pas trouvé les 3 morceaux de sucre dans le temps imparti !",
			legumes: "Vous n'avez pas trouvé les 3 légumes verts dans le temps imparti !",
			bambou: "Vous n'avez pas trouvé les 3 branches de bambou dans le temps imparti !",
			cafe: "Vous n'avez pas trouvé les 3 grains de café dans le temps imparti !",
			miel: "Vous n'avez pas trouvé les 3 alvéoles de miel dans le temps imparti !",
			null: ''			
		},
		color: {
			vert: 'verts',
			null: ''
		},

	},
	home: {
		intro: { 
			first: "Jusqu'au 1<sup>er</sup> mai, <br class='hide--tablet'> tentez votre chance", 
			second: "pour gagner un kit <br class='hide--tablet'> super ingrédients <br class='hide--mobile'> ou <br class='hide--tablet'> de nombreux produits*"
		},
		error: { 
			rule: 'Veuillez accepter le règlement pour continuer'
		},
		button: { 
			go: 'Je joue !'
		},
		rules: { 
			first: 'En cochant cette case',
			second: "j'accepte le règlement",
		},
		mention: '*Jeu organisé du 16/04/2018 à 10h00 au 01/05/2018 à 23h59 soumis à conditions.'
	},
	game: {
		title: { 
			first: 'Le', 
			second: 'Du jour est :' 
		},
		issue: { 
			first: 'Une difficulté ?', 
			second: 'Suivez', 
			third: 'ce lien.'
		}
	},
	modal: {
		win: { 
			title: 'Bravo !', 
		},
		loose: {
			title: 'Dommage !', 
		}
	},
	win: {
		subtitle: 'votre peau',
		description: "Pour tenter de gagner un kit super ingrédients ou de nombreux produits, je m'inscris au tirage au sort :",
		placeholder: "Votre email*",
		asterisk: "*Champs obligatoires. N’oubliez pas de renseigner la même adresse email à chaque participation pour augmenter vos chances d’être tiré au sort&nbsp;!",
		checkbox: "Je souhaite recevoir les communications de Sephora",
		button: 'envoyer',
		nothanks: "non merci",
		error: "Votre email n’est pas valide",
		cnil: "* Information obligatoire. Les informations personnelles vous concernant et collectées dans le cadre du présent formulaire sont destinées à Sephora afin de participer au tirage au sort et si vous y avez consenti, vous adresser des offres commerciales sur les produits et services de Sephora. Les données personnelles collectées et traitées par Sephora sont conservées pendant une durée limitée, correspondant à la finalité du traitement. Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous bénéficiez d'un droit d'accès, de rectification et de suppression des données personnelles qui vous concernent, ainsi que d’un droit d'opposition pour motif légitime. Vous pouvez exercer ces droits en écrivant aux coordonnées précisées dans le Règlement de Jeu."
	},
	winBack: {
		subtitle: 'Votre participation a bien été prise en compte&nbsp;!',
		description: {
			back: 'Revenez demain pour trouver un autre super ingrédient et avoir une chance supplémentaire de gagner le super kit ou de nombreux produits&nbsp;!',
			noback: {
				mobile: "A très vite sur le site sephora.fr !",
				inter: "A très vite sur l'application Sephora !",
				desktop: "A très vite sur le site sephora.fr !"
			}
		},
		button: 'Découvrir toute la gamme',
		network: 'Faîtes découvrir les Super Ingrédients à vos amis&nbsp;!',
	},
	loose: {
		subtitle: 'votre peau',
		description: {
			back: "Revenez demain pour trouver un autre super ingrédient et avoir une chance supplémentaire de gagner le super kit ou de nombreux produits&nbsp;!",
			noback: {
				mobile: "A très vite sur le site sephora.fr !",
				inter: "A très vite sur l'application Sephora !",
				desktop: "A très vite sur le site sephora.fr !"
			}
		},
		button: 'Découvrir toute la gamme',
		network: 'Faîtes découvrir les Super Ingrédients à vos amis&nbsp;!',
	},

	played: {
		subtitle: "Vous avez déjà joué aujourd'hui !",
		description: {
			back: "Revenez demain pour retenter votre chance !",
			noback: {
				mobile: "A très vite sur le site sephora.fr !",
				inter: "A très vite sur l'application Sephora !",
				desktop: "A très vite sur le site sephora.fr !"
			}
		},
		button: 'Découvrir toute la gamme',
		network: 'Faîtes découvrir les Super Ingrédients à vos amis !',
	},
	social: {
		facebook: {
			site: {
				desktop: 'http://www.sephora.fr/jeu-super-ingredients/R311900008 ',
				mobile: 'http://m.sephora.fr/index.html#!catalog/html/theme-page/311900008',
			},
			quote: 'Partez, vous aussi, à la recherche des Super Ingrédients de Sephora ! De nombreux cadeaux à gagner !',
		},
		whatsapp: {
			text: 'Partez, vous aussi, à la recherche des Super Ingrédients de Sephora ! De nombreux cadeaux à gagner !',
		},
		email: {
			subject: 'Jeu Super Ingrédients Sephora',
			body: 'Partez, vous aussi, à la recherche des Super Ingrédients de Sephora ! De nombreux cadeaux à gagner !',
		}
	},
	end: {
		subtitle: {
			first: 'Le jeu est à présent terminé !',
			second: 'A très vite sur le site Sephora.fr !',
		},
		button: "Découvrir toute la gamme",
	},
	leave: {
		mobile: 'http://m.sephora.fr/index.html#!catalog/html/theme-page/310200007?utm_campaign=superingdtsjeu&utm_medium=games&utm_source=business',
		desktop: 'http://www.sephora.fr/super-ingredients/R310200007?utm_campaign=superingdtsjeu&utm_medium=games&utm_source=business',
		inter: 'sephoramcommerce://themePage/fullHTML/310200007'
	}
};

export default fr;