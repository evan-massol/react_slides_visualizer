import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import Title from './Title';
import { heightStyles } from '../css/textHeights';

export default function Markdown({position="center", color="black",
                                  height="top", backgroundColor="",
                                  marginTop="auto", marginLeft="auto", 
                                  marginBottom="auto", marginRight="auto", children}){

  const containerStyle = classNames(`text-${position} sticky ${heightStyles[height]}`);

  const components = {
    h1: ({ index, ...props }) => <Title size="h1" {...props} />,
    h2: ({ index, ...props }) => <Title size="h2" {...props} />,
    h3: ({ index, ...props }) => <Title size="h3" {...props} />,
    h4: ({ index, ...props }) => <Title size="h4" {...props} />,
    h5: ({ index, ...props }) => <Title size="h5" {...props} />,
    h6: ({ index, ...props }) => <Title size="h6" {...props} />
  }

  return (
    <ReactMarkdown className={containerStyle} components={components}>
      {children}
    </ReactMarkdown>
  )
}