import classNames from "classnames";
import { textColors, titleStyles } from "../css/textStyle.js";
import { heightStyles } from "../css/textHeights.js";

export default function Title({text="Placeholder text", size="h1", 
                               color="black", position="center", height="top"}){

  const titleStyle = classNames(
                      `${titleStyles[size]}
                      ${textColors[color]}
                      text-${position}
                      w-auto
                      break-words
                      hyphens-auto
                      relative
                      ${heightStyles[height]}`
                    );

  return(
    <div className={titleStyle}>
      <h1>{text}</h1>
    </div>
  )
    
}