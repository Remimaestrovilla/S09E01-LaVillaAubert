// Je réalise un controlleur pour la page d'accueil de la pizzeria

const homeController = {

    // J'y intégre la logique crée initialement dans le router

    home: function (request, response) {

        response.render("home");

    }

};

// J'importe le controller en question pour pouvoir l'exporter plus tard, dans le fichier router.js

module.exports = homeController;

// L'intégralité du SOC est respecté