import { useContext } from "react"
import { PagesContext } from "../contexts/PagesContext"

export default function Slide({title, content, numPage}) {
	const { currentSlide, isHidden } = useContext(PagesContext);

	return (
		<>
			<h1 className="text-6xl">
				{title}
			</h1>
			<div className="text-center mt-3">
				{content}
			</div>

			{!isHidden && <div id="numPage" className="absolute bottom-0 right-0 p-4 text-base">{currentSlide}</div>}
		</>
	)
}