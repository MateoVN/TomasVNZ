import { DataFlow03, TopWave } from "../../components/Icons"
import { Card } from "./Card"
import { HorizontalCard } from "./HorizontalCard"
import "./proyects.css"

// Tipado para las tecnologías utilizadas en cada proyecto
export interface Technology {
  name: string;
}

/*Componente que muestra una sección de proyectos realizados.
Cada proyecto se representa mediante una tarjeta interactiva, vertical u horizontal,
con detalles sobre su funcionalidad y tecnologías utilizadas.*/

export function Proyects () {

    // Listas de tecnologías por proyecto
    const tech = (name: string): Technology => ({ name });

    const technologiesCard1 = [tech("Python"), tech("FastAPI"), tech("MySQL")];
    const technologiesCard2 = [tech("Python"), tech("FastAPI"), tech("MySQL"), tech("AWS")];
    const technologiesHorizontalCard = [tech("Python"), tech("FastAPI"), tech("MySQL"), tech("Reflex"), tech("MongoDB")];

    return (
        <div id="proyects" className="proyectspage-wrapper">
            <TopWave/>
            <section className="proyectspage-content">

                 {/* Título decorado con íconos */}
                <div className="proyectspage-title">
                    <span className="rotateClockwise"><DataFlow03/></span>
                    <h2>Mis Proyectos</h2>
                    <span className="rotateCounter"><DataFlow03/></span>
                </div>

                 {/* Sección con las tarjetas de proyectos */}
                <section className="section-cards">
                    <div className="section-cards-row">
                        <Card
                            frontTitle={"API de Comercio Virtual"}
                            imgPath={"/api-ecommerce-img(500 x 300 px) 1.svg"}
                            backTitle={"API de Comercio virtual"}
                            cardDescription={"API para gestionar un ecommerce simple. Permite crear, actualizar y eliminar productos, usuarios e imágenes, con autenticación JWT y almacenamiento en AWS S3. Desarrollada con Python, FastAPI, base de datos relacional y AWS S3 para imágenes."}
                            technologies={technologiesCard1} 
                        />
                        <Card
                            frontTitle={"API Telegram Bot"}
                            imgPath={"/bot-telegram-img-(500x300 px).svg"}
                            backTitle={"API Telegram Bot"}
                            cardDescription={"API para gestionar un bot en telegram , que contesta preguntas frecuentes , así como consultar estados de cuenta, contactos de la empresa, y lista de precios."}
                            technologies={technologiesCard2}                    
                        />
                    </div>
                    <HorizontalCard
                        frontTitle={"Pagina de gestion de votos UNMDP"}
                        imgPath={"/magic-tricks(500x300 px).svg"}
                        backTitle={"Pagina de gestion de votos UNMDP"}
                        cardDescription={'Magic Tricks fue creado para la organización civil sin fines de lucro "Pensar Futuro" con el objetivo de gestionar datos en su carga, actualización, borrado, así como su organización para la facilitación de su lectura y posterior toma de decisiones, fortaleciendo la formación democrática y brindando herramientas para fundamentar, con una fuente empírica, la toma de decisiones por parte de las conducciones; sin vulnerar las libertades, derechos y obligaciones que tiene cada participante de las elecciones universitarias'}
                        technologies={technologiesHorizontalCard} 
                        />
                </section>
                

            </section>

        </div>
    )
}