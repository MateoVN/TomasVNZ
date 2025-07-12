import React, { useState } from "react"
import { CodeCircle02, CodeCircle03, Fecha, HomeHashtag} from "../../components/Icons"
import { IteractiveElement } from "./IteractiveElement"
import { splitExperienceItems } from "./ExperienceItems";
import styles from "./workexperience.module.css"

// Definición del tipo para controlar qué elementos están abiertos
interface element {
    GestióndeVehículos: boolean;
    GestióndeClientes: boolean;
    GestióndeVentas: boolean;
    Creacióndebasededatos: boolean;
    GestióndeUsuarios: boolean;
    GestióndeProductos: boolean;
}

// Alias para las claves de color (que también coinciden con los identificadores únicos)
export type ElementColor =
  | "GestióndeVehículos"
  | "GestióndeClientes"
  | "GestióndeVentas"
  | "Creacióndebasededatos"
  | "GestióndeUsuarios"
  | "GestióndeProductos";



export function WorkExperience () {

    // Estado que controla qué secciones están abiertas
    const [elementIsOpen, setElementIsOpen] = useState<element>({
        GestióndeVehículos: false,
        GestióndeClientes: false,
        GestióndeVentas: false,
        Creacióndebasededatos: false,
        GestióndeUsuarios: false,
        GestióndeProductos: false,
    })
    // Dividimos los ítems en dos columnas para la presentación
    const [firstColItems, secondColItems] = splitExperienceItems();

    // Función que alterna el estado abierto/cerrado de una sección
    function handleToggle(key: ElementColor) {
        setElementIsOpen((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    }

  return(
    <div id="work" className={styles.wrapper}>
        <section className={styles.container}>

        {/* Título con íconos decorativos animados */}
        <div className={styles.title}>
            <div className={styles.rotateClockwise}>
                <CodeCircle02 />
            </div>
            <h2>Experiencia en el Sector</h2>
            <div className={styles.rotateCounter}>
                <CodeCircle03 />
            </div>
        </div>

        {/* Fecha del trabajo y link de referencia */}
        <div className={styles.dateLink}>
            <div className={styles.date}>
                <Fecha dateText="Julio 2024 - Febrero 2025"/>
            </div>
            <a 
                href="https://christiangrangys.com/" 
                className={styles.link}
                aria-label="Enlace hacia Christian Grangys"
                target="_blank" 
                rel="noopener noreferrer">
                <HomeHashtag/>
                <p> Inico- Christian Grangys Mar del Plata</p>
            </a>
        </div>

        {/* Descripción general del proyecto */}
        <div className={styles.description}>
            <p>Desarrollé el Backend de una aplicación web de gestión, para la distribuidora de alimentos congelados "Crystian Grangys", que incluyó:</p>
        </div>

        {/* Elementos interactivos distribuidos en dos columnas */}
        <div className={styles.elements}>

            <div className={styles.elementsSection}>
                {firstColItems.map(item => (
                    <IteractiveElement
                    key={`${item.key}-1`}
                    icon={React.cloneElement(item.icon, {
                        height: elementIsOpen[item.key] ? 35 : 30,
                        width: elementIsOpen[item.key] ? 35 : 30,
                    })}
                    subTitle={item.subTitle}
                    content={item.content}
                    isOpen={elementIsOpen[item.key]}
                    onToggle={() => handleToggle(item.key)}
                    colorElementsClasses={item.key}
                    />
                ))}
            </div>

            <div className={styles.elementsSection}>
                {secondColItems.map(item => (
                    <IteractiveElement
                    key={`${item.key}-2`}
                    icon={React.cloneElement(item.icon, {
                        height: elementIsOpen[item.key] ? 35 : 30,
                        width: elementIsOpen[item.key] ? 35 : 30,
                    })}
                    subTitle={item.subTitle}
                    content={item.content}
                    isOpen={elementIsOpen[item.key]}
                    onToggle={() => handleToggle(item.key)}
                    colorElementsClasses={item.key}
                    />
                ))}
            </div>
        </div>
        </section>
    </div>
  )
}