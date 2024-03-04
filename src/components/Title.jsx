import classNames from "classnames";
import { textColors, titleStyles } from "../css/textStyle.js";
import { bgColors } from "../css/backgroundStyle.js";
import { heightStyles } from "../css/textHeights.js";
import { marginTopStyles, marginLeftStyles, marginBottomStyles, marginRightStyles } from "../css/marginStyle.js";

//Ce composant permet d'écrire des titres dans les slides.
export default function Title({size="h1", color="black", position="center", 
                              height="top", backgroundColor="", 
                              marginTop="0", marginLeft="0", 
                              marginBottom="0", marginRight="0",children}){

  const containerStyle = classNames(`text-${position} sticky ${heightStyles[height]}`);

  const titleStyle = classNames(
                      `${titleStyles[size]}
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
  return(
    <div className={containerStyle}>
      <h1 className={titleStyle}>{children}</h1>
    </div>
  )
    
}