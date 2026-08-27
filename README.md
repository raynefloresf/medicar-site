# Medicar Electronic C.A. - Sitio Web Comercial

Sitio web comercial para **Medicar Electronic C.A.**, empresa dedicada a la venta de repuestos automotrices al mayor y detal en Maracaibo, Estado Zulia, Venezuela.

> *"El médico de tu vehículo"*

## 📋 Información de la Empresa

- **Razón Social:** Medicar Electronic C.A.
- **Propietario:** Ing. Yonathan Reyes
- **Ubicación:** Avenida Delicias, Maracaibo, Zulia (Al lado de la Funeraria El Carmen)
- **Rubro:** Venta de repuestos automotrices al mayor y detal

---

## 🚀 Estructura del Proyecto

```
medicar/
├── index.html                # Página principal (Home)
├── pages/
│   ├── productos.html        # Catálogo de productos
│   └── contacto.html         # Página de contacto
├── css/
│   └── styles.css            # Estilos principales
├── js/
│   └── main.js               # Interactividad y lógica
├── images/                   # Carpeta para imágenes (vacía por ahora)
├── robots.txt                # SEO - Crawlers
├── sitemap.xml               # SEO - Mapa del sitio
└── README.md                 # Este archivo
```

---

## 🌐 Despliegue en Cloudflare Pages

### Opción 1: Despliegue Directo desde Git (Recomendado)

1. **Crear repositorio en GitHub**
   ```bash
   cd medicar
   git init
   git add .
   git commit -m "Initial commit - Medicar Electronic website"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/medicar.git
   git push -u origin main
   ```

2. **Conectar con Cloudflare Pages**
   - Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Selecciona **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Selecciona tu repositorio `medicar`
   - Configuración de build:
     - **Framework preset:** None
     - **Build command:** (dejar vacío)
     - **Build output directory:** `/` (raíz)
   - Click en **Save and Deploy**

3. **Configurar dominio personalizado** (Opcional)
   - En la sección **Custom domains** de tu proyecto en Cloudflare
   - Click en **Set up a custom domain**
   - Ingresa tu dominio (ej: `medicarelectronic.com`)
   - Sigue las instrucciones para actualizar los DNS

### Opción 2: Despliegue Directo con Wrangler CLI

```bash
# Instalar Wrangler
npm install -g wrangler

# Login en Cloudflare
wrangler login

# Desplegar
wrangler pages deploy . --project-name=medicar-electronic
```

### Opción 3: Drag & Drop

1. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click en **Create a project** → **Direct Upload**
3. Arrastra toda la carpeta `medicar`
4. Click en **Deploy site**

---

## ⚙️ Configuración Necesaria

### 1. Datos de Contacto
Actualiza en todos los archivos HTML y JS los siguientes datos:

- **Teléfonos:** Busca `+584145550000` y `0261-555-0000` y reemplázalos
- **Email:** Busca `info@medicarelectronic.com` y reemplázalo
- **RIF:** Busca `J-XXXXXXXX-X` y reemplázalo con el RIF real
- **Redes sociales:** Reemplaza los enlaces `#` en los íconos sociales

### 2. Dominio
Actualiza en `sitemap.xml` y `robots.txt`:
- Reemplaza `medicarelectronic.com` con tu dominio real

### 3. Mapa
Para integrar Google Maps, reemplaza el bloque `.location-map` en `index.html` por:
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=TU_CODIGO_DE_MAPA" 
  width="100%" 
  height="500" 
  style="border:0; border-radius: 1rem;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

---

## 🎨 Personalización

### Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary: #dc2626;      /* Rojo principal */
    --secondary: #1e3a8a;    /* Azul corporativo */
    --accent: #f59e0b;       /* Naranja/dorado */
}
```

### Logo
Para personalizar el logo, edita el bloque `.logo` en los archivos HTML y reemplaza el ícono `fa-car-crash` por el logo de tu empresa (puede ser una imagen).

### Productos
Edita el array `products` en `js/main.js` para agregar, modificar o eliminar productos del catálogo.

---

## 📱 Características Implementadas

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Menú hamburguesa móvil
- ✅ Hero section con estadísticas animadas
- ✅ Catálogo de productos con filtros por categoría
- ✅ Búsqueda de productos (en página productos.html)
- ✅ Formulario de contacto integrado con WhatsApp
- ✅ Botón flotante de WhatsApp
- ✅ Botón "Volver arriba"
- ✅ Navegación smooth scroll
- ✅ Animaciones al hacer scroll
- ✅ SEO optimizado (meta tags, sitemap, robots.txt)
- ✅ Integración con FontAwesome (íconos)
- ✅ Google Fonts (Montserrat + Open Sans)

---

## 📞 Datos de Contacto para Actualizar

⚠️ **IMPORTANTE:** Antes de desplegar, actualiza estos datos:

- [ ] Número de WhatsApp real
- [ ] Número de teléfono fijo
- [ ] Correo electrónico
- [ ] RIF de la empresa
- [ ] Enlaces a redes sociales reales
- [ ] Coordenadas del mapa
- [ ] Dominio personalizado

---

## 📄 Licencia

© 2025 Medicar Electronic C.A. - Todos los derechos reservados.

Desarrollado para uso comercial de la empresa.
