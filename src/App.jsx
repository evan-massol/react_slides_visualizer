import Slide from './Components/Slide.jsx';
import Navbar from './Navbar.jsx';


export default function App() {
  

  return (
    <>
			<div className="min-h-64 max-h-screen h-screen bg-gradient-to-t from-white to-black overflow-hidden">
				<Navbar />
        <Slide />
      </div>
    </>
  )
}

