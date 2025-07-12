import { useState } from "react"
import "./horizontalcard.css"
import { Technology } from "./Proyects"

// Definimos los props que recibe la tarjeta
type Card ={
    frontTitle: string,
    imgPath:string,
    backTitle:string,
    cardDescription:string,
    technologies: Technology[]
}

// Componente de tarjeta horizontal con efecto flip
export function HorizontalCard ({frontTitle, imgPath, backTitle, cardDescription, technologies}: Card) {

     // Estado para controlar si la tarjeta está girada o no
     const [isLocked, setIsLocked] = useState(false)
    
        const handleClick = () => {
            setIsLocked((prev) => !prev)
        }

        // Clase CSS condicional para manejar la animación
        const cardClasses = `hcard ${isLocked ? "hcard-locked" : "hcard-hover"}`;
    
    return(
        <div 
            className="hcard-container" 
            onClick={handleClick} 
            role="button" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter') handleClick() }}>

            <div className={cardClasses}>
                {/* Parte frontal de la tarjeta (no se ve su contenido solo su titulo)*/}
                <div className="hcard-front">
                    <h3>{frontTitle}</h3>
                </div>

                {/* Parte trasera de la tarjeta */}
                <div className="hcard-back">
                    <div className="hcard-back-sections">
                        <h4>{backTitle}</h4>
                        <p>{cardDescription}</p>
                        
                        {/* Tecnologías utilizadas */}
                        <div className="hcard-technologies">
                            {technologies.map((tec) =>(
                                <div key={`${tec.name}-hcard`} className={`hcard-name-technology bg-${tec.name}`}>
                                    <p>{tec.name}</p>
                                </div>
                            ))}
                        </div>   

                    </div>

                    {/* Imagen del proyecto */}
                    <img src={imgPath} alt={`Imagen del proyecto ${frontTitle}`} />
                </div>
            </div>
        </div>
    )
}