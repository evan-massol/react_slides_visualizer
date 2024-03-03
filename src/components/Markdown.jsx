import ReactMarkdown from 'react-markdown';
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
                                  marginTopTitle="0", marginLeftTitle="0", 
                                  marginBottomTitle="0", marginRightTitle="0",
                                  marginTopText="0", marginLeftText="0", 
                                  marginBottomText="0", marginRightText="0",
                                  codeLanguage="cpp", codeTheme="vscDarkPlus",
                                  codePosition="center", codeWrapLines=false,
                                  tableAlign="left", quotePosition="left", 
                                  children}){

  const tableContainerStyle = classNames(
                                `${textColors[textColor]}`,
                                'flex',
                                'items-center',
                                {
                                  'justify-start': tableAlign === 'left',
                                  'justify-end': tableAlign === 'right',
                                  'justify-center': tableAlign === 'center'
                                }
                              );

  const quoteStyle = classNames(`text-${quotePosition} sticky`);

  const listContainer = classNames(`text-${textPosition} sticky`);
	
	const unorderedStyle = classNames(`
                              inline-block
															${textSizes[textSize]}
															${textColors[textColor]}
															hyphens-auto
                              list-disc
                              list-inside
															`);

  const orderedStyle = classNames(`inline-block
                                  ${textSizes[textSize]}
                                  ${textColors[textColor]}
                                  hyphens-auto 
                                  list-decimal 
                                  list-inside
                                `);

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
                                      {title && <span className="text-center block text-sm mt-0.5 text-gray-700">{title}</span>}
                                    </span>
                                  ),
  

    blockquote: ({ ...props}) => <div className={quoteStyle}>
                                    <blockquote className="bg-gray-100 border-l-4 border-gray-500 my-4 pl-px inline-block"
                                        {...props}></blockquote>
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
}