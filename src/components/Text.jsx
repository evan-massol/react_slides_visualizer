import classNames from "classnames";
import { textColors, textSizes } from "../css/textStyle.js";


export default function Text({text="Placeholder text", size="3", color="black", position="left"}){
  const textStyle = classNames(
                    `${textSizes[size]}
                    ${textColors[color]}
                    text-${position}
                    w-auto 
                    break-words 
                    hyphens-auto`);

  return <p className={textStyle}>{text}</p>
  
}