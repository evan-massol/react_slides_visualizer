import { createContext, useState } from "react";

export const PagesContext = createContext(null);

export function PagesProvider({children}){
	const [ currentSlide, setCurrentSlide ] = useState(1);
	const [ isHidden, setIsHidden ] = useState(false);

	function handlePreviousSlide(){
		if(currentSlide > 1)
			setCurrentSlide(currentSlide - 1)
	}

	function handleNextSlide(){
		if(currentSlide < 10)
			setCurrentSlide(currentSlide + 1);
	}

	const handleCurrentSlide = (event) => {
	  const value = parseInt(event.target.value);
      if (!isNaN(value)) {
        if (value > 10)
          setCurrentSlide(10);
        else if (value < 1)
        	setCurrentSlide(1);
        else
          setCurrentSlide(value);
		}
	}

	const firstSlide = () => setCurrentSlide(1);
	const previousSlide = () => handlePreviousSlide();
	const nextSlide = () => handleNextSlide();
	const lastSlide = () => setCurrentSlide(10);
	const changeDisplayNumberSlide = () => setIsHidden(!isHidden);

	return(
		<PagesContext.Provider
			value={{currentSlide, isHidden, firstSlide, previousSlide,
			handleCurrentSlide, nextSlide, lastSlide, changeDisplayNumberSlide}}>
			<div className="min-w-64 max-h-screen h-screen bg-gradient-to-t from-white to-black overflow-hidden">
				{children}
			</div>
		</PagesContext.Provider>
	)
}
