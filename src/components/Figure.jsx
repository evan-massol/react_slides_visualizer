import classNames from "classnames";
import { textColors, textSizes } from "../css/textStyle";

export default function Figure({text="", textSize="3", textAlign="center", textColor="black", 
                                src="public/react.svg", position="center", width, height, color}){
                                  
  const figureContainerStyle = classNames(
                      'flex',
                      'flex-col',
                      {
                        'items-start': position === 'left',
                        'items-end': position === 'right',
                        'items-center': position === 'center'
                      }
                    );

  const textStyle = classNames(
                      `${textSizes[textSize]}
                      ${textColors[textColor]}
                      text-${textAlign}`
                    );

  return (
      <div className={figureContainerStyle}>
        <figure>
          <img src={src}/>
          <figcaption className={textStyle}>{text}</figcaption>
        </figure>
      </div>
  )
}