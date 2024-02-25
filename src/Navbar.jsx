import { useContext } from "react";
import { PagesContext } from "./contexts/PagesContext.jsx";

export default function Navbar(){
	const { state, dispatch } = useContext(PagesContext);
	
	const handleFirstSlide = () => {
        dispatch({ type: "firstSlide" });
    };

    const handlePreviousSlide = () => {
        dispatch({ type: "previousSlide" });
    };

    const handleNextSlide = () => {
        dispatch({ type: "nextSlide" });
    };

    const handleLastSlide = () => {
        dispatch({ type: "lastSlide" });
    };

    const changeDisplayNumberSlide = () => {
        dispatch({ type: "toggleHidden" });
    };
    
    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            dispatch({ type: "handleSlide", slideNumber: value });
        }
    };

	return (
		<>
			<div className="absolute left-3 top-2">
				<button>
					<img className="size-10 bg-white rounded-md" src="/list.svg"/>
				</button>
			</div>
			<div className="flex justify-center font-normal border-2 rounded-xl py-2">
				<button className="pr-2 pl-3 bg-white rounded-l-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-500 hover:text-white"
					onClick={handleFirstSlide}>
					&laquo;
				</button>

				<button className="pr-2 pl-2 bg-white p-0.5 text-2xl transition ease-in-out hover:bg-neutral-500 hover:text-white" 
					onClick={handlePreviousSlide}>
					&lsaquo;
				</button>

				<div className="pr-1 pl-1 bg-white text-sm">
					<input type="number"
						inputMode="numeric"
						value={state.currentSlide}
						className="inline-block text-center rounded selection:text-white selection:bg-black  bg-white hover:bg-neutral-500 transition ease
							w-10 py-1 align-middle m-0 text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
						[&::-webkit-inner-spin-button]:appearance-none outline-none" 
						onChange={handleInputChange}
					/>
				</div>

				<button className="pl-2 pr-2 bg-white p-0.5 text-2xl transition ease-in-out hover:bg-neutral-500 hover:text-white"
					onClick={handleNextSlide}>
					&rsaquo;
				</button>

				<button className="pl-2 pr-3 bg-white rounded-r-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-500 hover:text-white"
					onClick={handleLastSlide}>
					&raquo;
				</button>

				<div className="absolute right-1 top-2.5 rounded-full text-white border-2">
					<button className="inline align-middle p-1" onClick={changeDisplayNumberSlide}>
					{
						state.isHidden ? 
						<i className="bi bi-eye-slash-fill p-1 not-italic text-lg"> : Number Slides</i>
						: 
						<i className="bi bi-eye-fill p-1 not-italic text-lg"> : Number Slides</i>
						}
					</button>
	 			</div>
			</div>
		</>	
	)
}