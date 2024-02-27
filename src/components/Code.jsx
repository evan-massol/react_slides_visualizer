import classNames from 'classnames';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeAlign } from '../css/codeAlign'

export default function Code({language="cpp", position="center", children}){

  const containerStyle = classNames(`${codeAlign[position]} max-h-96 flex`);

  return (
    <div className={containerStyle}>
      <Prism language={language} style={vscDarkPlus}>
        {children}
      </Prism>
    </div>
  )
}