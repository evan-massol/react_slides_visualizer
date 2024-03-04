//Un composant conteneur qui contiendra d'autres composants à l'intérieur.
//C'est le conteneur de base, rien de spécial n'est ajouté ici.
export default function Slide({children}) {

	return (
		<div className="h-full">
			{children}
		</div>
	);
}