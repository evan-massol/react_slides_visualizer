import { slides } from "../Deck";

export default function reducer(state, action){
	switch(action.type){
		case "firstSlide":
			return {
				...state,
				currentSlide: 1
			};
		
		case "previousSlide":
			return {
				...state,
				currentSlide: (state.currentSlide > 1 ? state.currentSlide - 1 : state.currentSlide)
			};

		case "handleSlide":
			return {
				...state,
				currentSlide: (action.slideNumber > 0 && 
											 action.slideNumber <= slides.length 
											 ? action.slideNumber : state.currentSlide)
			};

		case "nextSlide":
			return {
				...state,
				currentSlide: (state.currentSlide < slides.length ? state.currentSlide + 1 : state.currentSlide)
			};

		case "lastSlide":
			return {
				...state,
				currentSlide : slides.length
			};

		case "toggleHidden":
			return {
				...state,
				isHidden: !state.isHidden
			};

		default:
			return state;
	}
}