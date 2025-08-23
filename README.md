# Gestión de Unidades de Bomberos

Una aplicación web para la gestión de unidades y personal de un cuerpo de bomberos, inspirada en un sistema del mundo real. Permite visualizar el estado de las unidades, asignar oficiales y gestionar las asignaciones de personal en diferentes estaciones y zonas.

Este proyecto está construido con React y TypeScript, utilizando Tailwind CSS para los estilos. Se ejecuta completamente en el navegador sin un paso de compilación, utilizando módulos ES cargados desde una CDN.

## Características

- **Panel de Unidades:** Visualiza todas las unidades del cuerpo de bomberos agrupadas por zona y estación.
- **Seguimiento de Estado:** Las unidades están codificadas por colores según su estado (En Servicio, Fuera de Servicio, Reserva, etc.).
- **Asignación de Personal:** Asigna un oficial a cargo y un número de personal a cada unidad.
- **Actualizaciones de Estado:** Cambia el estado de cualquier unidad y proporciona un motivo si está fuera de servicio.
- **Gestión de Personal:** Un modal dedicado para agregar, editar y eliminar registros de personal.
- **Nomenclador de Unidades:** Una lista con capacidad de búsqueda de todas las unidades del sistema.
- **Diseño Responsivo:** La interfaz está diseñada para funcionar en varios tamaños de pantalla.

## Cómo Ejecutarlo

Dado que este proyecto no requiere un proceso de compilación, puedes ejecutarlo directamente en tu navegador web.

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en un navegador web moderno (como Chrome, Firefox o Edge).

¡Eso es todo! La aplicación se cargará y estará lista para usar.

## Estructura del Proyecto

El proyecto está organizado en los siguientes directorios principales:

```
/
├── index.html          # El punto de entrada HTML principal
├── metadata.json       # Metadatos del proyecto
├── package.json        # Definición del proyecto y dependencias
├── README.md           # Este archivo
├── .gitignore          # Archivos a ser ignorados por Git
└── src/                # Todo el código fuente
    ├── App.js             # Componente principal de la aplicación
    ├── index.js           # Renderizado de la raíz de React
    ├── types.js            # Definiciones de tipos de TypeScript
    ├── components/         # Componentes de React reutilizables
    └── data/               # Datos de prueba para la aplicación
```