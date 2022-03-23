// Je récupère express comme dans server.js

const express = require ("express");

// Je veux établir une connexion entre mon serveur et mes routes

const router = express.Router();

// je récupère les controlleurs que j'ai fait lors de l'initialisation de mon projet

const homeController = require ("./controllers/homeController");

// Je réalise une route pour vérifier que le routeur et le serveur sont liés après toute la séparation des concepts établie auparavant

router.get('/', homeController.home);

// J'exporte le module router pour l'importer plus tard dans le server.js

module.exports = router;

// Le serveur se lance bien quand on fait le SOC, on va aller plus loin en séparant la logique et la non-logique avec les controlleurs