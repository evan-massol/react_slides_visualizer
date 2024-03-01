import React, { useContext } from "react"
import { PagesContext } from "../contexts/PageContext"
import { slides } from "../SlideList";
import Text from "./Text";
import classNames from "classnames";

export default function SlideTwoColumns({children}) {
	const { state } = useContext(PagesContext);
  const leftColumnContent = [];
  const rightColumnContent = [];

  children.map((child, index) => {
    const { id } = child.props;
    
    switch(id){
      case "1":
        //cloneElement permet d'attribuer une clé unique à chaque child renseigné dans le deck
        leftColumnContent.push(React.cloneElement(child, { key: `${index}` }));
        break;
      case "2":
        rightColumnContent.push(React.cloneElement(child, { key: `${index}` }));
        break;
      default:
        leftColumnContent.push(<Text key={`${index}`} position="center">Please use the attribute id='1' or id='2' in each children of 'SlideTwoColumns' to add the content into the first column or the second one.</Text>)
        break;
    }
  });

  const columnStyle1 = classNames(`inline-block w-1/2 pb-16 h-full pl-1 absolute left-0`);

  const columnStyle2 = classNames(`inline-block w-1/2 pb-16 h-full pr-1 absolute right-0`);

	return (
		<>
      <div className={columnStyle1}>
        {leftColumnContent}
      </div>
      <div className={columnStyle2}>
        {rightColumnContent}
      </div>
			{!state.isHidden && <div id="numPage" className="absolute bottom-0 left-[48%] p-1 text-lg">{state.currentSlide}/{slides.length}</div>}
		</>
	);
}