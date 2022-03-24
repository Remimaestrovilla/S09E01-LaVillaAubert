// Je vais avoir besoin de mes données pour afficher la liste des vins et boissons, je part la chercher

const beverages = require('./../../data/beverageData.json');

// Je réalise un controlleur pour que les visiteurs puissent accéder à la liste intégrale des vins et boissons proposée

const beverageListController = {

    // J'y intègre la logique par la suite 

    beverageList: function (request, response) {

        // Pour y retourner la vue qui s'appelle beverageList.ejs, sans oublier les données JSON qui sont assignées à la constante beverages

        response.render("beverageList", {

            beverages
            
        });

    },

    // Maintenant, ca se complique un peu, je vais réaliser des routes paramétrées pour pouvoir afficher le détail de chaque boissons

    selectABeverage: function (request, response) {

        // Je récupère l'ID demandé. Attention, il faut le transformer en nombre dans la mesure où on veut un nombre

        const id = Number(request.params.id);

        // Je fais ensuite en sorte de récupérer la bonne valeur en paramètres

        const foundBeverage = beverages.find((testedBeverage) => {

            // Si l'id de la boisson est celui qui est cherché, alors find le retournera et on le mémorise dans la constante foundBeverage, sinon, on passe

            return testedBeverage.id === id;

        });

        // On réalise ensuite une vue qui utilisera ses données, ici on appelera notre vue dessertDetails

        response.render("beverageDetails", {

            beverages: foundBeverage

        });

    }

};

// Je pense toujours à exporter le module pour le récuperer par la suite

module.exports = beverageListController;