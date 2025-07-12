import { useState } from "react"
import "./card.css"
import { Technology } from "./Proyects"

// Props que recibe cada tarjeta
type CardProps = {
    frontTitle: string
    imgPath: string
    backTitle: string
    cardDescription: string
    technologies: Technology[]
}

// Componente de tarjeta vertical con efecto flip
export function Card({ frontTitle, imgPath, backTitle, cardDescription, technologies }: CardProps) {
    
     // Estado para controlar si la tarjeta está girada (bloqueada)
    const [isLocked, setIsLocked] = useState(false)

    const handleClick = () => {
        setIsLocked((prev) => !prev)
    }

     // Asignamos clases condicionalmente según si está girada
    const cardClasses = `card ${isLocked ? "card-locked" : "card-hover"}`;

    return (
    <div 
        className="card-container" 
        onClick={handleClick} 
        role="button" 
        tabIndex={0} 
        onKeyDown={(e) => { if (e.key === 'Enter') handleClick() }}
    >
        <div className={cardClasses}>

            {/* Lado frontal de la tarjeta (no se ve su contenido solo su titulo)*/}
            <div className="card-front">
                <h3>{frontTitle}</h3>
            </div>

            {/* Lado trasero de la tarjeta */}
            <div className="card-back">
                <img src={imgPath} alt={`Imagen de ${frontTitle}`}/>
                <h4>{backTitle}</h4>
                <p>{cardDescription}</p>
                 {/* Layout personalizado para la tarjeta de Telegram Bot  que muestar sus tecnoligias de forma personalizada*/}
                {(frontTitle === "API Telegram Bot" )?
                    <div className="card-technologies-telgram-bot">
                            {technologies[0] && (
                                <div key={`${technologies[0].name}-telgram-bot`} className={`card-name-technology bg-${technologies[0].name}`} style={{ gridColumn: "2", gridRow: "1" }}>
                                <p>{technologies[0].name}</p>
                                </div>
                            )}
                            {technologies[1] && (
                                <div key={`${technologies[1].name}-telgram-bot`} className={`card-name-technology bg-${technologies[1].name}`} style={{ gridColumn: "1", gridRow: "2" }}>
                                <p>{technologies[1].name}</p>
                                </div>
                            )}
                            {technologies[2] && (
                                <div key={`${technologies[2].name}-telgram-bot`} className={`card-name-technology bg-${technologies[2].name}`} style={{ gridColumn: "3", gridRow: "2" }}>
                                <p>{technologies[2].name}</p>
                                </div>
                            )}
                            {technologies[3] && (
                                <div key={`${technologies[3].name}-telgram-bot`} className={`card-name-technology bg-${technologies[3].name}`} style={{ gridColumn: "2", gridRow: "3" }}>
                                <p>{technologies[3].name}</p>
                                </div>
                            )}
                    </div>
                    :
                     // Layout de tecnologias para todos los demas proyecto
                    <div className="card-technologies">
                        {technologies.map((tec) => (
                            <div key={`${tec.name}-card-technologies`} className={`card-name-technology bg-${tec.name}`}>
                            <p>{tec.name}</p>
                            </div>
                        ))}
                    </div>
                }
            
            </div>
        </div>
    </div>
    )
}