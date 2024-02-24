import classNames from "classnames";
import { textSizes } from "../css/textStyle";
import { textColors } from "../css/textStyle";

export default function BulletedList({elements=["Premier", "Deuxième", "Troisième"],
                                        size="3", color="black", position="left"}){
    
    const numbersStyle = classNames(`list-disc list-inside`)
    
    const listStyle = classNames(`
                                ${textSizes[size]}
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
        <ul className={numbersStyle}>
            {list}
        </ul>
    )
}