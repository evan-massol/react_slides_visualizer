import { useContext } from "react"
import { PagesContext } from "../contexts/PageContext";
import { slides } from "../SlideList";

export default function Slide({children}) {
	const { state } = useContext(PagesContext);

	return (
		<div className="h-full">
			{children}
		</div>
	);
}