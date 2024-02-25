import { createContext, useEffect, useReducer } from "react";
import { slides } from "../Deck";
import reducer from "../reducers/PagesReducer";

export const PagesContext = createContext(null);

const initialState = {
	currentSlide: 1,
	isHidden: false
};

export function PagesProvider({children}){
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const handleCurrentSlide = (event) => {
	 	const value = parseInt(event.target.value);
      if (!isNaN(value)) {
        dispatch({type: "handleSlide", slideNumber: value});
		}
	}

	useEffect(() =>{
		function handleKey(event){
			switch(event.key){
				case "ArrowLeft":
					dispatch({type : "previousSlide"});
					break;

				case "ArrowRight":
					dispatch({type : "nextSlide"});
					break;
				case " ":
					dispatch({type : "nextSlide"});
					break;

				default:
					break;
			}
		}

		document.addEventListener("keydown", handleKey);

		return () => {
			document.removeEventListener("keydown", handleKey);
		}

	});

	return(
		<PagesContext.Provider
			value={{ state,
							 dispatch
							 }}>
			<div className="font-sans min-w-64 max-h-screen h-screen bg-gradient-to-t from-white to-black overflow-hidden">
				{children}
			</div>
		</PagesContext.Provider>
	)
}
