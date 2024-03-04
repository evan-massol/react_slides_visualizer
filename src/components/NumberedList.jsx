import classNames from "classnames";
import { textSizes } from "../css/textStyle";
import { textColors } from "../css/textStyle";
import { marginBottomStyles, marginLeftStyles, marginRightStyles, marginTopStyles } from "../css/marginStyle";

//Ce composant permet de créer une liste numérotée dans les slides.
export default function NumberedList({elements=["Premier", "Deuxième", "Troisième"],
                                        size="3", color="black", position="left",
																				marginTop="0", marginLeft="0", 
																				marginBottom="0", marginRight="0"}){
    
	const numbersStyle = classNames(`list-decimal list-inside
																	${marginTopStyles[marginTop]}
																	${marginLeftStyles[marginLeft]}
																	${marginBottomStyles[marginBottom]}
																	${marginRightStyles[marginRight]}`)
	
	const listStyle = classNames(`${textSizes[size]}
																${textColors[color]}
																text-${position}
																w-auto
																break-words
																hyphens-auto
																`);
	
	const list = elements.map((element, index) =>
		<li className={listStyle} key={index}>{element}</li>
	) ;

	return (
		<ol className={numbersStyle}>
				{list}
		</ol>
	)
}