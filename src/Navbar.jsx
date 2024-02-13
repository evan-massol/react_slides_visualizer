import { useState } from 'react'
import NumberSlides from './NumberSlides';

export default function Navbar(){
	const [ currentSlide, setCurrentSlide ] = useState(1);

	function handleFirstSlide(){
		setCurrentSlide(1);
	}

	function handlePreviousSlide(){
		if(currentSlide > 1)
			setCurrentSlide(currentSlide - 1)
	}

	function handleNextSlide(){
		if(currentSlide < 10)
			setCurrentSlide(currentSlide + 1);
	}

	function handleLastSlide(){
			setCurrentSlide(10) //TODO: Variable to calculate the maximum of slides
	}

	return (
		<>
			<div className="flex justify-center font-normal border-2 rounded-xl py-2">
				<button className="pr-2 pl-2 bg-neutral-500 rounded-l-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white" onClick={handleFirstSlide}>
					&laquo;
				</button>
				<button className="pr-2 pl-2 bg-neutral-500 p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white" onClick={handlePreviousSlide}>
					&lsaquo;
				</button>
				<div className="pr-2 pl-2 bg-neutral-500 p-1 text-sm">
					<p className="inline align-middle text-lg">
						Slide {currentSlide}
					</p>
				</div>
				<button className="pl-2 pr-2 bg-neutral-500 p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white" onClick={handleNextSlide}>
					&rsaquo;
				</button>
				<button className="pl-2 pr-3 bg-neutral-500 rounded-r-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white" onClick={handleLastSlide}>
					&raquo;
				</button>

				<NumberSlides />
			</div>
		</>
	)
}