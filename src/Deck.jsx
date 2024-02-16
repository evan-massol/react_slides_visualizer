import Slide from "./components/Slide";
import Title from "./components/Title";
import Text from "./components/Text";
import { PagesContext } from "./contexts/PagesContext";
import { useContext } from "react";

export const slides = [
	<Slide >
		<Title text="Titre de la slide 1" size="5xl"/>
		<Text text="Voilà un premier texte" size="2xl" position="center" marginTop="2"/>
	</Slide>,

	<Slide>
		<Title text="Titre de la slide 2" size="4xl"/>
		<Text text="Voilà un second texte" size="lg" position="center" marginTop="2"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 3" size="2xl"/>
		<Text text="Voilà un troisième texte" size="base" position="center" marginTop="2"/>
	</Slide>,

	<Slide >
		<Title text="Titre de la slide 4" size="xl"/>
		<Text text="Voilà un quatrième texte" size="4xl" position="center" marginTop="2"/>
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