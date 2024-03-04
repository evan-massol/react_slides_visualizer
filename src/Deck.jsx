import { slides } from "./SlideList";
import { PagesContext } from "./contexts/PageContext";
import { useContext } from "react";

//Ce composant gère l'affichage de la slide courante dans la page ainsi
//que le numéro de diapositive.
export default function Deck(){
	const { state } = useContext(PagesContext);

	return (
		<>
			<div className="h-96 relative bg-white mt-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
				{slides[state.currentSlide-1]}
			</div>
			{!state.isHidden && <div id="numPage" className="absolute bottom-2 left-[48%] p-1 text-lg">{state.currentSlide}/{slides.length}</div>}
		</>
		

	)
}