import { useState, createContext, useContext } from "react"
import Slide from './components/Slide.jsx'

const slides = [];

export default function Deck({children}){

	return (
		<>
			{children}
		</>
	)
}