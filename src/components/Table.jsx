import classNames from "classnames";
import { bgColors } from "../css/backgroundStyle";
import { borderStyles } from "../css/tableStyle";
import { textColors } from "../css/textStyle";

export default function Table({table, align="center", alignCells="center", borderColor="black",
                              borderCellColor="black", backgroundColor="", textColor="black"}){

  const tableContainerStyle = classNames(
                              'flex',
                              'items-center',
                              {
                                'justify-start': align === 'left',
                                'justify-end': align === 'right',
                                'justify-center': align === 'center'
                              }
                            );

  const tableStyle = classNames(`
                    ${bgColors[backgroundColor]}
                    ${borderStyles[borderColor]}
                    border
                    border-spacing-2
                    border-separate
                    table-auto`)

  const cellStyle = classNames(`
                    border
                    border-spacing-2
                    ${borderStyles[borderCellColor]}
                    ${textColors[textColor]}
                    `,
                    {
                      'text-center': alignCells === "center",
                      'text-left': alignCells === "left",
                      'text-right': alignCells === "right"
                    })

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
  )
}