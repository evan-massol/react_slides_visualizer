import classNames from "classnames";
import { textColors, textSizes } from "../css/textStyle";
import { bgColors } from "../css/backgroundStyle";
import { imageHeights } from "../css/imageHeights";

export default function Figure({text="", textSize="3", textAlign="center", textColor="black", 
                                src="public/react.svg", position="center", imageColor="",
                                height="center", alt="Texte alternatif", imageWidth=null}){
                                  
  const figureContainerStyle = classNames(
                      'flex',
                      'flex-col',
                      {
                        'items-start': position === 'left',
                        'items-end': position === 'right',
                        'items-center': position === 'center'
                      },
                      `sticky`,
                      `${imageHeights[height]}`
                    );

  const imageStyle = classNames(`${bgColors[imageColor]} text-center`)

  const textStyle = classNames(
                      `${textSizes[textSize]}
                      ${textColors[textColor]}
                      text-${textAlign}`
                    );

  return (
      <div className={figureContainerStyle}>
        <figure>
          <img src={src} className={imageStyle} alt={alt}
                width={imageWidth !== null ? imageWidth : null}/>
          <figcaption className={textStyle}>{text}</figcaption>
        </figure>
      </div>
  )
}