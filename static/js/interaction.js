// Je réalise ici toutes les interactions que je veux faire pour mon site internet

// ------------------------------------------------------------ Page d'accueil / home.ejs ------------------------------------------------------------------------ //

// ETAPE 1 : Je veux que quand on clique sur la case Livre d'Or, une pop up apparait

// Je cible l'élement qui a la class .book puisque le querySelector exige un selecteur CSS

const bookElem = document.querySelector('.book');

// Je réalise la fonction qui permettra la dybamisation, on met le parametre event en paramètre ...

function forbiddenAccess(event) {

    // ... Pour dire que le comportement par défaut, ici le click doit être annulé et remplacer par ...

    event.preventDefault();

    // ... Un message d'alerte disant que l'authentification est obligatoire pour accéder à la catégorie demandée

    alert("Vous devez vous authentifier afin de pouvoir accéder à la section demandée");

};

// On execute ensuite la fonction en lui posant l'écouteur d'évènement "j'empèche le click", "dans la fonction forbiddenAccess"

bookElem.addEventListener('click', forbiddenAccess);

// ETAPE 2 : Je veux que quand on clique sur la section Mentions Légales, une pop up apparait

// Je cible la section demandée en indiquant le selecteur CSS puisque j'utilise un selecteur CSS

const registrationElem = document.querySelector('.footer-registration--href');

// Je réalise la fonction qui permettra la dynamisation, on met encore le paramètre event en paramètre

function unavailabiltyAccess(event) {

    // On indique à la fonction que l'on ne veut pas qu'elle adopte le comportemet par défaut, à savoir le click

    event.preventDefault();

    // Et à la place, on lui met une pop-up qui indique que la page n'est pas encore prète

    alert("La section demandée est en cours de rédaction, merci de revenir plus tard");

};

// On execute enfin la fonction dans les mêmes conditions que l'ETAPE 1

registrationElem.addEventListener('click', unavailabiltyAccess);

// ------------------------------------------------------- Page de coordonnées / contact.ejs ---------------------------------------------------------------------- //

// ETAPE 3 : 

console.log("je suis co en JS");