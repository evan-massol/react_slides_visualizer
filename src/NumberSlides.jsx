import { useState } from 'react'

export default function NumberSlides(){
	const [ isHidden, setIsHidden ] = useState(false)

	function handleClick(){
		setIsHidden(!isHidden);
	}

	return (
		<div className="absolute right-1 rounded-full text-white border-2">
		 	<button className="inline align-middle p-1" onClick={handleClick}>
				{isHidden ? "Show slide numbers" : "Hide slide numbers"}
			</button>
	 	</div>
	)
}