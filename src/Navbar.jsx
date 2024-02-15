export default function Navbar({currentSlide, setCurrentSlide, children}){
	

	function handlePreviousSlide(){
		if(currentSlide > 1)
			setCurrentSlide(currentSlide - 1)
	}

	function handleNextSlide(){
		if(currentSlide < 10)
			setCurrentSlide(currentSlide + 1);
	}

	function handleCurrentSlide(event){
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

	return (
		<>
			<div className="absolute left-3 top-2">
				<button >
					<img className="size-10 bg-white rounded-md" src="./public/list.svg"/>
				</button>
			</div>
			<div className="flex justify-center font-normal border-2 rounded-xl py-2">
				<button className="pr-2 pl-3 bg-neutral-500 rounded-l-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white"
				onClick={() => setCurrentSlide(1)}>
					&laquo;
				</button>
				<button className="pr-2 pl-2 bg-neutral-500 p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white" 
					onClick={handlePreviousSlide}>
					&lsaquo;
				</button>
				<div className="pr-1 pl-1 bg-neutral-500 text-sm">
					<input type="number"
					inputMode="numeric"
					value={currentSlide}
					className="inline-block text-center rounded bg-neutral-500 hover:bg-neutral-600 transition ease
				    w-10 py-1 align-middle m-0 text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
					[&::-webkit-inner-spin-button]:appearance-none outline-none" 
					onChange={handleCurrentSlide}/>
				</div>
				<button className="pl-2 pr-2 bg-neutral-500 p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white"
				onClick={handleNextSlide}>
					&rsaquo;
				</button>
				<button className="pl-2 pr-3 bg-neutral-500 rounded-r-lg p-0.5 text-2xl transition ease-in-out hover:bg-neutral-600 hover:text-white"
				onClick={() => setCurrentSlide(10)}>
					&raquo;
				</button>

				{children}
			</div>
		</>
	)
}