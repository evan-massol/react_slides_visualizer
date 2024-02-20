import classNames from "classnames";

export default function Image({src="public/react.svg", width, height, color, position="center"}){
  const imageContainerStyle = classNames(
                      'flex',
                      'items-center',
                      {
                        'justify-start': position === 'left',
                        'justify-end': position === 'right',
                        'justify-center': position === 'center'
                      }
                     );

  //const imageStyle= classNames(`h-${height} w-${width}`)

  return (
    <div className={imageContainerStyle}>
      <img src={src}/>
    </div>
  )
}