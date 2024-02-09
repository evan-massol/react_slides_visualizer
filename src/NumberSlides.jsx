export default function NumberSlides(){
	const isHidden = false;

	return (
		isHidden ?
		 "" :
		 <div className="absolute right-1 rounded-full text-white border-2">
		 <p className="inline align-middle p-1">100</p>
	 </div>
	)
}