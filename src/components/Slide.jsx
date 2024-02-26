import { useContext } from "react"
import { PagesContext } from "../contexts/PageContext";
import { slides } from "../Deck";

export default function Slide({children}) {
	const { state } = useContext(PagesContext);

	return (
		<>
			{children}
			{!state.isHidden && <div id="numPage" className="absolute bottom-0 right-0 p-4 text-lg">{state.currentSlide}/{slides.length}</div>}
		</>
	)
}