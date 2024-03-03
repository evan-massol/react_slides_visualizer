# Slides visualizer - Evan MASSOL

Ce README explique comment créer, utiliser et visualiser sous forme d'une page HTML, un ensemble de slides (diaporama) fait en `React`.

> Outils utilisés:  
* `React`: code HTML et les composants
* `TailwindCSS`: styles des éléments
* `Vite`: Empaqueteur
* `npm`: gestionnaire de paquets/dépendances

### Initialisation du projet

Afin d'initialiser le projet dans le but de le visualiser en temps réel grâce au `Fast refresh` de `Vite`, quelques commandes doivent être lancées dans un terminal, après s'être placé dans le répertoire principal:
~~~bash
npm install #Installer les dépendances nécessaires
npm run dev #Visualiser en mode développement
~~~

### Création de vos propres slides

Pour créer vos propres slides, aller dans le fichier `SlideList.jsx`. Il contient une liste appelée `slides` dans laquelle vous allez placer vos propres Composants, parmi une liste variée (`Title`, `Text`, `Image`, `Code`...) se trouvant dans le répertoire `src/components`.

Ce fichier se présente ainsi:

~~~jsx
import Slide from "./components/Slide";
import Title from "./components/Title";
import Text from "./components/Text";
import Image from "./components/Image";
import Figure from "./components/Figure";
import Table from "./components/Table";
import NumberedList from "./components/NumberedList";
import BulletedList from "./components/BulletedList";
import SlideTwoColumns from "./components/SlideTwoColumns";
import Code from "./components/Code";
import Markdown from "./components/Markdown";
import CenteredSlide from "./components/CenteredSlide";

export const slides = [
	<CenteredSlide>
        <Title size="h1">
            Exemple de titre au centre
        </Title>
    </CenteredSlide>
];
~~~

Vous allez simplement pouvoir remplir cette liste avec des composants `Slide`, `CenteredSlide` ou `SlideTwoColumns` (qui agissent comme des conteneurs), dans lesquels vous allez pouvoir mettre d'autres composants en tant que `children` de ces derniers.  
Chaque slide sera séparée par une virgule obligatoirement.  
Plusieurs *`props`* sont disponibles pour chaque composant afin de personnaliser au maximum vos slides (voir les composants directement).  
Pour les images (composants `Image`, `Figure` et `Markdown`), elles doivent être placées dans le dossier `/public`.

### Déploiement

Pour déployer votre présentation, la commande à exécuter sera la suivante:
~~~bash
npm run build
~~~

Cela créera un dossier `dist` contenant toute l'application.