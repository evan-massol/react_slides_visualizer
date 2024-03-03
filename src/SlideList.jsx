import Slide from "./components/Slide";
import Title from "./components/Title";
import Text from "./components/Text";
import Image from "./components/Image";
import Figure from "./components/Figure";
import Table from "./components/Table";
import NumberedList from "./components/NumberedList";
import BulletedList from "./components/BulletedList";
import SlideTwoColumns from "./components/SlideTwoColumns";
import Code from "./components/Code";
import Markdown from "./components/Markdown";
import CenteredSlide from "./components/CenteredSlide";

export const slides = [
	<CenteredSlide >
		<Title size="h1" marginBottom="5">Visualiseur de Slides</Title>
		<Text size="6">
			Réalisé en React par Evan MASSOL
		</Text>
		<Markdown textSize="5" textColor="cyan">{
`**Utilise les bibliothèques externes**:  
- [x] __react-markdown__  
- [x] __react-syntax-highlighter__

(oui, ceci est du **Markdown**)
`}</Markdown>
	</CenteredSlide>,

	<CenteredSlide>
		<Title size="h3" marginBottom="5">Liste des Composants disponibles</Title>
		<BulletedList elements={["BulletedList", "CenteredSlide", "Code", 
														"Figure", "Image", "Markdown", "NumberedList",
														"Slide", "SlideTwoColumn", "Table", "Text", "Title"]} size="5" color="darkCyan"></BulletedList>
		
	</CenteredSlide>,

	<Slide>
		<Text position="right" height="top">{`Texte aligné en haut à droite`}</Text>
		<Text>Texte aligné en haut à gauche</Text>
		<Title size="h2" position="center" height="center">Personnalisation des alignements</Title>
		<Text marginTop="14" position="center" height="center">Voilà un texte avec un props 'marginTop' égal à 14 par rapport au centre de la slide, pour espacer avec le titre.</Text>

		<Text height="bottom">Texte aligné en bas à gauche</Text>
		<Text height="bottom" position="right">Texte aligné en bas à droite</Text>

	</Slide>,

	<CenteredSlide >
		<Title size="h3">Une slide avec du contenu centré</Title>
		<Text size="4">
			Voilà une image centrée grâce au composant 'CenteredSlide'
		</Text>
		<Image src="/amogus.png"/>
		<Text marginBottom="5" marginTop="5">Et même un tableau avec des cellules vides, ou non renseignées!</Text>
		<Table table={[["Ligne 1", "Element de la ligne 1", "Un autre élément de la ligne"],
									 ["Une autre ligne", "Un autre élément", ""],
									 ["Une dernière pour la route"]]} 
									 borderColor="blue" borderThickness="3" borderCellThickness="4" borderCellColor="red"/>
	</CenteredSlide>,

	<Slide >
		<Title size="h4">Des images...mais avec leur texte !</Title>
		<Figure src="/amogus.png" text="Un exemple de figure"/>
	</Slide>,
	
	<Slide>
		<Title id="1" size="h4" >Voilà des listes à puces !</Title>
		<SlideTwoColumns >
			<Text id="1" position="center" size="5">D'abord une liste numérotée:</Text>
			<NumberedList id="1" elements={["Première puce", 
															"Deuxième puce", 
															"Troisième puce"]} color="green" position="center" size="5"/>
			<Code id="1" language="jsx" >{
`import classNames from "classnames";
import { textSizes } from "../css/textStyle";
import { textColors } from "../css/textStyle";

export default function NumberedList({elements=["Premier", "Deuxième", "Troisième"],
                                        size="3", color="black", position="left"}){
    
	const numbersStyle = classNames(\`list-decimal list-inside\`)
	
	const listStyle = classNames(\`\${textSizes[size]}
								 \${textColors[color]}
								 text-\${position}
								 w-auto
								 break-words
								 hyphens-auto\`);
	
	const list = elements.map((element, index) =>
		<li className={listStyle} key={index}>{element}</li>
	) ;

	return (
		<ol className={numbersStyle}>
				{list}
		</ol>
	)
}`}</Code>

			<Text id="2" size="5" position="center">Puis une liste non ordonnée:</Text>
			<BulletedList id="2" elements={["Première puce", 
															"Deuxième puce", 
															"Troisième puce"]} color="red" position="center" size="5"/>
			<Code id="2" language="jsx" >{
`import classNames from "classnames";
import { textSizes } from "../css/textStyle";
import { textColors } from "../css/textStyle";

export default function BulletedList({elements=["Premier", "Deuxième", "Troisième"],
                                        size="3", color="black", position="left"}){
    
	const numbersStyle = classNames(\`list-disc list-inside\`)
	
	const listStyle = classNames(\`\${textSizes[size]} 
								 \${textColors[color]}
								 text-\${position}
								 w-auto
								 break-words
								 hyphens-auto\`);
	
	const list = elements.map((element, index) =>
		<li className={listStyle} key={index}>{element}</li>
	) ;

	return (
		<ul className={numbersStyle}>
				{list}
		</ul>
	)
}`}</Code>
		</SlideTwoColumns>
		<Text id="2" size="6" position="center" marginTop="10">Voici leurs codes respectifs</Text>
		<Text id="2" size="6" position="center">(avec le Composant 'Code' !):</Text>

	</Slide>,

	<SlideTwoColumns>
		<Title id="1" size="h3">Titre dans la colonne de gauche</Title>
		<Text id="1" size="4" position="center" marginTop="10" marginBottom="16">
			Un peu plus de code ne ferait pas de mal non?
		</Text>
		<Code id="1" language="jsx" position="center">{
`import classNames from 'classnames';
import { Prism } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeAlign } from '../css/codeAlign'

export default function Code({language="cpp", position="center", 
                              theme="vscDarkPlus", wrapLines=false, children}){

  const containerStyle = classNames(\`\${codeAlign[position]} max-h-96 flex\`);

  return (
    <div className={containerStyle}>
      <Prism language={language} style={styles[theme]} wrapLongLines={wrapLines}>
        {children}
      </Prism>
    </div>
  );
}`}</Code>
		<Title id="2" size="h3">Titre dans la colonne de droite</Title>
		<Text id="2" size="3" position="center" marginTop="2">
			Ce code montrant mon code pour les slides à deux colonnes possède la propriété wrapLines=True, les longues lignes sont coupées !
		</Text>
		<Code id="2" language="jsx" position="center" wrapLines={true}>{
`import React, { useContext } from "react"
import { PagesContext } from "../contexts/PageContext"
import { slides } from "../Deck";
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
        leftColumnContent.push(React.cloneElement(child, { key: \`\${index}\` }));
        break;
      case "2":
        rightColumnContent.push(React.cloneElement(child, { key: \`\${index}\` }));
        break;
      default:
        leftColumnContent.push(<Text key={\`\${index}\`} position="center">Please use the attribute id='1' or id='2' in each children of 'SlideTwoColumns' to add the content into the first column or the second one.</Text>)
        break;
    }
  });

  const columnStyle1 = classNames(\`inline-block w-1/2 pb-12 h-full absolute left-0\`);

  const columnStyle2 = classNames(\`inline-block w-1/2 pb-12 h-full absolute right-0\`);

	return (
		<>
      <div className={columnStyle1}>
        {leftColumnContent}
      </div>
      <div className={columnStyle2}>
        {rightColumnContent}
      </div>
			{!state.isHidden && <div id="numPage" className="absolute bottom-0 right-0 p-4 text-lg">{state.currentSlide}/{slides.length}</div>}
		</>
	);
}
		`}</Code>
	</SlideTwoColumns>,

	<CenteredSlide >
		<Title size="h3" marginBottom="14">Un peu de code d'un langage différent avec des sliders !</Title>
		<Code language="renpy" position="center">{
`layeredimage junichi base:

	at renpy.partial(Flatten, drawable_resolution = False)

	always "mod_assets/MPT/Junichi/Expressions/base.png"

	group outfit:
			attribute uniform default null
			attribute casual null

	group mood:
			attribute neut default null
			attribute angr null
			attribute cry null
			attribute flus null
			attribute happ null
			attribute laug null
			attribute nerv null
			attribute pani null
			attribute sad null
			attribute sedu null
			attribute shoc null
			attribute vang null
			attribute surp null
			attribute worr null
			attribute yand null


	group left:
			attribute ldown default if_any(["uniform"]):
					"mod_assets/MPT/Junichi/Poses/1l.png"
			attribute lup if_any(["uniform"]):
					"mod_assets/MPT/Junichi/Poses/2l.png"
			attribute ldown default if_any(["casual"]):
					"mod_assets/MPT/Junichi/Poses/1bl.png"
			attribute lup if_all(["casual"]):
					"mod_assets/MPT/Junichi/Poses/2bl.png"


	group right:
			attribute rdown default if_any(["uniform"]):
					"mod_assets/MPT/Junichi/Poses/1r.png"
			attribute rup if_any(["uniform"]):
					"mod_assets/MPT/Junichi/Poses/2r.png"
			attribute rdown if_any(["casual"]):
					"mod_assets/MPT/Junichi/Poses/1br.png"
			attribute rup if_any(["casual"]):
					"mod_assets/MPT/Junichi/Poses/2br.png"


	group nose:
			attribute nose default if_any(["neut", "angr", "cry", "happ", "laug", "sad", "shoc", "vang", "surp", "worr", "yand"]):
					"mod_assets/MPT/Junichi/Expressions/Nose/blush1.png" # default blush
			attribute blush default if_any(["flus", "nerv", "pani", "sedu"]):
					"mod_assets/MPT/Junichi/Expressions/Nose/blush2.png" # flustered blush
			attribute noblush:
					null

			attribute n1:
					"mod_assets/MPT/Junichi/Expressions/Nose/blush1.png" # default blush
			attribute n2:
					"mod_assets/MPT/Junichi/Expressions/Nose/blush2.png" # flustered blush
					
	group mouth:
			attribute cm default if_any(["neut", "flus", "sad"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/mn.png" # neutral mouth
			attribute cm default if_any(["happ", "nerv"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/ms.png" # smiling mouth
			attribute om if_any(["happ", "laug", "sedu"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/ml.png" # laughing mouth
			attribute om if_any(["neut", "worr", "sad", "flus", "nerv", ""]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/mo.png" # open mouth
			attribute om if_any(["yand", "pani", "surp", "cry"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/my.png" # wide mouth
			attribute cm default if_any(["laug", "pani", "sedu", "yand"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/mf.png" # smiling teeth mouth
			attribute cm default if_any(["angr", "cry", "shoc", "vang", "surp","worr"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/mm.png" # gitted teeth mouth
			attribute om if_any(["angr", "vang", "shoc"]):
					"mod_assets/MPT/Junichi/Expressions/Mouth/mt.png" # wide mouth (angry)

			attribute ms:
					"mod_assets/MPT/Junichi/Expressions/Mouth/ms.png" # smiling mouth
			attribute mn:
					"mod_assets/MPT/Junichi/Expressions/Mouth/mn.png" # neutral mouth
			attribute ml:
					"mod_assets/MPT/Junichi/Expressions/Mouth/ml.png" # laughing mouth
			attribute mo:
					"mod_assets/MPT/Junichi/Expressions/Mouth/mo.png" # open mouth
			attribute my:
					"mod_assets/MPT/Junichi/Expressions/Mouth/my.png" # wide mouth
			attribute mf:
					"mod_assets/MPT/Junichi/Expressions/Mouth/mf.png" # smiling teeth mouth
			attribute mm:
					"mod_assets/MPT/Junichi/Expressions/Mouth/mm.png" # gitted teeth mouth
			attribute mt:
					"mod_assets/MPT/Junichi/Expressions/Mouth/mt.png" # wide mouth (angry)

	group eyes:
			attribute oe default if_any(["neut", "angr", "flus", "happ", "laug", "nerv", "sad", "sedu", "worr"]):
					"mod_assets/MPT/Junichi/Expressions/Eyes/en.png" # neutral eyes
			attribute oe default if_any(["cry"]):
					"mod_assets/MPT/Junichi/Expressions/Eyes/ec.png" # crying eyes
			attribute oe default if_any(["pani", "shoc", "vang", "surp", "yand"]):
					"mod_assets/MPT/Junichi/Expressions/Eyes/es.png" # wide eyes
			attribute ce if_any(["cry"]):
					"mod_assets/MPT/Junichi/Expressions/Eyes/em.png" # closed eyes (crying)
			attribute ce if_any(["neut", "angr", "flus", "happ", "laugh", "nerv", "sad", "sedu", "worr"]):
					"mod_assets/MPT/Junichi/Expressions/Eyes/er.png" # closed eyes
			attribute ce if_any(["pani", "shoc", "vang", "surp", "yand"]):
					"mod_assets/MPT/Junichi/Expressions/Eyes/eh.png" # closed eyes (squinted)

			attribute en:
					"mod_assets/MPT/Junichi/Expressions/Eyes/en.png" # neutral eyes
			attribute ec:
					"mod_assets/MPT/Junichi/Expressions/Eyes/ec.png" # crying eyes
			attribute es:
					"mod_assets/MPT/Junichi/Expressions/Eyes/es.png" # wide eyes
			attribute em:
					"mod_assets/MPT/Junichi/Expressions/Eyes/em.png" # closed eyes (crying)
			attribute er:
					"mod_assets/MPT/Junichi/Expressions/Eyes/er.png" # closed eyes
			attribute eh:
					"mod_assets/MPT/Junichi/Expressions/Eyes/eh.png" # closed eyes (squinted)


	group eyebrows:
			attribute brow default if_any(["neut", "happ", "laug", "nerv", "sedu", "shoc", "flus"]):
					"mod_assets/MPT/Junichi/Expressions/Eyebrows/bn.png" # neutral eyebrows
			attribute brow default if_any(["cry", "pani", "sad", "surp", "worr", "yand"]):
					"mod_assets/MPT/Junichi/Expressions/Eyebrows/br.png" # raised eyebrows
			attribute brow default if_any(["angr", "vang"]):
					"mod_assets/MPT/Junichi/Expressions/Eyebrows/ba.png" # lowered eyebrows

			attribute bn:
					"mod_assets/MPT/Junichi/Expressions/Eyebrows/bn.png" # neutral eyebrows
			attribute br:
					"mod_assets/MPT/Junichi/Expressions/Eyebrows/br.png" # raised eyebrows
			attribute ba:
					"mod_assets/MPT/Junichi/Expressions/Eyebrows/ba.png" # lowered eyebrows
		`}</Code>
	</CenteredSlide>,

	<SlideTwoColumns>
		<Markdown id="1" titleColor="red" marginBottom="10">{`## Présentation du Markdown`}</Markdown>
		<Markdown id="1" marginTopText="5" textPosition="center" tableAlign="center">{
`**Voilà un texte en gras ainsi que _de l'italique en même temps_** comparé à un texte normal  
*Mais aussi un texte en italique et __en gras__*  
[Ainsi qu'un lien](http://amazon.fr)  
Une liste non ordonnée, puis ordonnée:  

* Premier 
* Deuxième   
  
1. Premier élément  
2. Deuxième élément
3. Troisième élément  

Tâches à faire:  
* [ ] A faire  
* [x] Fait!

Un tableau:  
| Alpha    | Bravo   |
| -------- | ------- |
| 中文       | Charlie |
| 👩‍❤️‍👩 | Delta   |`}</Markdown>

		<Markdown id="1" quotePosition="center">{`> Voilà une citation en Markdown`}</Markdown>
		<Markdown id="1" textPosition="center">{`~~Du texte barré grâce au plugin Remark-gfm~~`}</Markdown>
		<Markdown id="2" codePosition="center" marginTopText="24">{
`**Du code:**
~~~
#include <iostream>

using namespace std;

int main(){
	cout << "Bonjour React!" << endl;
	return 0;
}
~~~
`}</Markdown>
	<Markdown id="2">{`![Texte alternatif](/amogus.png "Une image en Markdown et son texte")`}</Markdown>
		
	</SlideTwoColumns>,

	<CenteredSlide>
		<Title size="h5" marginBottom="2">Code du composant Markdown</Title>
		<Code language="jsx">{
`import ReactMarkdown from 'react-markdown';
import Title from './Title';
import Text from './Text';
import remarkGfm from 'remark-gfm';
import Code from './Code';
import classNames from 'classnames';
import { textColors, textSizes } from '../css/textStyle';
import { bgColors } from '../css/backgroundStyle';

export default function Markdown({titleColor="black", textColor="black",
								  backgroundColorTitle="",
								  backgroundColorText="", textSize="3",
								  textPosition="center", titlePosition="center",
								  marginTopTitle="auto", marginLeftTitle="auto", 
								  marginBottomTitle="auto", marginRightTitle="auto",
								  marginTopText="auto", marginLeftText="auto", 
								  marginBottomText="auto", marginRightText="auto",
								  codeLanguage="cpp", codeTheme="vscDarkPlus",
								  codePosition="center", codeWrapLines=false,
								  tableAlign="left", quotePosition="left", 
								  children}){

  const tableContainerStyle = classNames(\`\${textColors[textColor]}\`,
										'flex',
										'items-center',
										{
											'justify-start': tableAlign === 'left',
											'justify-end': tableAlign === 'right',
											'justify-center': tableAlign === 'center'
										}
										);

  const quoteStyle = classNames(\`text-\${quotePosition} sticky\`);

  const listContainer = classNames(\`text-\${textPosition} sticky\`);
	
	const unorderedStyle = classNames(\`inline-block
									  \${textSizes[textSize]}
									  \${textColors[textColor]}
									  hyphens-auto
									  list-disc
									  list-inside
									  \`);

  const orderedStyle = classNames(\`inline-block
                                  \${textSizes[textSize]}
                                  \${textColors[textColor]}
                                  hyphens-auto 
                                  list-decimal 
                                  list-inside
                                \`);

  const components = {
    h1: ({ node, ...props }) => <Title size="h1" color={titleColor} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      position={titlePosition} {...props} />,

    h2: ({ ...props }) => <Title size="h2" color={titleColor} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      position={titlePosition} {...props} />,

    h3: ({ ...props }) => <Title size="h3" color={titleColor} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      position={titlePosition} {...props} />,

    h4: ({ ...props }) => <Title size="h4" color={titleColor} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      position={titlePosition} {...props} />,

    h5: ({ ...props }) => <Title size="h5" color={titleColor} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      position={titlePosition} {...props} />,

    h6: ({ ...props }) => <Title size="h6" color={titleColor} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      position={titlePosition} {...props} />,

    a: ({ href, children }) => <a href={href}>{children}</a>,

    p: ({ ...props }) => <Text size={textSize} color={textColor} backgroundColor={backgroundColorText}
                                      marginTop={marginTopText} marginLeft={marginLeftText}
                                      marginBottom={marginBottomText} marginRight={marginRightText}
                                      position={textPosition} {...props} />,

    img: ({ alt, src, title }) => (<span>
                                      <img
                                        className="sticky inline align-middle"
                                        src={src}
                                        alt={alt}
                                        title={title}
                                      />
                                      {title && 
									<span className="text-center block text-sm mt-0.5 text-gray-700">{title}</span>}
                                    </span>
                                  ),
  

    blockquote: ({ ...props}) => <div className={quoteStyle}>
                                    <blockquote className="bg-gray-100 border-l-4 border-gray-500
														   my-4 pl-px inline-block" {...props}></blockquote>
                                  </div>,

    code: ({ ...props }) => <Code language={codeLanguage} position={codePosition} 
                                  theme={codeTheme} wrapLines={codeWrapLines} {...props}/>,

    table: ({ children }) => (
      <div className={tableContainerStyle}>
        <table className="table-auto border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),

    ul: ({  ...props }) => <div className={listContainer}>
                              <ul className={unorderedStyle} {...props} />
                            </div>,

    ol: ({  ...props }) => <div className={listContainer}>
                              <ol className={orderedStyle} {...props} />
                            </div>

  };

  return (
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
}`}</Code>
	</CenteredSlide>
];