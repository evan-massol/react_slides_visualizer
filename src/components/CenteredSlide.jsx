import classNames from "classnames";

//Ce composant conteneur permet de centrer tout le contenu
//horizontalement et verticalement.
export default function CenteredSlide({children}){

  const centeredContainer = classNames(`flex items-center justify-center flex-col w-full h-full`);

  return (
    <>
      <div className={centeredContainer}>
        {children}
      </div>
    </>
  );
}