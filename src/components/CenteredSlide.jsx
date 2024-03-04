import classNames from "classnames";
import { PagesContext } from "../contexts/PageContext";
import { useContext } from "react";

export default function CenteredSlide({children}){
  const { state } = useContext(PagesContext)

  const centeredContainer = classNames(`flex items-center justify-center flex-col w-full h-full`);

  return (
    <>
      <div className={centeredContainer}>
        {children}
      </div>
    </>
  );
}