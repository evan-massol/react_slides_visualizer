import Navbar from './Navbar.jsx';
import Deck from './Deck.jsx'
import { PagesProvider } from './contexts/PagesProvider.jsx';

export default function App() {

  return (
    <PagesProvider>
      <Navbar/>
      <Deck />
    </PagesProvider>
    
  )
}

