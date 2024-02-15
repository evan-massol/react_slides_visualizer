import { createContext, useState } from "react";

export const NavbarContext = createContext(null);

export function NavbarProvider({children}){
	const [ currentSlide, setCurrentSlide ] = useState(1);
	const [ isHidden, setIsHidden ] = useState(false);
	
	const changeDisplayNumberSlide = () => setIsHidden(!isHidden);


	return(
		<NavbarContext.Provider>
            
        </NavbarContext.Provider>
	)
}