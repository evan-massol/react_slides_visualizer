import classNames from "classnames";
import { textColors, textSizes } from "../css/textStyle.js";
import { bgColors } from "../css/backgroundStyle.js";
import { heightStyles } from "../css/textHeights.js";
import { marginTopStyles, marginBottomStyles, marginLeftStyles, marginRightStyles } from "../css/marginStyle.js";


export default function Text({size="3", color="black", position="left",
                              height="top", backgroundColor="", 
                              marginTop="auto", marginLeft="auto", 
                              marginBottom="auto", marginRight="auto", children}){
  
  const containerStyle = classNames(`text-${position} sticky ${heightStyles[height]}`);

  const textStyle = classNames(
                    `${textSizes[size]}
                    ${textColors[color]}
                    inline-block
                    w-auto 
                    break-words 
                    hyphens-auto
                    px-1
                    ${bgColors[backgroundColor]}
                    ${marginTopStyles[marginTop]}
                    ${marginLeftStyles[marginLeft]}
                    ${marginBottomStyles[marginBottom]}
                    ${marginRightStyles[marginRight]}
                    `);

  return (
    <div className={containerStyle}>
      <p className={textStyle}>{children}</p>
    </div>
    
  ) 
  
}