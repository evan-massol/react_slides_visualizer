import classNames from "classnames";
import { bgColors } from "../css/backgroundStyle";
import { imageHeights } from "../css/imageHeights";

//Ce composant permet de créer des images dans les slides.
export default function Image({src="public/react.svg", position="center", imageColor="", 
                              height="center", imageWidth=null}){
  
  const imageContainerStyle = classNames(
                      'flex',
                      'items-center',
                      {
                        'justify-start': position === 'left',
                        'justify-end': position === 'right',
                        'justify-center': position === 'center',
                      },
                      `sticky`,
                      `${imageHeights[height]}`
                     );

  const imageStyle = classNames(`${bgColors[imageColor]}`);

  return (
    <span className={imageContainerStyle}>
      <img src={src} className={imageStyle} 
            width={imageWidth !== null ? imageWidth : null}/>
    </span>
  )
}