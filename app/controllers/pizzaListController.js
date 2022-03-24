// Je vais avoir besoin des données de l'ensemble des pizzas pour pouvoir les afficher de manière dynamiques

const pizzas = require('./../../data/pizzaData.json');

// Je réalise un controlleur pour que les visiteurs du site puissent accéder à la liste de l'intégralité des pizzas salées proposée

const pizzaListController = {

    // J'y intègre la logique qui se trouvait initialement dans le router

    pizzaList: function (request, response) {

        // Je renvoie la vue en question, elle s'appelle pizzaList.ejs, et comme on va lui donner les données de notre fichier JSON, il faut le préciser

        response.render("pizzaList", {

            pizzas

        });

    },

    // Maintenant, ca se complique un peu, je vais réaliser des routes paramétrées pour pouvoir afficher le détail de chaque pizza

    selectAPizza: function (request, response) {

        // Je récupère l'ID demandé. Attention, il faut le transformer en nombre dans la mesure où on veut un nombre

        const id = Number(request.params.id);

        // Je fais ensuite en sorte de récupérer la bonne valeur en paramètres

        const foundPizza = pizzas.find((testedPizza) => {

            // Si l'id de la pizza est celui qui est cherché, alors find le retournera et on le mémorise dans la constante foundPizza, sinon, on passe

            return testedPizza.id === id;

        });

        // On réalise ensuite une vue qui utilisera ses données, ici on appelera notre vue pizzaDetails

        response.render("pizzaDetails", {

            pizzas: foundPizza
            
        });

    }

    // Comme toujours, on exporte le module, il nous servira plus tard ! 

}

module.exports = pizzaListController;