import classNames from "classnames";
import { bgColors } from "../css/backgroundStyle";
import { imageHeights } from "../css/imageHeights";

export default function Image({src="public/react.svg", position="center", imageColor="", height="center"}){
  
  const imageContainerStyle = classNames(
                      'flex',
                      'items-center',
                      {
                        'justify-start': position === 'left',
                        'justify-end': position === 'right',
                        'justify-center': position === 'center'
                      },
                      `sticky`,
                      `${imageHeights[height]}`
                     );

  const imageStyle = classNames(`${bgColors[imageColor]}`);

  return (
    <div className={imageContainerStyle}>
      <img src={src} className={imageStyle}/>
    </div>
  )
}