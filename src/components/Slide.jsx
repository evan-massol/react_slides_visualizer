import { useState } from "react";

export default function Slide({title, content, numPage}) {
	const [ isHidden, setIsHidden ] = useState(false);

	function handleClick(){
		setIsHidden(!isHidden);
	}

	return (
		<>
			<div className="absolute right-1 top-2.5 rounded-full text-white border-2">
		 		<button className="inline align-middle p-1" onClick={handleClick}>
				{
					isHidden ? 
					"Show slide numbers" 
					: 
					"Hide slide numbers"
					}
				</button>
	 		</div>
			<div className="relative bg-white text-center h-5/6 m-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
				<h1 className="text-6xl">{title}</h1>

				{!isHidden && <div id="numPage" className="absolute bottom-0 right-0 p-4">{numPage}</div>}
			</div>
		</>
	)
}