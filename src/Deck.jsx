import { slides } from "./SlideList";
import { PagesContext } from "./contexts/PageContext";
import { useContext } from "react";

export default function Deck(){
	const { state } = useContext(PagesContext);

	return (
		<div className="h-96 relative bg-white mt-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
			{slides[state.currentSlide-1]}
		</div>
	)
}