

export default function Title({text="", size="6xl", position="center"}){
  const titleStyle = `text-${size} text-${position} w-auto break-words hyphens-auto`;

  return(
    <div className={titleStyle}>
      <h1>{text}</h1>
    </div>
  )
    
}