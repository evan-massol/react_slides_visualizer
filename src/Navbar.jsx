import { useContext } from "react";
import { PagesContext } from "./contexts/PagesContext.jsx";

export default function Navbar(){
	const { currentSlide, isHidden, firstSlide, previousSlide, nextSlide, 
		lastSlide, changeDisplayNumberSlide, handleCurrentSlide } = useContext(PagesContext);
	
	return (
		<>
			<div className="absolute left-3 top-2">
				<button>
					<img className="size-10 bg-white rounded-md" src="/list.svg"/>
				</button>
			</div>
			<div className="flex justify-center font-normal border-2 rounded-xl py-2">
				<button className="pr-2 pl-3 bg-neutral-500 rounded-l-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white"
					onClick={firstSlide}>
					&laquo;
				</button>

				<button className="pr-2 pl-2 bg-neutral-500 p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white" 
					onClick={previousSlide}>
					&lsaquo;
				</button>

				<div className="pr-1 pl-1 bg-neutral-500 text-sm">
					<input type="number"
						inputMode="numeric"
						value={currentSlide}
						className="inline-block text-center rounded bg-neutral-500 hover:bg-neutral-600 transition ease
							w-10 py-1 align-middle m-0 text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
						[&::-webkit-inner-spin-button]:appearance-none outline-none" 
						onChange={(e) => handleCurrentSlide(e)}
					/>
				</div>

				<button className="pl-2 pr-2 bg-neutral-500 p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white"
					onClick={nextSlide}>
					&rsaquo;
				</button>

				<button className="pl-2 pr-3 bg-neutral-500 rounded-r-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white"
					onClick={lastSlide}>
					&raquo;
				</button>

				<div className="absolute right-1 top-2.5 rounded-full text-white border-2">
					<button className="inline align-middle p-1" onClick={changeDisplayNumberSlide}>
					{
						isHidden ? 
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