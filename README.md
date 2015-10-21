##Les outils que j'ai utilis�s pour mener � bien ce travail sont:

* Notepad++ (cr�ation et �dition des fichiers html et css)
* Gimp 2 (traitement des images)
* Chrome, Firefox et Internet Explorer (tester mon site)
* bootstrap (afin de faire des pages html plus simplement gr�ce � l'utilisation du "grid"
* bootswatch (collection de th�me pour rendre son site plus joli facilement.)
* Yeoman:
	* Bower (c'est lui qui va g�rer toutes les d�pendances (JavaScript, css, images, etc.) lorsque l'on installe
			une nouvelle fonctionnalit� � notre site (smooth scroll p. ex.) c'est lui qui va ajouter dans notre
			index.html le chemin d'acc�s � la fonctionnalit� et faire en sorte que tout fonctionne. (bower install)
	* Grunt (c'est un task manager, c'est lui qui va faire le r�le de serveur web, mais pas que, il va par exemple
			faire en sorte que lorsqu'on modifie un fichier, la page va automatiquement �tre "rafraichie"
			ou lorsque plusieurs client se connecte au site, qu'il y ait une synchronisation de tous les clients.
			Mais le plus important. C�est lui qui va pouvoir g�n�rer un site web de distribution. il va pour cela
			faire des optimisations et faire en sorte que notre site web soit utilisable en distribution (dossier dist)
			il existe beaucoup de plugin � rajouter � grunt afin de rendre la cr�ation de site web le plus simple possible.)
	* Yo (c'est ce qui va faire le "squelette" de notre projet, il va cr�er le n�cessaire pour pouvoir commencer le d�veloppement.)
* node.js (c'est un moteur JavaScript (celui de Google chrome, V8), afin de pouvoir ex�cuter du JavaScript en dehors du navigateur)
* npm (c'est un package manager qui fonctionne avec node.js)
* jQuery (c'est une librairie JavaScript qui permet de faire du JavaScript plus facilement.)
* Git (afin de pouvoir faire du versionning et aussi de pouvoir mettre en ligne notre site web et qu'il soit accessible partout)

##Installation des outils:

Pour commencer, il faut t�l�charger et installer node.js depuis le site officiel (npm sera lui aussi install�)

Lorsque cela est fait, il faut installer yo, bower ainsi que grunt (expliqu� plus haut) en faisant cette commande:
```
npm install -g yo bower grunt-cli
```
(L�option -g permet d'installer les �l�ments globalement, ainsi on peut utilis� les outils pour tout les projets.)

il faut encore installer le generator yeoman (le "package" avec les fonctionnalit�s souhait�es):
```
npm install -g generator-webapp
```

##Cr�ation du projet:

Pour pouvoir cr�er un projet, il faut pour cela cr�er un nouveau dossier et se d�placer � l'int�rieur:
```
mkdir monCV //cr�ation dossier monCV
cd monCV //d�placement � l'int�rieur de celui-ci
```
pour cr�er v�ritablement le projet, il suffit maintenant d'ex�cuter cette commande:
```
yo webapp //yo permet de cr�er le squelette de notre site web.
```
il nous est demand� ce que l'on souhaite install� (bootstrap, sass, modernizr) nous n'allons utiliser que bootstrap,
il faut donc d�cocher les deux autres.


Une erreur est survenue lors de la cr�ation l'application, il a donc fallu que nous installions git ainsi que python.

Informations: pour voir les d�pendances de npm ou de bower, il suffit d'aller voir les fichiers "json",
respectivement package.json et bower.json

Maintenant que le squelette de notre site web est fait. nous pouvons ex�cuter cette commande:
```
grunt serve
```
Cela va permettre de lancer le task manager et ainsi, de pouvoir visualiser notre site web sur un navigateur (http://localhost:9000).

Installation d'un packages bower:

Maintenant que notre structure de site est faite, nous pouvons installer un packages bower afin d'am�liorer notre site
Nous allons installer bootswatch qui est un package permettant de mettre un th�me � notre site.
```
bower install bootswatch --save
```
Cela va installer proprement bootswatch, modifier les d�pendances et rajouter une ligne � notre index.html:
```
<link rel="stylesheet" href="bower_components/bootswatch/???/bootstrap.css" />
```
Il suffit maintenant de remplacer les "???" par un nom de th�me  afin que celui-ci soit pris en compte.

##Cr�ation du site web:

Pour cr�er mon site web, j'ai repris la structure du site que j'avais d�ja fait dans le devoir num�ro 1.
J�ai donc s�par� mon CV en plusieurs parties (informations personnelles, formations, exp�riences professionnelle, etc.)
J�ai en effet "converti" mon ancien site web en bootstrap, j'ai utilis� pour cela les titres (h1, h2, etc..), les tableaux, les progressbar et les classes d�finie
par bootstrap afin que mon site soit "reponsive" c'est a dire qu'il s'adapte � la taille de l'�cran.

Pour se faire, j'ai utilis� des classes "col-sm-x col-sm-offset-x" cela signifie que l'�l�ment qui poss�de ces classes va �tre small (cela siginifie qu'il faudra
beaucoup r�duire la fen�tre pour que les �l�ments se mettent � la ligne. Le premier "x" signifie la taille que va prendre l'�l�ment et le deuxi�me signifie le d�calage.
x allant de 0 � 12 en se basant sur le grid (le grid c'est simplement un "grillage" de la page web pour un totale de 12 "cellules") cela permet de placer des �l�ments facilement.

J�ai donc cr�� mon site web de cette fa�on, sans avoir � g�rer le CSS (c'est en effet bootstrap que le fait � notre place) et cela permet d'avoir
rapidement un site web fonctionnel en tr�s peu de lignes de code.

Je v�rifiais r�guli�rement si la mise en page de mon site me convenait.
Lorsque ceci fut termin�, j'ai appliqu� un th�me bootswatch � mon site afin qu'il soit plus beau visuellement. (superhero)

Ceci �tait la premi�re version de mon site (1.0.0), j'ai donc utilis� git pour pouvoir le stocker en ligne.

##Installation et utilisation de Git:

Mr. Fritsher nous a donn� le lien afin d'acc�der au git de la HEG, il a donc simplement fallu cr�er un compte afin de pouvoir rejoindre gitHub. (https://github.com/heg-web)

Pour installer git il faut aller sur le site de gitHub (https://desktop.github.com/) et installer gitHub desktop.
Une fois l'installation termin�, il faut ouvrir un git shell (il s'est install� en m�me temps que gitHub desktop)

Une fois le shell ouvert, il faut se placer dans le dossier ou se trouve le projet que vous souhaitez mettre en
ligne:
```
cd "C:\Users\dylan.montando\Documents\HEG\Projet web\Projet\monCV"
```
une fois � l'int�rieur du dossier, il faut cr�er un repository (l'�quivalent d'un dossier pour git) pour cela, il suffit
de lancer la commande suivante:

```
git init
```
le nom de la commande parle d'elle m�me, cela permet d'initialiser un repo vide.

il faut maintenant ajouter les fichiers souhait�s dans le repo vide:
```
git add . --all //le "." signifie que TOUT les fichiers sont ajout� repo local
```

Il faut maintenant valider les modifications (dans notre cas, l'ajout du projet au repo) (pas effectif sur le serveur)
```
git commit -m "first commit"

```
Les bonnes pratiques veulent que l'on mette un message pour chaque commit (par soucis de tra�abilit�, afin de 
savoir quelles sont les modifications effectu�es et pourquoi.

Afin de pouvoir mettre notre site web sur git, il faut dire � git o� d�poser les fichiers, il suffit de faire cette commande:
```
git remote add origin git@github.com:heg-web/moncv-dylanmontandon.git
```

ainsi, git sait o� il doit d�poser les fichiers (� savoir sur git@github.com:heg-web/moncv-dylanmontandon.git)
Pour que notre projet soit REELEMENT sur git, il faut ex�cuter cette commande:
```
git push origin master
```

Cela permet de r�ellement avoir notre projet sur git.

##Versionning

Afin de pouvoir sp�cifier � notre projet une version (1.0.0) il faut aller dans notre repo personnel
sur github (https://github.com/heg-web/moncv-dylanmontandon) puis dans "releases" > draft a new release
entrer le tag de version d�sir�e (1.0.0) comme target "master" il faut nommer la release puis "publish release"

Ainsi, le projet est en ligne sur gitHub et c'est la version 1.0.0!

##Cr�ation du site Web de distribution

Jusqu'� maintenant, nous avons cr�� un site web qui ne pouvait pas �tre mis en ligne (site de distribution)
Heureusement le task manager Grunt est capable de nous "g�n�rer" un site web pouvant �tre mise en ligne.
Pour se faire il fait des optimisations, transformation et il nous cr�er un dossier "dist" � la racine de notre projet, c'est dans ce dossier-L� que notre site optimis� et pr�t � �tre mis en ligne. 

Pour ce faire, il faut maintenant ex�cuter cette commande:
```
grunt build
```

C�est � ce moment que grunt fait le travail.

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

Le principe est le m�me, si ce n'est que nous allons cr�er une branche nomm�e gh-pages.
C�est l� que nous allons mettre notre site web.

Apr�s la fin du processus, lorsque l'on se rend sur la page:

https://heg-web.github.io/moncv-dylanmontandon/

Notre site est donc bien mis en ligne!

##Am�lioration Site web
####SmoothScroll
Maintenant que mon site est en ligne (version 1.0.0) j'ai d�cid� de rajouter un plugin jQuery � mon site web
afin que lorsque je fais un raccourci interne sur ma page web (jusqu'� la rubrique "formation" par exemple), la page descende de mani�re fluide. Pour cela, j'ai rajout� le plugin "smooth scroll" en ex�cutant
cette commande:

```
bower install jquery-smooth-scroll --save
```

Bower va installer le plugin et g�rer toutes les d�pendances
l'option --save permet de sauvegarder le plugin dans le fichier bower.json ("nanogallery": "~5.8.0"). Ainsi, lorsqu'une personne veux installer mon projet chez lui, bower va automatiquement
installer les plugins pr�sent dans le fichier bower.json.

Il va aussi rajouter dans notre index.html une ligne:

```
<script src="/bower_components/jquery-smooth-scroll/jquery.smooth-scroll.js"></script>
```

Cette ligne permet � notre site web d'utiliser le plugin (c'est un lien sur le script).

il suffit maintenant d'�diter le fichier "main.js" se trouvant dans le dossier "scripts" et d'y ins�rer ceci:
```
'use strict';
$('a').smoothScroll();
```

Le use strict signifie que l'on veut que notre fichier JavaScript s'ex�cute en mode stricte, c'est dire qu'il
n'acceptera pas certaine chose (suppression d'un �l�ment qui n'existe pas, utilisation d'une variable non d�clar�e.
Il affichera une erreur si tel est le cas.

La deuxi�me ligne veut dire que TOUS les �l�ments "a" vont utiliser la m�thode smoothScroll()
(c'est une m�thode du plugin que nous venons d'installer)

Maintenant il ne reste plus qu'� faire pointer notre balise <a> sur un �l�ment. Exemple:

<a href='#BasDeLePage'>O� je veux aller</a>
<h1 id='BasDeLePage'>l� ou mon lien va pointer</h1>

###FixedBlock

Maintenant que smoothscroll est install� et op�rationnel, j'ai d�cid� d'int�grer une sorte de menu �
c�t� de ma page qui ne bougerait pas lors du scroll, � l'int�rieur de celui-ci se trouverait les titres des
rubriques de mon site avec un lien sur ceux-ci (utilisation de smoothscroll).

Il m'a alors suffit de cr�er un div. J'ai ensuite fait du CSS afin de placer mon block o� je d�sirais qu'il soit
de sorte � ce qu'il ne bouge pas lors du "scroll" j'ai donc utilis� la propri�t� "position: fixed".

Malheureusement, lorsque je r�duisais la page, au bout d'un moment le block chevauchait le "corps" de mon site
de ma page web. J'ai donc d�cid� de faire en sorte que le block disparaisse lorsque la fen�tre avait une certaine taille. J'ai trouv� une fonction JavaScript me permettant de faire ceci:

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

Cette fonction va v�rifier si la fen�tre fait moins de 1200 pixels, si c'est le cas, elle fait dispara�tre mon block,
sinon, elle le fait appara�tre.

Il faut maintenant faire en sorte que cette fonction s'ex�cute � chaque fois que la page change de taille:
```
$(window).resize(function() {
        wResize();
    });
```

La fonction $(window).resize est une fonction JavaScript permettant d'ex�cuter du code � chaque changement
de taille de la page web.

J'ai d� r�soudre un autre probl�me. En effet, lorsque je rafraichissais la page lorsque celle-ci �tait inf�rieur � 1200 pixels,
le block s'affichait quand m�me. il m'a simplement fallu appeler ma fonction "wResize" en dehors de "resize" car comme son nom
l'indique, la fonction resize s'ex�cute � chaque fois que l'on redimensionne la fen�tre, mais lorsque nous arrivons pour la premi�re
fois sur le site (ou que l'on fait un F5), le code � l'int�rieur de la fonction resize ne s'ex�cute pas.

D�sormais mon site poss�de un block qui reste fixe en tout temps et qui disparait lorsque la page devient
trop petite.

###Nano Gallery

J'ai d�cid� de rajouter un plugin jQuery sur mon site web, nano gallery.

C'est un plugin permettant d'ins�rer une galerie photo tr�s facilement. L'avantage de ce plugin est
qu'il est responsive. C�est-�-dire que la galerie va s'adapter en fonction de la taille de l'�cran.
Pour se faire j'ai tout d'abord installer le plugin:

```
bower install nanogallery --save
```
Comme je l'ai mentionn� plus haut, l'option --save permet de sauvegarder le plugin dans le fichier bower.json.

Bower a aussi rajout� la ligne permettant de lier le fichier JavaScript et le fichier CSS de nano gallery �
mon index.

Il m'a simplement suffit de cr�er un div dans mon index comme ceci:
```
<div id="diplome">
	<a href="cfc.jpg" data-ngthumb="cfcMiniature.jpg">CFC</a>
	<a href="mention.jpg" data-ngthumb="mentionMiniature.jpg">Mention</a>
	<a href="matu.jpg" data-ngthumb="matuMiniature.jpg">Matu</a>
</div>
```
C'est simplement une suite d'image ins�r�e les unes apr�s les autres, il faut simplement
ajouter "data-ngthumb" afin que la miniature des images s'affiche.
Il a aussi fallu que je rajoute ces quelques lignes � mon fichier main.js:
```
$("#diplome").nanoGallery({
        itemsBaseURL:'./images',
		paginationMaxLinesPerPage: 1,
		thumbnailWidth: 165,
        thumbnailHeight: 110,
  });
```

itemsBaseURL: permet de savoir o� sont stock�es les images.
paginationMaxLinesPerPage: permet de d�finir le nombre de ligne de la gallerie.
thumbnailWidth: permet de d�finir la largeur de la miniature.
thumbnailHeight: permet de d�finir la hauteur de la miniature.

J'ai ainsi pu mettre une galerie photo avec mes diff�rents dipl�mes.

###Bug affichage police Nano Gallery

J'ai eu un petit probl�me avec la police d'affichage de nano Gallery.
En effet, lorsque mon site �tait en local (lanc� avec grunt) il n'y avait pas de probl�me, les symboles utilis�s
par nano gallery (fl�ches, bouton play, etc.) fonctionnaient parfaitement. Mais lorsque je "buildais" mon site,
grunt ne copiait pas la police utilis�e par Nano Gallery.

J'ai donc d� manuellement rajouter les polices dans le dossier "dist/fonts" et modifier le chemin d'acc�s de la police
de nano gallery dans vendor.css (dist) (Il ne pointait pas � la bonne place).


Mon site est maintenant en ligne (visible sur internet), est en version 2.0 et toutes les fonctionnalit�s que j'ai voulu mettre fonctionnent parfaitement.


Dylan Montandon.