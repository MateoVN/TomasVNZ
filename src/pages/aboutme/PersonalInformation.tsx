import { Facebook, GitHub, Instagram, Linkein, SearchFile, X } from "../../components/Icons";
import "./personalinformation.css"

/**
 * Sección que presenta la información personal de Tomás Velázquez Núñez:
 * - Foto de perfil
 * - Breve descripción profesional
 * - Botón de descarga de CV
 * - Íconos de redes sociales
 */

export function PersonalInformation () {
    return(
        <section className="aboutmepage-personalinformation">

            <img src="/Tomas_Velazquez_Nunez_-_profile_pic_11.jpg" alt="Foto de perfil de Tomás Velázquez Nuñez" />

            <div className="container-responsive">
                
                <div className="aboutmepage-description">
                    <h3>Hola, soy <span>Tomás</span></h3>
                    <p>Desarrollador de software Backend. Me he formado y especializado en el lenguaje Python, en la creación de APIs y en la gestión de datos comerciales.</p>
                    <a 
                        href="/CV-Tomas-Velazquez-Nunez.pdf" 
                        download 
                        className="oscuro-button"
                        aria-label="Pdf del curriculum">

                        <span>Curriculum</span>
                        <SearchFile />
                    </a>
                </div>

                <div className="aboutmepage-socailIcons">
                    <a 
                        href="https://www.linkedin.com/in/tom%C3%A1s-vel%C3%A1zquez-nu%C3%B1ez-b388322a1/?originalSubdomain=ar" 
                        aria-label="Linkedin de Tomás Velázquez Núñez" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Linkein/>
                    </a>

                    <a 
                        href="https://github.com/Dafiron" 
                        aria-label="GitHub de Tomás Velázquez Núñez"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <GitHub/>
                    </a>

                    <a 
                        href="https://www.facebook.com/tomi.velazqueznunez" 
                        aria-label="Facebook de Tomás Velázquez Núñez"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Facebook/>
                    </a>

                    <a 
                        href="#" 
                        aria-disabled="true"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <X/>
                    </a>

                    <a 
                        href="https://www.instagram.com/dafiron/?hl=es" 
                        aria-label="Instagram de Tomás Velázquez Núñez"
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Instagram/>
                    </a>
                </div>
                
            </div>
        </section>
    )
}