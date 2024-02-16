

export default function Text({text="", size="normal", position="left", marginTop="1", marginBottom="1"}){
  const textStyle = `text-${size} text-${position} mt-${marginTop} mb-${marginBottom} w-auto break-words hyphens-auto`;

  return(
    <div className={textStyle}>
			<p>{text}</p>
		</div>
    
  )
  
}