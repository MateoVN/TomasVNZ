import "./aboutme.css"
import { IconUser} from "../../components/Icons"
import { lazy } from "react";

/**
 * Componente AboutMe:
 * Sección principal sobre el autor del sitio.
 * - Incluye título animado con ícono.
 * - Contiene dos subcomponentes:
 *   - PersonalInformation: Información básica, CV y redes sociales.
 *   - OurTechnologies: Tecnologías dominadas y con conocimiento básico.
 */

const PersonalInformation = lazy(() => 
    import('./PersonalInformation').then((module) =>({
        default: module.PersonalInformation
    }))
);

const OurTechnologies = lazy(() =>
  import("./OurTechnologies").then((module) => ({
    default: module.OurTechnologies,
  }))
);

export function AboutMe (){
    
    return(
        <section id="aboutme" className="aboutmepage-wrapper">
            <div className="aboutmepage">
                <div className="aboutmepage-title">
                    <span className="rotateClockwise"><IconUser/></span>
                    <h2>Sobre Mi</h2>
                    <span className="rotateCounter"><IconUser/></span>
                </div>
                <PersonalInformation/>
                <OurTechnologies/>
            </div>
        </section>
    )
}