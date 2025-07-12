// Importamos tipo que define las clases de color dinámicas
import { ElementColor } from "./WorkExperience";
import "./IteractiveElement.css"

interface IteractiveElementProps {
  icon: React.ReactNode;           // Ícono a mostrar en el botón
  subTitle: string;                // Título a mostrar cuando está cerrado
  content: React.ReactNode;        // Contenido que se expande al abrir
  isOpen: boolean;                 // Estado que indica si el contenido está abierto
  onToggle: () => void;            // Función que cambia el estado abierto/cerrado
  colorElementsClasses: ElementColor; // Clase de color dinámica (ej: azul, rojo, etc.)
}

export function IteractiveElement({
  icon,
  subTitle,
  content,
  isOpen,
  onToggle,
  colorElementsClasses
}: IteractiveElementProps) {
  return (
    <div className="ie-wrapper">
      {/* Botón principal interactivo que cambia su estilo si está abierto */}
      <div
        className={`ie-btn ${isOpen ? "ie-open" : ""} bg-${colorElementsClasses}`}
        onClick={onToggle}
        role="button">

        {/* Texto visible solo cuando está cerrado */}
        {!isOpen && (
          <span className="ie-text">
            {subTitle}
          </span>
        )}

        {/* Ícono con animación distinta según el estado */}
        <span className={`ie-icon ${isOpen ? "ie-icon-slide-up" : "ie-icon-normal"}`}>
          {icon}
        </span>
      </div>

      {/* Contenedor del contenido desplegable */}
      <div className={`ie-content-wrapper ${isOpen ? "ie-expand" : ""}`}>
        <div className={`ie-content bg-${colorElementsClasses}`}>
          {content}
        </div>
      </div>
    </div>
  );
}