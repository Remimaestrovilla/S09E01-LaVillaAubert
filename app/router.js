// Je récupère express comme dans server.js

const express = require("express");

// Je veux établir une connexion entre mon serveur et mes routes

const router = express.Router();

// je récupère les controlleurs que j'ai fait lors de l'initialisation de mon projet

const homeController = require("./controllers/homeController");

const contactController = require("./controllers/contactController");

const networkController = require("./controllers/networkController");

const loginController = require('./controllers/loginController');

const subscribeController = require('./controllers/subscribeController');

const pizzaListController = require('./controllers/pizzaListController');

const dessertListController = require("./controllers/dessertListController");

const beverageListController = require('./controllers/beverageListController');

// Je réalise les routes génériques pour vérifier que le routeur et le serveur sont liés après toute la séparation des concepts établie auparavant

router.get('/', homeController.home);

router.get('/contact', contactController.contact);

router.get('/network', networkController.network);

router.get('/login', loginController.login);

router.get('/subscribe', subscribeController.subscribe);

router.get('/pizzas', pizzaListController.pizzaList);

router.get('/desserts', dessertListController.dessertList);

router.get('/beverages', beverageListController.beverageList);

// Je réalise les routes paramétrées pour vérifier que le routeur et le serveur sont liés après toute la séparation des concepts établie auparavant

router.get('/pizzas/:id', pizzaListController.selectAPizza);

router.get('/desserts/:id', dessertListController.selectADessert);

router.get('/beverages/:id', beverageListController.selectABeverage);

// J'exporte le module router pour l'importer plus tard dans le server.js

module.exports = router;

// Le serveur se lance bien quand on fait le SOC, on va aller plus loin en séparant la logique et la non-logique avec les controlleurs