# Portafolio Profesional – Tomás Velázquez Nuñez

Este repositorio contiene el código fuente de mi portafolio profesional como desarrollador backend. La aplicación está desarrollada con **React** y **TypeScript**, e implementa estilos personalizados, animaciones, íconos SVG, y funcionalidades como envío de formularios por EmailJS.

## 🌐 Demo en producción

[Ver sitio en línea]() 

---

## 📁 Estructura del Proyecto

```
src/
│
├── components/               # Componentes reutilizables (íconos SVG, Header, Footer, etc.)
├── pages/                    # Páginas principales del portafolio
│   ├── homepage/             # Página de inicio (bienvenida, íconos flotantes)
│   ├── workexperience/       # Sección de experiencia laboral (interactiva)
│   ├── proyects/             # Tarjetas de proyectos personales y profesionales
│   ├── aboutme/              # Información personal y tecnologías dominadas
│   └── contact/              # Formulario de contacto y redes sociales
├── App.tsx                   # Enrutador principal
└── main.tsx                  # Entrada del proyecto
```

---

## 🚀 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tuusuario/portafolio-tomas.git
cd portafolio-tomas
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## 🛠️ Tecnologías Utilizadas

- **React** + **TypeScript**
- **EmailJS** (envío de formularios)
- **Vite** (empacador de módulos)
- **CSS personalizado** y animaciones
- **Íconos SVG** personalizados
- **Modularización por secciones**
- **Responsivo** (Mobile First)

---

## 📌 Funcionalidades por Sección

### 🏠 Home (`/homepage`)
- Bienvenida
- Frase personal
- Botón de CTA para ver proyectos
- Íconos flotantes animados (SVG)

### 🧑‍💼 Experiencia (`/workexperience`)
- Descripción de experiencia en Christian Grangys
- Seis bloques temáticos con íconos y contenido desplegable
- Animaciones al interactuar con cada bloque

### 💼 Proyectos (`/proyects`)
- Tarjetas animadas (flip) con información del proyecto
- Soporte para proyectos con diseño en grid y horizontal
- Tecnologías por proyecto destacadas visualmente

### 🙋‍♂️ Sobre Mí (`/aboutme`)
- Foto de perfil y breve presentación personal
- Botón para descarga de CV
- Íconos sociales
- Tecnologías utilizadas (avanzadas y básicas)

### 📬 Contacto (`/contact`)
- Formulario funcional vía **EmailJS**
- Validación básica en inputs
- Redes sociales y medios de contacto con íconos accesibles
- Animación de fondo y separación visual

---

## 📧 Envío de Formulario

Se utiliza `emailjs-com` para enviar formularios directamente al correo configurado. Las credenciales necesarias están configuradas en el formulario de contacto:

```ts
emailjs.sendForm(
  'service_ID',
  'template_ID',
  formRef,
  'user_public_key'
)
```

> 🔐 Asegúrate de no exponer claves sensibles en producción. Considera moverlas a un `.env` y utilizar Vite para inyectarlas de forma segura.

---

## 📄 Accesibilidad y buenas prácticas

- Etiquetas `aria-label` en enlaces importantes
- `alt` en imágenes
- `rel="noopener noreferrer"` y `target="_blank"` para abrir enlaces externos de forma segura
- Componentes reutilizables y separación por responsabilidad
- `key` únicos en `.map()` para renderizado eficiente

---

## 🔄 Estado del Proyecto

✅ Completado y funcional  
📱 Totalmente responsivo  
📦 Listo para producción (opcionalmente desplegable en Vercel, Netlify, etc.)

---

## 🤝 Contribuciones

Este es un portafolio personal, pero estás invitado a proponer mejoras o ideas abriendo un issue o PR.

---

## © Créditos

Diseñado y desarrollado por **Mateo Velázquez Nuñez**  
Redes sociales: [LinkedIn](https://www.linkedin.com/in/tomás-velázquez-nuñez-b388322a1/), [GitHub](https://github.com/Dafiron)
