import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import Title from './Title';
import { heightStyles } from '../css/textHeights';
import Text from './Text';

export default function Markdown({position="center", colorTitle="black", colorText="black",
                                  height="top", backgroundColorTitle="",
                                  backgroundColorText="", textSize="3",
                                  marginTopTitle="auto", marginLeftTitle="auto", 
                                  marginBottomTitle="auto", marginRightTitle="auto",
                                  marginTopText="auto", marginLeftText="auto", 
                                  marginBottomText="auto", marginRightText="auto",
                                  href="http://quelquepart", children}){

  const containerStyle = classNames(`text-${position} sticky ${heightStyles[height]}`);

  const components = {
    h1: ({ node, ...props }) => <Title size="h1" color={colorTitle} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      {...props} />,

    h2: ({ node, ...props }) => <Title size="h2" color={colorTitle} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      {...props} />,

    h3: ({ node, ...props }) => <Title size="h3" color={colorTitle} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      {...props} />,

    h4: ({ node, ...props }) => <Title size="h4" color={colorTitle} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      {...props} />,

    h5: ({ node, ...props }) => <Title size="h5" color={colorTitle} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      {...props} />,

    h6: ({ node, ...props }) => <Title size="h6" color={colorTitle} backgroundColor={backgroundColorTitle}
                                      marginTop={marginTopTitle} marginLeft={marginLeftTitle}
                                      marginBottom={marginBottomTitle} marginRight={marginRightTitle}
                                      {...props} />,

    a: ({ node, ...props }) => <a href={href} {...props}></a>,

    p: ({ node, ...props }) => <Text size={textSize} color={colorText} backgroundColor={backgroundColorText}
                                      marginTop={marginTopText} marginLeft={marginLeftText}
                                      marginBottom={marginBottomText} marginRight={marginRightText}
                                      {...props} />,
  };

  return (
    <ReactMarkdown className={containerStyle} components={components}>
      {children}
    </ReactMarkdown>
  )
}