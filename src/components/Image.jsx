import classNames from "classnames";
import { bgColors } from "../css/backgroundStyle";

export default function Image({src="public/react.svg", width, height, color, position="center", imageColor=""}){
  const imageContainerStyle = classNames(
                      'flex',
                      'items-center',
                      {
                        'justify-start': position === 'left',
                        'justify-end': position === 'right',
                        'justify-center': position === 'center'
                      }
                     );

  const imageStyle = classNames(`${bgColors[imageColor]}`)

  return (
    <div className={imageContainerStyle}>
      <img src={src} className={imageStyle}/>
    </div>
  )
}