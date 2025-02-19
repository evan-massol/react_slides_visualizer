import { useEffect, useReducer } from "react";
import reducer from "../reducers/PagesReducer";
import { PagesContext } from "./PageContext";

const initialState = {
	currentSlide: 1,
	isHidden: false
};

export function PagesProvider({children}){
	const [ state, dispatch ] = useReducer(reducer, initialState);

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
