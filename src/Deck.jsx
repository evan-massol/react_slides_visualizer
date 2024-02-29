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
import { PagesContext } from "./contexts/PageContext";
import { useContext } from "react";


export const slides = [
	<Slide >
		<Title size="h1" marginBottom="2">Titre de la slide 1</Title>
		<Text text="Voilà un premier texte" size="6" position="center" marginTop="96" marginBottom="2"/>
	</Slide>,

	<Slide>
		<Title size="h2">Titre de la slide 2</Title>
		<Text text="Voilà un second texte" size="4" position="center" marginTop="2"/>
	</Slide>,

	<Slide >
		<Title size="h3">Titre de la slide 3</Title>
		<Text text="Voilà un troisième texte" size="2" position="center" marginTop="2"/>
	</Slide>,

	<Slide >
		<Title size="h4">Titre de la slide 4</Title>
		<Image src="/amogus.png" />
	</Slide>,

	<Slide >
		<Title size="h5">Titre de la slide 5</Title>
		<Figure src="/amogus.png" text="Un exemple de figure" position="right"/>
	</Slide>,

	<Slide >
		<Title size="h3">Titre de la slide 6</Title>
		<Table table={[["Ligne 1", "Contenu suivant", "blabblabla"],
						["Ligne 2", "Contenu numéro 2", "autre chose"]]}
						borderCellColor="green"/>
	</Slide>,
	
	<Slide >
		<Title size="h4">Titre de la slide 7</Title>
		<NumberedList elements={["Première puce", 
														 "Deuxième puce", 
														 "Troisième puce"]} color="cyan" position="center" size="5"/>
	</Slide>,

	<Slide >
		<Title size="h5">Titre de la slide 8</Title>
		<BulletedList elements={["Première puce", 
														 "Deuxième puce", 
														 "Troisième puce"]} color="cyan" position="center" size="5"/>
	</Slide>,

	<SlideTwoColumns>
		<Title id="1" size="h3">Titre de la slide 9 dans la colonne de gauche</Title>
		<Text id="2" text="Voilà un troisième texte" size="2" position="center" marginTop="2"/>
		<Code id="1" language="jsx" position="center">{
`import classNames from 'classnames';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeAlign } from '../css/codeAlign'
		
export default function Code({language="cpp", position="center", children}){

	const containerStyle = classNames(\`\${codeAlign[position]} max-h-96 flex\`);

	return (
		<div className={containerStyle}>
			<Prism language={language} style={vscDarkPlus}>
				{children}
			</Prism>
		</div>
	)
}
		`}</Code>
	</SlideTwoColumns>,

	<Slide >
		<Title size="h3">Un peu de code !</Title>
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
	</Slide>,

	<Slide>
		<Markdown titleColor="red" marginBottom="10">{`## Présentation du Markdown`}</Markdown>
		<Markdown marginTopText="5" textPosition="center" tableAlign="center">{
`**Voilà un texte en gras ainsi que _de l'italique en même temps_**  
Comparé à un texte normal  
*Mais aussi un texte en italique*  
[Ainsi qu'un lien](http://amazon.fr)  
Une liste non ordonnée, puis ordonnée:  

* Premier 
* Deuxième   
  
1. Premier élément  
2. Deuxième élément
3. Troisième élément  

Un tableau:  
| Alpha    | Bravo   |
| -------- | ------- |
| 中文       | Charlie |
| 👩‍❤️‍👩 | Delta   |`}</Markdown>

		<Markdown quotePosition="center">{`> Voilà une citation en Markdown`}</Markdown>
		<Markdown textPosition="center">{`~~Du texte barré grâce au plugin Remark-gfm~~`}</Markdown>
		<Markdown codePosition="center">{
`~~~
#include <iostream>

using namespace std;

int main(){
	cout << "Bonjour React!" << endl;
	return 0;
}
~~~
`}</Markdown>
		
	</Slide>
]

export default function Deck(){
	const { state } = useContext(PagesContext);

	return (
		<div className="h-96 relative bg-white mt-2 mr-14 ml-14 p-2 shadow-lg shadow-black">
			{slides[state.currentSlide-1]}
		</div>
	)
}