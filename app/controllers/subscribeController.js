// Je réalise un controlleur pour que les visiteurs du site puissent s'inscrire. 

const subscribeController = {

    // J'y intègre la logique qui se trouvait initialement dans le router

    subscribe: function (request, response) {

        // Je renvoie la vue en question, elle s'appelle login.ejs

        response.render("subscribe");
    }

};

// Comme toujours, on exporte le module, il nous servira plus tard ! 

module.exports = subscribeController;