# 🚀 Guía Rápida de Despliegue en Cloudflare Pages

## Opción Más Rápida: Drag & Drop (5 minutos)

1. Ve a [https://pages.cloudflare.com/](https://pages.cloudflare.com/)
2. Inicia sesión o crea una cuenta gratuita
3. Click en **"Upload assets"** o **"Create a project"** → **"Direct Upload"**
4. Arrastra la carpeta completa `medicar` (o crea un ZIP primero)
5. Click en **"Deploy site"**
6. ¡Listo! Tu sitio estará disponible en `https://nombre-proyecto.pages.dev`

---

## Opción Recomendada: Conectar con GitHub

### Paso 1: Sube el código a GitHub

```bash
# Inicializar repositorio
cd medicar
git init
git add .
git commit -m "Sitio web Medicar Electronic"

# Crear repositorio en GitHub (https://github.com/new)
# Luego conecta:
git remote add origin https://github.com/TU-USUARIO/medicar.git
git branch -M main
git push -u origin main
```

### Paso 2: Conecta Cloudflare Pages

1. En [Cloudflare Dashboard](https://dash.cloudflare.com/) ve a **Workers & Pages**
2. Click **"Create application"** → **"Pages"** → **"Connect to Git"**
3. Autoriza a Cloudflare para acceder a GitHub
4. Selecciona el repositorio `medicar`
5. Configuración:
   - **Production branch:** `main`
   - **Build command:** (dejar vacío)
   - **Build output directory:** `/`
6. Click **"Save and Deploy"**

### Paso 3: Dominio personalizado (Opcional)

1. En tu proyecto de Cloudflare Pages, ve a **Custom domains**
2. Click **"Set up a custom domain"**
3. Ingresa tu dominio (ej: `medicarelectronic.com`)
4. Cloudflare configurará automáticamente los DNS

---

## ⚠️ Datos que DEBES actualizar antes del despliegue

Abre cada archivo HTML y reemplaza estos placeholders:

| Placeholder | Reemplazar con | Archivos |
|-------------|---------------|----------|
| `+584145550000` | Tu número de WhatsApp | `index.html`, `pages/*.html`, `js/main.js` |
| `+582615550000` | Tu número fijo | `index.html`, `pages/*.html` |
| `0261-555-0000` | Tu número fijo formato corto | `index.html`, `pages/*.html` |
| `info@medicarelectronic.com` | Email real | `index.html`, `pages/*.html` |
| `ventas@medicarelectronic.com` | Email de ventas | `index.html` |
| `J-XXXXXXXX-X` | RIF real | `index.html` |
| `medicarelectronic.com` | Tu dominio | `sitemap.xml`, `robots.txt` |
| `href="#"` en redes sociales | URLs reales | `index.html`, `pages/*.html` |

---

## 🗺️ Integrar Google Maps (Opcional)

En `index.html`, busca el bloque `<div class="location-map">` y reemplázalo por:

```html
<div class="location-map">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.123456789!2d-71.636789!3d10.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM5JzE1LjYiTiA3McKwMzgnMTIuNCJX!5e0!3m2!1ses!2sve!4v1234567890"
        width="100%" 
        height="500" 
        style="border:0; border-radius: 1rem;" 
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>
```

Para obtener tu código de embed:
1. Ve a [Google Maps](https://maps.google.com)
2. Busca tu dirección
3. Click en **Compartir** → **Insertar un mapa** → Copia el HTML

---

## 🎨 Personalización Rápida

### Cambiar colores principales
En `css/styles.css`, busca:
```css
:root {
    --primary: #dc2626;      /* Color principal (rojo) */
    --secondary: #1e3a8a;    /* Color secundario (azul) */
    --accent: #f59e0b;       /* Color de acento (naranja) */
}
```

### Agregar más productos
En `js/main.js`, busca el array `products` y agrega más objetos con esta estructura:
```javascript
{
    id: 13,
    title: 'Nombre del producto',
    category: 'motor', // motor, electrico, frenos, suspension, accesorios
    badge: 'Nuevo', // opcional: 'Nuevo', 'Oferta', 'Más vendido', etc.
    description: 'Descripción del producto',
    price: '$XX.XX',
    icon: 'fa-nombre-icono' // Ícono de FontAwesome
}
```

---

## ✅ Checklist Final

- [ ] Actualizar todos los teléfonos
- [ ] Actualizar correos electrónicos
- [ ] Actualizar RIF
- [ ] Reemplazar enlaces de redes sociales
- [ ] Integrar Google Maps
- [ ] Agregar logo real (reemplazar ícono)
- [ ] Agregar imágenes reales de productos
- [ ] Actualizar dominio en `sitemap.xml` y `robots.txt`
- [ ] Probar formulario de contacto
- [ ] Probar botón de WhatsApp
- [ ] Verificar responsive en móvil
- [ ] Desplegar en Cloudflare

---

## 📞 Soporte

Si necesitas ayuda adicional:
- **Documentación Cloudflare Pages:** [https://developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Comunidad Cloudflare:** [https://community.cloudflare.com](https://community.cloudflare.com)

¡Éxito con tu sitio web! 🚗💨
