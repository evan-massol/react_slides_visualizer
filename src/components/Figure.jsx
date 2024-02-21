import classNames from "classnames";
import { textColors, textSizes } from "../css/textStyle";
import { bgColors } from "../css/backgroundStyle";

export default function Figure({text="", textSize="3", textAlign="center", textColor="black", 
                                src="public/react.svg", position="center", width, height, imageColor=""}){
                                  
  const figureContainerStyle = classNames(
                      'flex',
                      'flex-col',
                      {
                        'items-start': position === 'left',
                        'items-end': position === 'right',
                        'items-center': position === 'center'
                      },
                    );

  const imageStyle = classNames(`${bgColors[imageColor]}`)

  const textStyle = classNames(
                      `${textSizes[textSize]}
                      ${textColors[textColor]}
                      text-${textAlign}`
                    );

  return (
      <div className={figureContainerStyle}>
        <figure>
          <img src={src} className={imageStyle}/>
          <figcaption className={textStyle}>{text}</figcaption>
        </figure>
      </div>
  )
}