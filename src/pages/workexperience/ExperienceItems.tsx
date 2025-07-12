// ExperienceItems.ts

// Importamos tipos necesarios y los íconos personalizados
import { JSX } from "react";
import {
  ClientIcon,
  DatabaseIcon,
  ProductIcon,
  SalesIcon,
  UserIcon,
  VehicleIcon,
} from "../../components/Icons";
// Importamos el classname que asigna el color a cada item, ya que lo utilizaremos tambien como clave ya que son unicos
import { ElementColor } from "./WorkExperience"; 

export interface ExperienceItem {
  key: ElementColor;       // Clave única que puede estar ligada al color o categoría
  subTitle: string;        // Título descriptivo mostrado en la UI
  icon: JSX.Element;       // Ícono representativo de la categoría
  content: JSX.Element;    // Contenido HTML a mostrar (puede incluir listas anidadas)
}
// Lista de experiencias a mostrar (orden importa si se usa con splitExperienceItems)
export const experienceItems: ExperienceItem[] = [
  {
    key: "GestióndeVehículos",
    subTitle: "Gestión de Vehículos",
    icon: <VehicleIcon />,
    content: (
      <ul>
        <li>
          Creación de vehículos:
          <ul>
            <li>Información básica</li>
            <li>Sobrepeso</li>
            <li>Stock interno</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    key: "GestióndeClientes",
    subTitle: "Gestión de Clientes",
    icon: <ClientIcon />,
    content: (
      <ul>
        <li>Creación de una base de datos de clientes</li>
        <li>Deudores</li>
        <li>Gestión de riesgos por impago</li>
      </ul>
    ),
  },
  {
    key: "GestióndeVentas",
    subTitle: "Gestión de Ventas",
    icon: <SalesIcon />,
    content: (
      <ul>
        <li>Creación de base de datos de ventas</li>
        <li>Gestión de pedidos</li>
        <li>Asignación de pedidos a operarios</li>
        <li>Gráficos de rendimiento diario, semanal y mensual</li>
      </ul>
    ),
  },
  {
    key: "Creacióndebasededatos",
    subTitle: "Creación de base de datos",
    icon: <DatabaseIcon />,
    content: (
      <ul>
        <li>La misma fue construida en MySQL</li>
      </ul>
    ),
  },
  {
    key: "GestióndeUsuarios",
    subTitle: "Gestión de Usuarios",
    icon: <UserIcon />,
    content: (
      <ul>
        <li>Administrador y operario</li>
        <li>Contraseñas seguras</li>
        <li>Login con tokens y roles</li>
      </ul>
    ),
  },
  {
    key: "GestióndeProductos",
    subTitle: "Gestión de Productos",
    icon: <ProductIcon />,
    content: (
      <ul>
        <li>
          Lista de productos dinámica:
          <ul>
            <li>Stock</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

// Función que divide la lista en dos mitades, ultil para el diseño
export function splitExperienceItems(): [ExperienceItem[], ExperienceItem[]] {
  const firstHalf = experienceItems.slice(0, 3);
  const secondHalf = experienceItems.slice(3);
  return [firstHalf, secondHalf];
}