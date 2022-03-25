// Je réalise un controlleur pour la page "cooordonnées" de la pizzeria

const contactController = {

    // J'y intègre la logique par la suite ...

    contact: function (request, response) {

        // Pour y retourner la vue qui s'appelle contact.ejs

        response.render("contact");

    }
};

// Je pense toujours à exporter le module pour le récuperer par la suite

module.exports = contactController;