import { Aws, Css, FastApi, Html, JavaScript, MongoDb, MySql, NodeJs, Python } from "../../components/Icons";
import "./ourtechnologies.css"

/**
 * Muestra las tecnologías utilizadas por el desarrollador clasificadas por nivel de experiencia:
 * - Sección 1: Tecnologías dominadas (enlaces a sus sitios oficiales)
 * - Sección 2: Tecnologías con conocimientos básicos
 * Cada tecnología incluye su ícono correspondiente.
 */

const specializedTechs = [
  { name: "Python", href: "https://www.python.org/", icon: <Python /> },
  { name: "MongoDB", href: "https://www.mongodb.com/", icon: <MongoDb /> },
  { name: "FastAPI", href: "https://fastapi.tiangolo.com/", icon: <FastApi /> },
  { name: "MySQL", href: "https://www.mysql.com/", icon: <MySql /> },
  { name: "AWS", href: "https://aws.amazon.com/", icon: <Aws /> },
  { name: "Reflex", href: "https://reflex.dev/", icon: <img src="/Reflex.svg" alt="Logo de Reflex" /> },
];

export function OurTechnologies () {
    return(
        <section className="aboutmepage-our-technologies">

            <div className="aboutmepage-technologies-container">
                <div className="technologies-title">
                    <h3>Tecnologias que utilizo</h3>
                </div>
                <div className="specialized-technologies">
                    {specializedTechs.map(tech => (
                        <a 
                            href={tech.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="technology-icon-name" 
                            key={`technologies-${tech.name}`} 
                            aria-label={`Enlace que direcciona a la documentacion de${tech.name}`}>
                            {tech.icon}{tech.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="aboutmepage-technologies-container">
                <div className="technologies-title">
                    <h3>Tecnologias con conocimiento basico</h3>
                </div>
                <div className="basic-knowledge-technologies">
                    <a 
                        href="https://developer.mozilla.org/es/docs/Web/JavaScript" 
                        className="technology-icon-name" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="En lace a la documentacion de Javascript"
                        style={{ gridColumn: "2", gridRow: "1" }}
                    >
                        <JavaScript/>JavaScript
                    </a>
                    <div className="basic-knowledge-technologies-section">
                        <a 
                            href="https://developer.mozilla.org/es/docs/Web/CSS" 
                            className="technology-icon-name"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="En lace a la documentacion de CSS"
                            style={{ gridColumn: "1", gridRow: "2" }}
                        >
                            <Css/>CSS
                        </a>
                        <a 
                            href="https://developer.mozilla.org/es/docs/Web/HTML" 
                            className="technology-icon-name"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="En lace a la documentacion de HTML"
                            style={{ gridColumn: "3", gridRow: "2" }}
                        >
                            <Html/>HTML
                        </a>
                    </div>
                    <a 
                        href="https://nodejs.org/" 
                        className="technology-icon-name"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="En lace a la documentacion de Node.js"
                        style={{ gridColumn: "2", gridRow: "3" }}
                    >
                        <NodeJs/>Node.js
                    </a>
                </div>
            </div>

        </section>
    )
}