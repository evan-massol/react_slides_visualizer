
export default function Slide({title, content, numPage}) {

	return (
		<>
			<div className="relative bg-white text-center h-5/6 m-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
				<h1 className="text-6xl">{title}</h1>

			<div id="numPage" className="absolute bottom-0 right-0 p-4">{numPage}</div>
			</div>
		</>
	)
}