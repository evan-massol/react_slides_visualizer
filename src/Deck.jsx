import Slide from "./components/Slide";
import Title from "./components/Title";
import Text from "./components/Text";
import Image from "./components/Image";
import Table from "./components/Table";
import { PagesContext } from "./contexts/PagesContext";
import { useContext } from "react";
import Figure from "./components/Figure";

export const slides = [
	<Slide >
		<Title text="Titre de la slide 1" size="h1"/>
		<Text text="Voilà un premier texte" size="6" position="center" marginTop="96" marginBottom="2"/>
	</Slide>,

	<Slide>
		<Title text="Titre de la slide 2" size="h2"/>
		<Text text="Voilà un second texte" size="4" position="center" marginTop="2"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 3" size="h3"/>
		<Text text="Voilà un troisième texte" size="2" position="center" marginTop="2"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 4" size="h4"/>
		<Image src="src/img/amogus.png"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 5" size="h5"/>
		<Figure src="src/img/amogus.png" text="Exemple de figure" position="right"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 6" size="h3"/>
		<Table table={[["Ligne 1", "Contenu suivant", "blabblabla"],
						["Ligne 2", "Contenu numéro 2", "autre chose"]]}
						borderCellColor="green"/>
	</Slide>
]

export default function Deck(){
	const { currentSlide } = useContext(PagesContext);

	return (
		<div className="h-96 relative bg-white mt-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
			{slides[currentSlide-1]}
		</div>
	)
}