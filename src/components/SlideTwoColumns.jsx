import React from "react"
import Text from "./Text";
import classNames from "classnames";

export default function SlideTwoColumns({children}) {
  const leftColumnContent = [];
  const rightColumnContent = [];

  //S'il n'y a qu'un seul enfant dans le composant SlideTwoColumns
  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    const { id } = child.props;
    switch(id){
      case "1":
        //cloneElement permet d'attribuer une clé unique à chaque child renseigné dans le deck
        leftColumnContent.push(React.cloneElement(child, { key: 1 }));
        break;
      case "2":
        rightColumnContent.push(React.cloneElement(child, { key: 1 }));
        break;
      default:
        leftColumnContent.push(<Text key={1} position="center">Please use the attribute id='1' or id='2' in each children of 'SlideTwoColumns' to add the content into the first column or the second one.</Text>)
        break;
    }
  }

  //Sinon, on fait un map sur tous les children
  else{
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
  }
  
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
    </>
	);
}