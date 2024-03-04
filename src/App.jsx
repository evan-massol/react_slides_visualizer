import Navbar from './Navbar.jsx';
import Deck from './Deck.jsx'
import { PagesProvider } from './contexts/PagesProvider.jsx';

//La racine de la page, le Deck et la Navbar sont dans un Provider.
export default function App() {

  return (
    <PagesProvider>
      <Navbar/>
      <Deck />
    </PagesProvider>
  );
}

