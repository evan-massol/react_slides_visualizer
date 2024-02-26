import Slide from "./components/Slide";
import Title from "./components/Title";
import Text from "./components/Text";
import Image from "./components/Image";
import Figure from "./components/Figure";
import Table from "./components/Table";
import NumberedList from "./components/NumberedList";
import BulletedList from "./components/BulletedList";
import SlideTwoColumns from "./components/SlideTwoColumns";
import { PagesContext } from "./contexts/PageContext";
import { useContext } from "react";


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
		<Image src="/amogus.png"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 5" size="h5"/>
		<Figure src="/amogus.png" text="Exemple de figure" position="right"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 6" size="h3"/>
		<Table table={[["Ligne 1", "Contenu suivant", "blabblabla"],
						["Ligne 2", "Contenu numéro 2", "autre chose"]]}
						borderCellColor="green"/>
	</Slide>,
	
	<Slide >
		<Title text="Titre de la slide 7" size="h5"/>
		<NumberedList elements={["Première puce", 
								 "Deuxième puce", 
								 "Troisième puce"]} color="cyan" position="center" size="5"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 8" size="h5"/>
		<BulletedList elements={["Première puce", 
							 "Deuxième puce", 
							 "Troisième puce"]} color="cyan" position="center" size="5"/>
	</Slide>,

	<SlideTwoColumns>
		<Title id="1" text="Titre de la slide 3" size="h3"/>
		<Text id="2" text="Voilà un troisième texte" size="2" position="center" marginTop="2"/>
	</SlideTwoColumns>,
]

export default function Deck(){
	const { state } = useContext(PagesContext);

	return (
		<div className="h-96 relative bg-white mt-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
			{slides[state.currentSlide-1]}
		</div>
	)
}