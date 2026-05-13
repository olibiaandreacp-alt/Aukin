# Aukin — Landing Page Estática

Landing page de Aukin lista para GitHub Pages. Sin backend, sin frameworks, solo HTML + CSS + JS.

## Estructura

```
/
├── index.html      # Página principal
├── style.css       # Estilos
├── script.js       # Lógica: i18n, contador, FAQ, animaciones
├── assets/         # Imágenes y recursos (vacío por ahora)
└── README.md
```

## Cómo subir a GitHub Pages

1. Crea un repositorio en GitHub (ej. `aukin-landing`)
2. Sube todos los archivos a la rama `main`
3. Ve a **Settings → Pages**
4. En "Source" selecciona `Deploy from a branch`
5. Selecciona la rama `main` y carpeta `/ (root)`
6. Guarda — en unos minutos estará en `https://tuusuario.github.io/aukin-landing`

## Funcionalidades

- **i18n**: ES / EN / ZH / JA (el idioma se guarda en localStorage)
- **Contador persistente**: usa localStorage, no se reinicia entre visitas
- **Botón "Apoyar Proyecto"**: incrementa el contador sin necesidad de email
- **Formulario waitlist**: registra el email localmente y evita duplicados
- **FAQ accordion**: animado, accesible
- **Scroll reveal**: animaciones al hacer scroll
- **Responsive**: mobile y desktop

## Cambiar el número inicial del contador

En `script.js`, línea 3:
```js
const BASE_COUNT = 1284;
```
Cámbialo al número que quieras. Solo afecta a usuarios nuevos; los que ya visitaron la página conservan su valor guardado en localStorage.

## Personalización rápida

- Colores: variables CSS en `style.css` bajo `:root`
- Textos: objeto `translations` en `script.js`
- Fuentes: importadas de Google Fonts en `index.html`
