import classNames from "classnames";
import { PagesContext } from "../contexts/PageContext";
import { useContext } from "react";
import { slides } from "../SlideList";

export default function CenteredSlide({children}){
  const { state } = useContext(PagesContext)

  const centeredContainer = classNames(`flex items-center justify-center flex-col w-full h-full`);

  return (
    <>
      <div className={centeredContainer}>
        {children}
      </div>
      {!state.isHidden && <div id="numPage" className="absolute bottom-0 left-[48%] p-1 text-lg">{state.currentSlide}/{slides.length}</div>}
    </>
  );
}