import Slide from "./components/Slide";


export const slides = [
	<Slide key={1} title="Titre 1" text="Texte 1">

	</Slide>,
	<Slide key={2} title="Titre 2" text="Texte 2">

	</Slide>,
	<Slide key={3} title="Titre 3" text="Texte 3">

	</Slide>,
	<Slide key={4} title="Titre 4" text="Texte 4">

	</Slide>
];

export default function Deck({children}){

	return (
		<div className="deck relative bg-white text-center mt-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
			{children}
		</div>
	)
}