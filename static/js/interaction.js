// Je réalise ici toutes les interactions que je veux faire pour mon site internet

// ------------------------------------------------------------ Page d'accueil / home.ejs ------------------------------------------------------------------------ //

// ETAPE 1 : Je veux que quand on clique sur la case Livre d'Or, une pop up apparait

// Je cible l'élement qui a la class .book puisque le querySelector exige un selecteur CSS

const bookElem = document.querySelector('.main-presentation-category-card--four');

// Je réalise la fonction qui permettra la dybamisation, on met le parametre event en paramètre ...

function forbiddenAccess(event) {

    // ... Pour dire que le comportement par défaut, ici le click doit être annulé et remplacer par ...

    event.preventDefault();

    // ... Un message d'alerte disant que l'authentification est obligatoire pour accéder à la catégorie demandée

    alert("Vous devez vous authentifier afin de pouvoir accéder à la section demandée");

};

// On execute ensuite la fonction en lui posant l'écouteur d'évènement "j'empèche le click", "dans la fonction forbiddenAccess" si bookElem n'est pas vide

if (bookElem != null) {

    bookElem.addEventListener('click', forbiddenAccess);

};

// ETAPE 2 : Je veux que quand on clique sur la section Mentions Légales, une pop up apparait

// Je cible la section demandée en indiquant le selecteur CSS puisque j'utilise un selecteur CSS

const registrationElem = document.querySelector('.footer-registration--href');

// Je réalise la fonction qui permettra la dynamisation, on met encore le paramètre event en paramètre

function nonAccess(event) {

    // On indique à la fonction que l'on ne veut pas qu'elle adopte le comportemet par défaut, à savoir le click

    event.preventDefault();

    // Et à la place, on lui met une pop-up qui indique que la page n'est pas encore prète

    alert("La section demandée est en cours de rédaction, merci de revenir plus tard");

};

// On execute enfin la fonction dans les mêmes conditions que l'ETAPE 1

registrationElem.addEventListener('click', nonAccess);

// ------------------------------------------------------- Page de coordonnées / contact.ejs ---------------------------------------------------------------------- //

// ETAPE 3 : Je veux que quand on clique sur la case localisation, on connaisse l'adresse exacte de la pizzeria

// Je cible la section demandée en indiquant le selecteur CSS puisque j'utilise un selecteur CSS

const localisationElem = document.querySelector('.localisation');

// Je réalise la fonction qui permettra la dynamisation, on met encore le paramètre event en paramètre

function askForLocalisation(event) {

    // On indique à la fonction que l'on ne veut pas qu'elle adopte le comportemet par défaut, à savoir le click

    event.preventDefault();

    // Et à la place, on lui met une pop-up qui indique que la page n'est pas encore prète

    alert("La pizzéria La Villa Aubert se trouve à l'adresse suivante : 5 Place Roger Salengro, 34230, Saint-Pargoire");

};

// On execute enfin la fonction dans les mêmes conditions que l'ETAPE 1

localisationElem.addEventListener('click', askForLocalisation);

// ETAPE 4 : Je veux que quand on clique sur la case téléphone, une pop up s'affiche pour montrer le numéro de téléphone de la pizzeria

// Je cible d'abord l'élément en question 

const telephoneElem = document.querySelector('.telephone');

// Je réalise ensuite la fonction qui va permettre d'emplecher le comportement par défaut

function askForTelephone(event) {

    event.preventDefault();

    // A la place, je lui met une alerte qui affichera le numéro de la pizzéria

    alert("Pour contacter La Villa Aubert, merci de composer le numéro suivant: 04 67 98 71 95");

};

// J'execute la function, toujours en faisant l'écouteur d'évènement

telephoneElem.addEventListener('click', askForTelephone);

// ETAPE 5 : Je veux que quand on clique sur la case mail, une pop up s'affiche pour montrer le numéro de téléphone de la pizzéria

// Je cible d'abord l'élément en question 

const mailElem = document.querySelector('.mail');

// Je réalise la fonction qui permettra d'empecher le comportement par défaut, à savoir le click

function askForMail(event) {

    event.preventDefault();

    // Je renseigne les informations nécéssaires dans une alerte

    alert("Si vous souhaitez envoyer un mail à La Villa Aubert, merci de nous écrire à l'adresse suivante: lavillaaubert@hotmail.com");

};

// J'execute la fonction en lui posant comme toujours l'écouteur d'évènement

mailElem.addEventListener('click', askForMail);

// ETAPE 6 : Je veux que quand on clique sur la case horaires, les visiteurs puissent savoir les horaires d'ouverture de la pizzeria

// Je cible l'élement en question 

const horairesElem = document.querySelector('.other');

// Je réalise la fonction qui va permettre de générer le message d'information 

function askForHoraires(event) {

    // On enlève le comportement par défaut

    event.preventDefault();

    // On indique ensuite les horaires d'ouvertures

    alert('La pizzeria est ouverte du mardi au dimanche, de 19h à 21h30');

};

// Je pose l'écouteur d'évènement et j'execute la fonction

horairesElem.addEventListener('click', askForHoraires);