import { useState } from "react";
import "./footer.css"

// ======================
// Componente Footer
// Contiene menú móvil + derechos de autor
// ======================

export function Footer () {
    // Estado para controlar si el menú está desplegado
    const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false);

    return(
        <footer className="footer-wrapper">
            <section className="footer-container">
                {/* Menú de navegación principal (desktop + mobile) */}
                <nav 
                    aria-label="Menú de navegación del pie de página"
                    className={`fmenu-container ${isFooterMenuOpen ? "fmenu-open" : ""}`}
                >
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#work">Experiencia</a></li>
                        <li><a href="#proyects">Proyectos</a></li>
                        <li><a href="#aboutme">Sobre mí</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
                {/* Botón hamburguesa + créditos */}
                <div className="fleft-container">
                    <button 
                        type="button"
                        aria-label="Abrir menú del pie de página"
                        className="fhamburger-btn" 
                        onClick={() => setIsFooterMenuOpen(!isFooterMenuOpen)}
                    >
                        <span className="fhamburger-icon"></span>
                    </button>
                    <h3>Copyright © 2025 | <a href="https://bymoonlightwords.com/" aria-label="Enlace a la pagina de contacto de Mateo y Ayelen" target="_blank" rel="noopener noreferrer">Designed by Mateo & Ayelen</a></h3>
                </div>
            </section>
        </footer>
    )
}