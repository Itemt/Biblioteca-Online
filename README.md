```markdown
# Biblioteca Online 📚

**Biblioteca Online** es una aplicación web desarrollada en **TypeScript** que permite registrar, visualizar y eliminar libros utilizando el almacenamiento local del navegador (`localStorage`).  
Está enfocada en aplicar buenas prácticas de programación orientada a objetos y estructura modular en el desarrollo web.

## 🚀 Funcionalidades

- 📘 Registrar libros con título, autor, año y género.
- 📋 Mostrar una lista de libros almacenados.
- 🗑️ Eliminar libros individualmente desde la interfaz.
- 💾 Guardado de datos usando `localStorage`, sin necesidad de backend.
- 🧼 Validación básica de los campos del formulario.
- 💡 Código limpio, organizado y fácil de mantener gracias a TypeScript.

## 🧰 Tecnologías utilizadas

- TypeScript
- HTML5
- CSS3
- localStorage

## 📁 Estructura del Proyecto

```plaintext
📁 Biblioteca-Online/
├── index.html
├── css/
│   └── estilos.css
├── ts/
│   ├── app.ts
│   └── modelos/
│       └── Libro.ts
├── dist/
│   └── app.js (generado automáticamente)
└── README.md
```

## 🧪 Cómo ejecutar el proyecto

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Itemt/Biblioteca-Online.git
   ```

2. Instala TypeScript si aún no lo tienes:

   ```bash
   npm install -g typescript
   ```

3. Compila el proyecto:

   ```bash
   tsc
   ```

4. Abre `index.html` en tu navegador.

> El archivo `app.js` será generado automáticamente en la carpeta `dist/` al compilar el proyecto.

## ✅ Posibles mejoras

- Filtros de búsqueda por título o autor.
- Ordenamiento por fecha o alfabéticamente.
- Exportar e importar libros en formato JSON.
- Adaptar el diseño para dispositivos móviles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. 

---

¿Quieres convertir esta app en un proyecto más completo con backend, login o base de datos? ¡Te puedo ayudar!
```
