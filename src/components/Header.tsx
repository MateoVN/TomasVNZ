import { useState } from "react";
import "./header.css";

/**
 * Header principal del sitio, incluye:
 * - Foto de perfil + nombre + verificado con link a LinkedIn.
 * - Menú de navegación responsive con botón hamburguesa.
 */

export function Header() {
  // Estado para abrir/cerrar el menú mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="left-container">
         {/* Logo de perfil con enlace a LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/tom%C3%A1s-vel%C3%A1zquez-nu%C3%B1ez-b388322a1/?originalSubdomain=ar" 
          className="tomasicon-container" 
          aria-label="Canal de YouTube de TomasVNZ"
        >
          <div className="tomasicon-img-wrapper">
            <img 
            id="tomasicon-img" 
            src="/Tomas_Velazquez_Nunez02.jpg" 
            alt="Foto de perfil de Tomas Velazquez Nuñez"
          />
          </div>
          <p>TomasVNZ</p>
          <div className="checkmark-container">
            <img id="checkmark-img" src="/CheckMark.svg" alt="Verificado" />
          </div>
        </a>

        
        {/* Botón hamburguesa visible solo en mobile */}
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="hamburger-icon"></span>
        </button>
      </div>

      {/* Menú de navegación principal (desktop + mobile) */}
      <nav className={`menu-container ${menuOpen ? "menu-open" : ""}`}>
            <ul>
                <li><a href="#work">Experiencia</a></li>
                <li><a href="#proyects">Proyectos</a></li>
                <li><a href="#aboutme">Sobre mí</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>
  );
}