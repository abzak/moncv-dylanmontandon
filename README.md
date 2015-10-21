##Les outils que j'ai utilisés pour mener à bien ce travail sont:

* Notepad++ (création et édition des fichiers html et css)
* Gimp 2 (traitement des images)
* Chrome, Firefox et Internet Explorer (tester mon site)
* bootstrap (afin de faire des pages html plus simplement grâce à l'utilisation du "grid"
* bootswatch (collection de thème pour rendre son site plus joli facilement.)
* Yeoman:
	* Bower (c'est lui qui va gérer toutes les dépendances (JavaScript, css, images, etc.) lorsque l'on installe
			une nouvelle fonctionnalité à notre site (smooth scroll p. ex.) c'est lui qui va ajouter dans notre
			index.html le chemin d'accès à la fonctionnalité et faire en sorte que tout fonctionne. (bower install)
	* Grunt (c'est un task manager, c'est lui qui va faire le rôle de serveur web, mais pas que, il va par exemple
			faire en sorte que lorsqu'on modifie un fichier, la page va automatiquement être "rafraichie"
			ou lorsque plusieurs client se connecte au site, qu'il y ait une synchronisation de tous les clients.
			Mais le plus important. C’est lui qui va pouvoir générer un site web de distribution. il va pour cela
			faire des optimisations et faire en sorte que notre site web soit utilisable en distribution (dossier dist)
			il existe beaucoup de plugin à rajouter à grunt afin de rendre la création de site web le plus simple possible.)
	* Yo (c'est ce qui va faire le "squelette" de notre projet, il va créer le nécessaire pour pouvoir commencer le développement.)
* node.js (c'est un moteur JavaScript (celui de Google chrome, V8), afin de pouvoir exécuter du JavaScript en dehors du navigateur)
* npm (c'est un package manager qui fonctionne avec node.js)
* jQuery (c'est une librairie JavaScript qui permet de faire du JavaScript plus facilement.)
* Git (afin de pouvoir faire du versionning et aussi de pouvoir mettre en ligne notre site web et qu'il soit accessible partout)

##Installation des outils:

Pour commencer, il faut télécharger et installer node.js depuis le site officiel (npm sera lui aussi installé)

Lorsque cela est fait, il faut installer yo, bower ainsi que grunt (expliqué plus haut) en faisant cette commande:
```
npm install -g yo bower grunt-cli
```
(L’option -g permet d'installer les éléments globalement, ainsi on peut utilisé les outils pour tout les projets.)

il faut encore installer le generator yeoman (le "package" avec les fonctionnalités souhaitées):
```
npm install -g generator-webapp
```

##Création du projet:

Pour pouvoir créer un projet, il faut pour cela créer un nouveau dossier et se déplacer à l'intérieur:
```
mkdir monCV //création dossier monCV
cd monCV //déplacement à l'intérieur de celui-ci
```
pour créer véritablement le projet, il suffit maintenant d'exécuter cette commande:
```
yo webapp //yo permet de créer le squelette de notre site web.
```
il nous est demandé ce que l'on souhaite installé (bootstrap, sass, modernizr) nous n'allons utiliser que bootstrap,
il faut donc décocher les deux autres.


Une erreur est survenue lors de la création l'application, il a donc fallu que nous installions git ainsi que python.

Informations: pour voir les dépendances de npm ou de bower, il suffit d'aller voir les fichiers "json",
respectivement package.json et bower.json

Maintenant que le squelette de notre site web est fait. nous pouvons exécuter cette commande:
```
grunt serve
```
Cela va permettre de lancer le task manager et ainsi, de pouvoir visualiser notre site web sur un navigateur (http://localhost:9000).

Installation d'un packages bower:

Maintenant que notre structure de site est faite, nous pouvons installer un packages bower afin d'améliorer notre site
Nous allons installer bootswatch qui est un package permettant de mettre un thème à notre site.
```
bower install bootswatch --save
```
Cela va installer proprement bootswatch, modifier les dépendances et rajouter une ligne à notre index.html:
```
<link rel="stylesheet" href="bower_components/bootswatch/???/bootstrap.css" />
```
Il suffit maintenant de remplacer les "???" par un nom de thème  afin que celui-ci soit pris en compte.

##Création du site web:

Pour créer mon site web, j'ai repris la structure du site que j'avais déja fait dans le devoir numéro 1.
J’ai donc séparé mon CV en plusieurs parties (informations personnelles, formations, expériences professionnelle, etc.)
J’ai en effet "converti" mon ancien site web en bootstrap, j'ai utilisé pour cela les titres (h1, h2, etc..), les tableaux, les progressbar et les classes définie
par bootstrap afin que mon site soit "reponsive" c'est a dire qu'il s'adapte à la taille de l'écran.

Pour se faire, j'ai utilisé des classes "col-sm-x col-sm-offset-x" cela signifie que l'élément qui possède ces classes va être small (cela siginifie qu'il faudra
beaucoup réduire la fenêtre pour que les éléments se mettent à la ligne. Le premier "x" signifie la taille que va prendre l'élément et le deuxième signifie le décalage.
x allant de 0 à 12 en se basant sur le grid (le grid c'est simplement un "grillage" de la page web pour un totale de 12 "cellules") cela permet de placer des éléments facilement.

J’ai donc créé mon site web de cette façon, sans avoir à gérer le CSS (c'est en effet bootstrap que le fait à notre place) et cela permet d'avoir
rapidement un site web fonctionnel en très peu de lignes de code.

Je vérifiais régulièrement si la mise en page de mon site me convenait.
Lorsque ceci fut terminé, j'ai appliqué un thème bootswatch à mon site afin qu'il soit plus beau visuellement. (superhero)

Ceci était la première version de mon site (1.0.0), j'ai donc utilisé git pour pouvoir le stocker en ligne.

##Installation et utilisation de Git:

Mr. Fritsher nous a donné le lien afin d'accéder au git de la HEG, il a donc simplement fallu créer un compte afin de pouvoir rejoindre gitHub. (https://github.com/heg-web)

Pour installer git il faut aller sur le site de gitHub (https://desktop.github.com/) et installer gitHub desktop.
Une fois l'installation terminé, il faut ouvrir un git shell (il s'est installé en même temps que gitHub desktop)

Une fois le shell ouvert, il faut se placer dans le dossier ou se trouve le projet que vous souhaitez mettre en
ligne:
```
cd "C:\Users\dylan.montando\Documents\HEG\Projet web\Projet\monCV"
```
une fois à l'intérieur du dossier, il faut créer un repository (l'équivalent d'un dossier pour git) pour cela, il suffit
de lancer la commande suivante:

```
git init
```
le nom de la commande parle d'elle même, cela permet d'initialiser un repo vide.

il faut maintenant ajouter les fichiers souhaités dans le repo vide:
```
git add . --all //le "." signifie que TOUT les fichiers sont ajouté repo local
```

Il faut maintenant valider les modifications (dans notre cas, l'ajout du projet au repo) (pas effectif sur le serveur)
```
git commit -m "first commit"

```
Les bonnes pratiques veulent que l'on mette un message pour chaque commit (par soucis de traçabilité, afin de 
savoir quelles sont les modifications effectuées et pourquoi.

Afin de pouvoir mettre notre site web sur git, il faut dire à git où déposer les fichiers, il suffit de faire cette commande:
```
git remote add origin git@github.com:heg-web/moncv-dylanmontandon.git
```

ainsi, git sait où il doit déposer les fichiers (à savoir sur git@github.com:heg-web/moncv-dylanmontandon.git)
Pour que notre projet soit REELEMENT sur git, il faut exécuter cette commande:
```
git push origin master
```

Cela permet de réellement avoir notre projet sur git.

##Versionning

Afin de pouvoir spécifier à notre projet une version (1.0.0) il faut aller dans notre repo personnel
sur github (https://github.com/heg-web/moncv-dylanmontandon) puis dans "releases" > draft a new release
entrer le tag de version désirée (1.0.0) comme target "master" il faut nommer la release puis "publish release"

Ainsi, le projet est en ligne sur gitHub et c'est la version 1.0.0!

##Création du site Web de distribution

Jusqu'à maintenant, nous avons créé un site web qui ne pouvait pas être mis en ligne (site de distribution)
Heureusement le task manager Grunt est capable de nous "générer" un site web pouvant être mise en ligne.
Pour se faire il fait des optimisations, transformation et il nous créer un dossier "dist" à la racine de notre projet, c'est dans ce dossier-LÀ que notre site optimisé et prêt à être mis en ligne. 

Pour ce faire, il faut maintenant exécuter cette commande:
```
grunt build
```

C’est à ce moment que grunt fait le travail.

##Mise en ligne du site de distribution

Pour pouvoir mettre notre site web en ligne et qu'il soit accessible, il faut se placer dans le dossier dist
(puisque c'est le dossier que nous allons mettre en ligne):

```
cd ./dist
```

Maintenant, le processus est presque identique que lors de la mise en ligne de notre projet sur git:
```
git init
git add .
git commit -m "site web"
git remote add origin git@github.com:heg-web/moncv-dylanmontandon.git
git push origin master:gh-pages --set-upstream
```

Le principe est le même, si ce n'est que nous allons créer une branche nommée gh-pages.
C’est là que nous allons mettre notre site web.

Après la fin du processus, lorsque l'on se rend sur la page:

https://heg-web.github.io/moncv-dylanmontandon/

Notre site est donc bien mis en ligne!

##Amélioration Site web
####SmoothScroll
Maintenant que mon site est en ligne (version 1.0.0) j'ai décidé de rajouter un plugin jQuery à mon site web
afin que lorsque je fais un raccourci interne sur ma page web (jusqu'à la rubrique "formation" par exemple), la page descende de manière fluide. Pour cela, j'ai rajouté le plugin "smooth scroll" en exécutant
cette commande:

```
bower install jquery-smooth-scroll --save
```

Bower va installer le plugin et gérer toutes les dépendances
l'option --save permet de sauvegarder le plugin dans le fichier bower.json ("nanogallery": "~5.8.0"). Ainsi, lorsqu'une personne veux installer mon projet chez lui, bower va automatiquement
installer les plugins présent dans le fichier bower.json.

Il va aussi rajouter dans notre index.html une ligne:

```
<script src="/bower_components/jquery-smooth-scroll/jquery.smooth-scroll.js"></script>
```

Cette ligne permet à notre site web d'utiliser le plugin (c'est un lien sur le script).

il suffit maintenant d'éditer le fichier "main.js" se trouvant dans le dossier "scripts" et d'y insérer ceci:
```
'use strict';
$('a').smoothScroll();
```

Le use strict signifie que l'on veut que notre fichier JavaScript s'exécute en mode stricte, c'est dire qu'il
n'acceptera pas certaine chose (suppression d'un élément qui n'existe pas, utilisation d'une variable non déclarée.
Il affichera une erreur si tel est le cas.

La deuxième ligne veut dire que TOUS les éléments "a" vont utiliser la méthode smoothScroll()
(c'est une méthode du plugin que nous venons d'installer)

Maintenant il ne reste plus qu'à faire pointer notre balise <a> sur un élément. Exemple:

<a href='#BasDeLePage'>Où je veux aller</a>
<h1 id='BasDeLePage'>là ou mon lien va pointer</h1>

###FixedBlock

Maintenant que smoothscroll est installé et opérationnel, j'ai décidé d'intégrer une sorte de menu à
côté de ma page qui ne bougerait pas lors du scroll, à l'intérieur de celui-ci se trouverait les titres des
rubriques de mon site avec un lien sur ceux-ci (utilisation de smoothscroll).

Il m'a alors suffit de créer un div. J'ai ensuite fait du CSS afin de placer mon block où je désirais qu'il soit
de sorte à ce qu'il ne bouge pas lors du "scroll" j'ai donc utilisé la propriété "position: fixed".

Malheureusement, lorsque je réduisais la page, au bout d'un moment le block chevauchait le "corps" de mon site
de ma page web. J'ai donc décidé de faire en sorte que le block disparaisse lorsque la fenêtre avait une certaine taille. J'ai trouvé une fonction JavaScript me permettant de faire ceci:

```
function wResize() {
         var winW = $(window).width();
         
         if ( winW < '1200') {
             $("#getFixed").hide(); 
         }
         else {
             $("#getFixed").show(); 
         }         
             
     }
```

Cette fonction va vérifier si la fenêtre fait moins de 1200 pixels, si c'est le cas, elle fait disparaître mon block,
sinon, elle le fait apparaître.

Il faut maintenant faire en sorte que cette fonction s'exécute à chaque fois que la page change de taille:
```
$(window).resize(function() {
        wResize();
    });
```

La fonction $(window).resize est une fonction JavaScript permettant d'exécuter du code à chaque changement
de taille de la page web.

J'ai dû résoudre un autre problème. En effet, lorsque je rafraichissais la page lorsque celle-ci était inférieur à 1200 pixels,
le block s'affichait quand même. il m'a simplement fallu appeler ma fonction "wResize" en dehors de "resize" car comme son nom
l'indique, la fonction resize s'exécute à chaque fois que l'on redimensionne la fenêtre, mais lorsque nous arrivons pour la première
fois sur le site (ou que l'on fait un F5), le code à l'intérieur de la fonction resize ne s'exécute pas.

Désormais mon site possède un block qui reste fixe en tout temps et qui disparait lorsque la page devient
trop petite.

###Nano Gallery

J'ai décidé de rajouter un plugin jQuery sur mon site web, nano gallery.

C'est un plugin permettant d'insérer une galerie photo très facilement. L'avantage de ce plugin est
qu'il est responsive. C’est-à-dire que la galerie va s'adapter en fonction de la taille de l'écran.
Pour se faire j'ai tout d'abord installer le plugin:

```
bower install nanogallery --save
```
Comme je l'ai mentionné plus haut, l'option --save permet de sauvegarder le plugin dans le fichier bower.json.

Bower a aussi rajouté la ligne permettant de lier le fichier JavaScript et le fichier CSS de nano gallery à
mon index.

Il m'a simplement suffit de créer un div dans mon index comme ceci:
```
<div id="diplome">
	<a href="cfc.jpg" data-ngthumb="cfcMiniature.jpg">CFC</a>
	<a href="mention.jpg" data-ngthumb="mentionMiniature.jpg">Mention</a>
	<a href="matu.jpg" data-ngthumb="matuMiniature.jpg">Matu</a>
</div>
```
C'est simplement une suite d'image insérée les unes après les autres, il faut simplement
ajouter "data-ngthumb" afin que la miniature des images s'affiche.
Il a aussi fallu que je rajoute ces quelques lignes à mon fichier main.js:
```
$("#diplome").nanoGallery({
        itemsBaseURL:'./images',
		paginationMaxLinesPerPage: 1,
		thumbnailWidth: 165,
        thumbnailHeight: 110,
  });
```

itemsBaseURL: permet de savoir où sont stockées les images.
paginationMaxLinesPerPage: permet de définir le nombre de ligne de la gallerie.
thumbnailWidth: permet de définir la largeur de la miniature.
thumbnailHeight: permet de définir la hauteur de la miniature.

J'ai ainsi pu mettre une galerie photo avec mes différents diplômes.

###Bug affichage police Nano Gallery

J'ai eu un petit problème avec la police d'affichage de nano Gallery.
En effet, lorsque mon site était en local (lancé avec grunt) il n'y avait pas de problème, les symboles utilisés
par nano gallery (flèches, bouton play, etc.) fonctionnaient parfaitement. Mais lorsque je "buildais" mon site,
grunt ne copiait pas la police utilisée par Nano Gallery.

J'ai donc dû manuellement rajouter les polices dans le dossier "dist/fonts" et modifier le chemin d'accès de la police
de nano gallery dans vendor.css (dist) (Il ne pointait pas à la bonne place).


Mon site est maintenant en ligne (visible sur internet), est en version 2.0 et toutes les fonctionnalités que j'ai voulu mettre fonctionnent parfaitement.


Dylan Montandon.