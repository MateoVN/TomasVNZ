import { Header } from "../../components/Header";
import { BottomWave, SvgDataFlow04 } from "../../components/Icons";
import { IconsSection } from "./IconsSection";
import "./homepage.css";

// Componente principal que renderiza la portada
export function HomePage() {

  return (
    // Wrapper general con un ID para scroll automático desde el menú
    <div id="home" className="homepage-wrapper">
      <main className="homepage-container">

        {/* Encabezado del sitio, contiene logo, nombre y menú */}
        <Header />
        <section className="homepage-hero" aria-labelledby="hero-title">
          <div className="description">
            <h1 id="hero-title">BIENVENIDOS</h1>
            <p>
              “Tu necesidad es el centro: diseño software claro, útil y escalable que responde a tus verdaderos retos”
            </p>
            <a href="#proyects" className="cta-button" aria-label="Ver Proyectos">
              Ver Proyectos <SvgDataFlow04 aria-hidden="true" />
            </a>
          </div>
          {/* Sección decorativa de íconos animados */}
          <IconsSection />
        </section>
      </main>

       {/* Ola decorativa inferior al final de la página */}
      <BottomWave />
    </div>
  );
}