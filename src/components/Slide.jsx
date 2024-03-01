import { useContext } from "react"
import { PagesContext } from "../contexts/PageContext";
import { slides } from "../SlideList";

export default function Slide({children}) {
	const { state } = useContext(PagesContext);

	return (
		<>
			{children}
			{!state.isHidden && <div id="numPage" className="absolute bottom-0 left-[48%] p-1 text-lg">{state.currentSlide}/{slides.length}</div>}
		</>
	)
}