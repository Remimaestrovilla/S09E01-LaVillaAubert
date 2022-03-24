// J'ai besoin des informations des desserts, je part les cherches dans le fichier correspondant

const desserts = require('./../../data/dessertData.json');

// Je réalise un controlleur pour que les visiteurs du site puissent accéder à la liste de l'intégralité des desserts proposée

const dessertListController = {

    // J'y intègre la logique qui se trouvait initialement dans le router

    dessertList: function (request, response) {

        // Je renvoie la vue en question, elle s'appelle dessertList.ejs, et comme on va lui donner les infos assignées à la const desserts, on l'indique aussi !

        response.render("dessertList", {

            desserts

        });
    },
    
    // Maintenant, ca se complique un peu, je vais réaliser des routes paramétrées pour pouvoir afficher le détail de chaque dessert

    selectADessert: function (request, response) {

        // Je récupère l'ID demandé. Attention, il faut le transformer en nombre dans la mesure où on veut un nombre

        const id = Number(request.params.id);

        // Je fais ensuite en sorte de récupérer la bonne valeur en paramètres

        const foundDessert = desserts.find((testedDessert) => {

            // Si l'id de la pizza est celui qui est cherché, alors find le retournera et on le mémorise dans la constante foundDessert, sinon, on passe

            return testedDessert.id === id;

        });

        // On réalise ensuite une vue qui utilisera ses données, ici on appelera notre vue dessertDetails

        response.render("dessertDetails", {

            desserts: foundDessert

        });

    }

    // Comme toujours, on exporte le module, il nous servira plus tard ! 

}

module.exports = dessertListController;