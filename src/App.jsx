import Slide from './components/Slide.jsx';
import Navbar from './Navbar.jsx';
import Deck from './Deck.jsx'
import { PagesProvider } from './contexts/PagesContext.jsx';

export default function App() {

  return (
    <PagesProvider>
      <Navbar/>
      <Deck />
    </PagesProvider>
    
  )
}

