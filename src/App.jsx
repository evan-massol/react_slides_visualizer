import Slide from './components/Slide.jsx';
import Navbar from './Navbar.jsx';
import Deck from './Deck.jsx'
import { SlideProvider } from './contexts/SlideContext.jsx';

export default function App() {

  return (
    <SlideProvider>
        <Navbar/>
        <Deck >
          <Slide title="Titre" content="Texte"/>
        </Deck> 
    </SlideProvider>
    
  )
}

