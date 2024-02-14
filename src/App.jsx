import Slide from './components/Slide.jsx';
import Navbar from './Navbar.jsx';
import NumberSlides from './NumberSlides.jsx'
import Deck from './Deck.jsx'
import { useState } from 'react';

export default function App() {
  const [ currentSlide, setCurrentSlide ] = useState(1);

  return (
    <div className="min-h-64 max-h-screen h-screen bg-gradient-to-t from-white to-black overflow-hidden">
      <Navbar currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
        <NumberSlides />
      </Navbar>
      <Deck>
        <Slide title="Titre" numPage={currentSlide}/>
      </Deck> 
    </div>
  )
}

