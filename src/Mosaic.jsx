import { useContext } from "react";
import { PagesContext } from "./contexts/PageContext";
import { slides } from "./SlideList";

//Ce composant gère l'affichage de la mosaïque dans l'application.
//Cette dernière contient les numéros de slides et l'utilisateur peut cliquer
//dessus pour changer de diapositive.
export default function Mosaic({displayed}){
  const { state, dispatch } = useContext(PagesContext);

  const handleThumbnailClick = (index) => {
      dispatch({type: 'handleSlide', slideNumber: index + 1})
  };

  return (
    <div className={`absolute left-0 top-14 max-h-[93%] z-40 bg-gray-200 bg-opacity-50 overflow-y-auto
                    px-1 mb-0 w-44 rounded-md transition duration-300 ${displayed ? 'translate-x-0' : '-translate-x-full'}`}>
      {slides.map((slide, index) => (
          <div key={index} className={`hover:bg-gray-400 hover:bg-opacity-50 hover:scale-105hover:duration-150
                                      duration-150 p-0.5 my-1 cursor-pointer ${index + 1 === state.currentSlide ?
                                      'border-2 rounded border-gray-600' : 'border-none' }`} onClick={() => handleThumbnailClick(index)}>
              <p className="h-24 rounded-md flex justify-center items-center font-semibold">Slide {index + 1}</p>
          </div>
      ))}
    </div>
  );
}