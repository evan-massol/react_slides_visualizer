import { useContext } from "react"
import { PagesContext } from "../contexts/PagesContext"

export default function Slide({children}) {
	const { currentSlide, isHidden, maxSlide } = useContext(PagesContext);

	return (
		<>
			{children}
			{!isHidden && <div id="numPage" className="absolute bottom-0 right-0 p-4 text-lg">{currentSlide}/{maxSlide}</div>}
		</>
	)
}