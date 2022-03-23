// Je réalise un controlleur pour que les gens trouvent les réseaux sociaux de la pizzéria

const networkController = {

    // J'y inrègre la logique crée initialement dans le routeur

    network: function (request, response) {

    // Pour rendre la vue qui s'appelle network.ejs

    response.render("network")
    
    }
};

// Comme toujours, j'exporte le module, il me servira plus tard 

module.exports = networkController