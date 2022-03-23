// Je récupère Express pour réaliser le serveur

const express = require("express");

// Je part récuperer les routeurs pour que tout soient liés

const router = require("./router");

// Je commence l'initialisation du serveur express

const app = express();

// Je fais appel à la méthode path d'Express

const path = require('path')

// J'assigne à mon serveur le port 3005

const PORT = 3006;

// Je récupère toutes les vues que j'ai crée pour mon premier projet personnel

app.set("view engine", "ejs");

// J'indique qu'elle sont dans le dossier views de mon projet

app.set("views", path.join(__dirname, './views'));

// Je recupère, avec la méthode express.static, le dossier contenant tout le CSS

app.use(express.static(path.join(__dirname, '../static')));

// Je part chercher le router

app.use(router);

// Je fait en sorte que le serveur se lance sur le port choisi, ici le port 3006

app.listen(PORT, function (request, response) {

    console.log(`Serveur démarré sur le port suivant: http://localhost:${PORT}`)

});

// Le serveur se lance bien ! On fait maintenant un rangement supplémentaire entre router et server.js