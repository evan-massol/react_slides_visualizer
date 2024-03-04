import classNames from "classnames";
import { bgColors } from "../css/backgroundStyle";
import { borderStyles, borderThicknesses } from "../css/tableStyle";
import { textColors } from "../css/textStyle";
import { heightStyles } from "../css/textHeights";

//Ce composant permet de créer un tableau dans les slides.
export default function Table({table="", position="center", height="top", alignCells="center", borderColor="black",
                              borderCellColor="black", backgroundColor="", textColor="black", borderThickness="1",
                              borderCellThickness="1"}){

  const tableContainerStyle = classNames(
                              `text-${position} sticky
                              ${heightStyles[height]}`
                            );

  const tableStyle = classNames(`
                    inline-block
                    ${bgColors[backgroundColor]}
                    ${borderStyles[borderColor]}
                    border-spacing-2
                    border-separate
                    ${borderThicknesses[borderThickness]}
                    table-auto`);

  const cellStyle = classNames(`
                    border-spacing-2
                    ${borderStyles[borderCellColor]}
                    ${textColors[textColor]}
                    ${borderThicknesses[borderCellThickness]}
                    `,
                    {
                      'text-center': alignCells === "center",
                      'text-left': alignCells === "left",
                      'text-right': alignCells === "right"
                    });

  const tableContent = table.map((row, index) => 
    <tr key={index}>
      {row.map((content, contentIndex) => (
        <td key={contentIndex} className={cellStyle}>{content}</td>
      ))}
    </tr>
  );

  return (
    <div className={tableContainerStyle}>
      <table className={tableStyle}>
        <tbody>{tableContent}</tbody>
      </table>
    </div>
  );
}