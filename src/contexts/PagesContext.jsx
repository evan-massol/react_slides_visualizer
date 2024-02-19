import { createContext, useEffect, useState } from "react";
import { slides } from "../Deck";;

export const PagesContext = createContext(null);

export function PagesProvider({children}){
	const [ currentSlide, setCurrentSlide ] = useState(1);
	const [ isHidden, setIsHidden ] = useState(false);

	function handlePreviousSlide(){
		if(currentSlide > 1)
			setCurrentSlide(currentSlide - 1)
	}

	function handleNextSlide(){
		if(currentSlide < slides.length)
			setCurrentSlide(currentSlide + 1);
	}

	const handleCurrentSlide = (event) => {
	  const value = parseInt(event.target.value);
      if (!isNaN(value)) {
        if (value > slides.length)
          setCurrentSlide(slides.length);
        else if (value < 1)
        	setCurrentSlide(1);
        else
          setCurrentSlide(value);
		}
	}

	useEffect(() =>{
		function handleKey(event){
			switch(event.key){
				case "ArrowLeft":
					handlePreviousSlide();
					break;
				case "ArrowRight":
					handleNextSlide();
					break;
				case " ":
					handleNextSlide();
					break;
				default:
					break;
			}
		}

		document.addEventListener("keydown", handleKey);

		return () => {
			document.removeEventListener("keydown", handleKey);
		}

	}, [handlePreviousSlide, handleNextSlide]);

	const firstSlide = () => setCurrentSlide(1);
	const previousSlide = () => handlePreviousSlide();
	const nextSlide = () => handleNextSlide();
	const lastSlide = () => setCurrentSlide(slides.length);
	const changeDisplayNumberSlide = () => setIsHidden(!isHidden);

	return(
		<PagesContext.Provider
			value={{currentSlide, isHidden, firstSlide, previousSlide,
			handleCurrentSlide, nextSlide, lastSlide, changeDisplayNumberSlide}}>
			<div className="font-sans min-w-64 max-h-screen h-screen bg-gradient-to-t from-white to-black overflow-hidden">
				{children}
			</div>
		</PagesContext.Provider>
	)
}
