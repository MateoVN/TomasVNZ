import { BottomWave, Gmail, IconCart, IconCart02, LinkedinWhite, Messenger, Telegram, WhatsApp } from "../../components/Icons"
import { ContactForm } from "./ContactForm"
import "./contactpage.css"

/**
 * ContactPage.tsx
 * 
 * Página de contacto que incluye:
 * - Formulario de contacto con EmailJS.
 * - Texto motivacional para invitar al usuario a comunicarse.
 * - Enlaces sociales accesibles (Gmail, LinkedIn, WhatsApp, Messenger, Telegram).
 * - Efectos decorativos como waves e íconos animados.
 *
 * Accesibilidad: 
 * - Todos los enlaces sociales tienen `aria-label`.
 * - `target="_blank"` siempre se acompaña con `rel="noopener noreferrer"` por seguridad.
 */

export function ContactPage () {

    return(
        <section id="contact" className="contactpage-wrapper">

            {/* Título de la sección */}
            <section className="contactpage">
                <div className="contactpage-title">
                    <span className="rotateClockwise"><IconCart/></span>
                    <h2>Contacto</h2>
                    <span className="rotateCounter"><IconCart02/></span>
                </div>
            </section>

            
            {/* Contenido principal: formulario + texto + enlaces sociales */}
            <article  className="contact-form-section">

                {/* Formulario de contacto con emailjs */}
                <ContactForm/>

                {/* Descripción motivacional y enlaces a redes sociales */}
                <div className="contact-form-description">

                    <p>¿Estás listo/a para trabajar juntos? ¿Tenés alguna consulta?</p>
                    <p>Enviame tu consulta y te responderé lo antes posible para ayudarte con tu proyecto o idea.</p>

                     {/* Enlaces a redes sociales y todos abren en nueva pestaña*/}
                    <div className="contact-form-socialmedia">

                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dafironxd@gmail.com&su=Hola%20Tomás&body=Quiero%20contactarte%20por%20un%20proyecto." 
                            aria-label="Gmail de Tomás" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <Gmail/>
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/tom%C3%A1s-vel%C3%A1zquez-nu%C3%B1ez-b388322a1/?originalSubdomain=ar" 
                            aria-label="Linkedin de Tomás" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <LinkedinWhite/>
                        </a>

                        <a 
                            href="https://wa.me/+5492235765305" 
                            aria-label="WhatsApp de Tomás" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <WhatsApp/>
                        </a>

                        <a 
                            href="https://m.me/tomi.velazqueznunez" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <Messenger />
                        </a>

                        <a 
                            href="https://t.me/tomasvnz" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <Telegram/>
                        </a>
                    </div>
                </div>
            </article >

            <BottomWave/>

        </section>
    )
}