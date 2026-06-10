# Hacienda Transparente - Frontend del Prototipo

Este es el prototipo de la aplicación web interactiva de **Hacienda Transparente**, desarrollada con HTML5, CSS3 y JavaScript nativo.

---

## 🚀 Cómo Iniciar el Servidor Local (Desarrollo)

Para ejecutar la aplicación localmente en tu computadora evitando restricciones de seguridad del navegador (como bloqueos de CORS al llamar a la API de Gemini):

1. **Instalar Dependencias** (solo es necesario la primera vez):
   Abre una terminal en esta carpeta y ejecuta:
   ```bash
   npm install
   ```
   *Nota para Windows (PowerShell):* Si te aparece un error de seguridad sobre "ejecución de scripts deshabilitada", utiliza este comando alternativo:
   ```bash
   npm.cmd install
   ```

2. **Iniciar el Servidor de Desarrollo**:
   Ejecuta el siguiente comando para levantar el servidor local:
   ```bash
   npm run dev
   ```
   *Nota para Windows (PowerShell):* Si te da el mismo error de ejecución de scripts, inicia el servidor con:
   ```bash
   npm.cmd run dev
   ```

3. **Abrir en el Navegador**:
   Una vez iniciado, abre la URL que aparece en la terminal (usualmente `http://localhost:5173`).

---

## 🌐 Despliegue en GitHub Pages (Producción)

**¿Servirá Vite en GitHub Pages?**
Sí, pero **no necesitas subir ni ejecutar Vite en GitHub Pages**. 

GitHub Pages es un servidor de archivos estáticos. Dado que escribimos código HTML, CSS y JS nativo directo, no requiere compilación obligatoria.

### ¿Cómo subirlo?
Puedes configurar tu repositorio en GitHub para servir la carpeta directamente. Cuando los usuarios visiten tu sitio web de GitHub Pages (ej. `tuusuario.github.io/tu-repositorio/`), su propio navegador descargará el HTML, CSS y JS y ejecutará la aplicación de forma nativa, segura y gratuita, sin necesidad de servidores activos en la nube.
