// Je réalise un controlleur pour que les visiteurs du site puissent se connecter

const loginController = {

    // J'y intègre la logique qui se trouvait initialement dans le router

    login: function (request, response) {

        // Je renvoie la vue en question, elle s'appelle login.ejs

        response.render("login");
    }

};

// Comme toujours, on exporte le module, il nous servira plus tard ! 

module.exports = loginController;