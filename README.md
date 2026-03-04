# 🚀 Sabra Agency - Landing Page Premium

**Tu negocio funcionando sin depender de ti**

Landing page premium en modo oscuro para Sabra Agency, especializada en automatización con IA para el sector de hostelería.

---

## 📋 Descripción del Proyecto

Esta landing page corporativa está diseñada para mostrar los servicios de automatización inteligente de Sabra Agency. Cuenta con:

- ✨ **Diseño Dark Luxury** con estética futurista
- 🎨 **Color principal:** Azul Eléctrico (#3B82F6)
- 🔄 **Flip Cards interactivas** para servicios
- 🌟 **Animaciones premium** (glassmorphism, partículas, efectos 3D)
- 📱 **100% Responsive** (Desktop → Tablet → Mobile)
- ⚡ **Performance optimizado**

---

## 🎨 Paleta de Colores

### Fondos
- **Primary:** `#000000` (Negro puro)
- **Secondary:** `#09090B` (Gris ultra oscuro)
- **Tertiary:** `#18181B` (Gris oscuro para cards)

### Color Principal (Electric Blue)
- **50:** `#EFF6FF`
- **100:** `#DBEAFE`
- **200:** `#BFDBFE`
- **300:** `#93C5FD`
- **400:** `#60A5FA` (Hover states)
- **500:** `#3B82F6` ⭐ **COLOR BASE**
- **600:** `#2563EB` (Botones activos)
- **700:** `#1D4ED8` (Gradientes profundos)
- **800:** `#1E40AF`
- **900:** `#1E3A8A`

### Textos
- **Primary:** `#FFFFFF` (Blanco puro)
- **Secondary:** `#E4E4E7` (Gris muy claro)
- **Tertiary:** `#A1A1AA` (Gris medio)
- **Quaternary:** `#71717A` (Gris para labels)

### Acentos
- **Success:** `#22C55E` (Verde)
- **Info:** `#3B82F6` (Azul)
- **Warning:** `#F59E0B` (Naranja)

---

## 📁 Estructura de Archivos

```
LANDING ANT/
├── index.html          # Estructura HTML completa
├── styles.css          # Todos los estilos (glassmorphism, flip cards, responsive)
├── script.js           # Interacciones y animaciones
└── README.md           # Este archivo
```

---

## 🎯 Secciones Incluidas

### 1. **Navbar Sticky**
- Logo SVG animado
- Links de navegación con efecto underline
- Botón CTA destacado
- Menú hamburguesa para mobile
- Efecto blur al hacer scroll

### 2. **Hero Section (100vh)**
- Título principal con gradient text
- Subtítulo descriptivo
- 2 CTAs (primario + secundario)
- Estadísticas animadas (87%, 24/7, 150+)
- Esfera 3D con anillos flotantes
- Sistema de partículas de fondo

### 3. **Social Proof**
- Logos de clientes (placeholder)
- Efecto hover con colorización

### 4. **Servicios (6 Flip Cards)**
Cada card incluye:
- **Lado frontal:** Icono SVG + Título
- **Lado trasero:** Descripción + Feature tags
- **Animación:** Flip 3D de 180° al hover
- **Mobile:** Tap para flip

**Servicios incluidos:**
1. Gestión de Reservas IA
2. Control de Inventario
3. Marketing Automático
4. Análisis Predictivo
5. Gestión de Personal
6. Reportes Financieros

### 5. **Beneficios (4 Cards)**
1. Ahorro de Tiempo
2. Reducción de Costes
3. Escalabilidad
4. Soporte 24/7

### 6. **CTA Final**
- Título impactante
- Subtítulo con beneficio
- Botón grande con glow pulsante
- Nota con checkmarks

### 7. **Footer Completo**
- Logo + descripción
- 4 columnas de links
- Copyright + links legales

---

## ✨ Efectos y Animaciones

### Animaciones de Carga
- **Hero title:** Fade-in-up con delay escalonado
- **CTA buttons:** Scale-in con bounce
- **3D sphere:** Fade-in-rotate
- **Service cards:** Stagger de 100ms entre cards

### Animaciones en Loop
- **Esfera 3D:** Flotación suave (6s)
- **Anillos:** Rotación continua (20s, 30s, 40s)
- **Partículas:** Movimiento aleatorio (15-25s)
- **Botón CTA:** Pulse glow (3s)
- **Gradientes:** Shift de posición (4s)

### Scroll Animations
- **Intersection Observer** para reveal de secciones
- **Parallax** en esfera del hero (0.3x velocidad)
- **Contador animado** en estadísticas

### Hover States
- **Glass cards:** Translatey(-4px) + glow
- **Botones:** Scale(1.02) + brightness
- **Nav links:** Underline animado
- **Service icons:** RotateY(15deg) + scale(1.1)

---

## 📱 Responsive Breakpoints

### Desktop XL (>1440px)
- Layout completo, máximo esplendor

### Desktop (1024px - 1439px)
- Ajustes menores de espaciado

### Tablet (768px - 1023px)
- Services grid: 2 columnas
- Hero: 1 columna (visual arriba)
- Esfera: 300px

### Mobile (<767px)
- Services grid: 1 columna
- Benefits grid: 1 columna
- Footer: 1 columna
- Menú hamburguesa
- Esfera: 200px
- Partículas reducidas (20 en vez de 50)
- Flip cards: Tap para activar

---

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Abre `index.html` en tu navegador
2. ¡Listo! La web funciona sin servidor

### Opción 2: Con servidor local (recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con VS Code
# Instala "Live Server" extension y haz clic derecho > "Open with Live Server"
```

Luego abre: `http://localhost:8000`

---

## 🎨 Personalización

### Cambiar el color principal
En `styles.css`, busca las variables CSS y modifica la escala de `--primary-*`:

```css
:root {
    --primary-500: #TU_COLOR_AQUI;
    /* Genera el resto de la escala con herramientas como:
       https://uicolors.app/create */
}
```

### Añadir imágenes reales
Actualmente la web usa **iconos SVG** y **efectos CSS** en lugar de imágenes. Para añadir imágenes:

1. Crea carpeta `/images/`
2. Añade tus imágenes:
   - `logo.png` (512x512px)
   - `hero_visual.png` (1200x1200px)
   - `service_1.png` a `service_6.png` (800x600px)

3. Reemplaza en `index.html`:
```html
<!-- Logo en navbar -->
<img src="images/logo.png" alt="Sabra Agency" height="40">

<!-- Hero visual -->
<img src="images/hero_visual.png" alt="Hero" class="hero-image">

<!-- Service cards (lado frontal) -->
<img src="images/service_1.png" alt="Servicio" class="service-image">
```

### Modificar textos
Todos los textos están en `index.html`. Busca y reemplaza:
- Títulos: `<h1>`, `<h2>`, `<h3>`
- Descripciones: `<p>`
- CTAs: `<a>` con clase `.btn-primary`

### Añadir más servicios
Duplica un bloque `.service-card-flip` en `index.html` y modifica:
- Icono SVG
- Título (front y back)
- Descripción
- Feature tags

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados (Grid, Flexbox, Animations, Backdrop-filter)
- **JavaScript (Vanilla)** - Interacciones sin dependencias
- **Google Fonts** - Plus Jakarta Sans + Inter
- **SVG** - Iconos y logo vectoriales

**Sin frameworks ni librerías externas** = Carga ultra rápida ⚡

---

## ⚡ Performance

### Optimizaciones incluidas
- ✅ Fuentes preconnect
- ✅ CSS con `will-change` para animaciones
- ✅ Intersection Observer (lazy animations)
- ✅ Debounce en eventos de scroll/resize
- ✅ Partículas reducidas en mobile
- ✅ SVG en vez de imágenes PNG/JPG

### Métricas esperadas
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s
- **Lighthouse Score:** >90

---

## 📧 Contacto

Para personalizar esta landing page o solicitar servicios de automatización:

- **Email:** contacto@sabraagency.com
- **Teléfono:** +34 900 000 000
- **Ubicación:** Barcelona, España

---

## 📄 Licencia

© 2026 Sabra Agency. Todos los derechos reservados.

---

## 🎯 Próximos Pasos Sugeridos

1. **Añadir imágenes reales** (logo + servicios + hero)
2. **Integrar formulario de contacto** con backend
3. **Añadir Google Analytics** para tracking
4. **Implementar SEO avanzado** (meta tags, schema.org)
5. **Crear sección de casos de éxito** con datos reales
6. **Añadir testimonios** de clientes reales
7. **Integrar chatbot** o WhatsApp Business
8. **Optimizar para Core Web Vitals**

---

**¡Tu landing page premium está lista! 🚀**

Diseñada con ❤️ para impresionar desde el primer segundo.
