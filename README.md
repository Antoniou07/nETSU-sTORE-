# Netsu Store — Costa Rica

Tienda web estática con cinco productos, fichas individuales, portadas, galerías y carrito compartido con consulta final por WhatsApp.

## Productos
- P01 Portalatas Pura Vida — `index.html#portalatas` — 7 WebP en `assets/p01-portalatas/`
- T01 Inflador digital — `inflador-digital.html` — 6 PNG en `assets/t01-inflador/`
- T02 Arrancador con compresor — `arrancador-compresor.html` — 5 PNG en `assets/t02-arrancador/`
- T03 Shoe Dryer — `shoe-dryer.html` — 5 PNG en `assets/t03-shoe-dryer/`
- T04 Tabla de flexiones — `tabla-flexiones.html` — 5 PNG en `assets/t04-tabla-flexiones/`

Las portadas de los cinco productos se muestran desde `index.html`. Las fotos T04 se organizaron sin duplicarlas el 6 de noviembre de 2026; el código y `data/products.json` usan rutas PNG definitivas.

WhatsApp: +506 7280-0252. El sitio no procesa pagos automáticamente: confirmar precio, stock, envío y entrega antes de cerrar la compra.

Plan Meta Ads en `planes/`: carrusel de cinco productos, USD 2/día TOTAL (planificado, no activado desde GitHub). El Pixel y cobro con tarjeta aún no constan activos.

URL prevista de Cloudflare: https://netsu-store.juliomfutpo.workers.dev/ — archivos y rutas verificados en GitHub; confirmar en navegador la versión publicada porque no fue posible acceder al dominio desde herramientas externas.

## Catálogo y navegación — 2026-11-06

- `index.html#catalogo` es la nueva vista principal, con cinco tarjetas y fotografías reales.
- Buscador sin dependencias: nombres, palabras clave y descripciones; ignora tildes y mayúsculas.
- Categorías: Todos, Personalizados, Tecnología y auto, Hogar y Fitness.
- Orden: Destacados, precio ascendente, precio descendente, nombre A–Z.
- Los filtros admiten enlaces compartibles (`?buscar=...`, `?categoria=auto`, `?orden=precio-asc`) y un estado vacío con botón para limpiar.
- Las fichas largas y el cotizador de portalatas están dentro de la sección desplegable `#detalle-productos`, pero los enlaces directos `/#portalatas` y `/#carrito` los abren automáticamente.
- Los botones de producto conducen a su ficha particular y a WhatsApp. La portada mantiene el acceso al carrito.
- Recursos de interfaz: `assets/catalogo.css` y `assets/catalogo.js`. No requieren bibliotecas ni servicios externos.
- Para agregar un producto nuevo, actualizar el catálogo de `index.html` (`data-producto-id`, `data-categoria`, `data-orden`, `data-precio`, `data-nombre` y `data-buscar`), su ficha, las imágenes de `assets/` y `data/products.json`. La etiqueta «Todos» se ajusta automáticamente al número de tarjetas.
- **Pendiente de verificación en navegador real:** diseño móvil, búsqueda, cambios de categoría, orden, enlaces directos, carrito y galería. Confirmar un despliegue correcto en Cloudflare antes de afirmar funcionamiento público.
- Se quitó la URL de Instagram atribuida incorrectamente al inflador T01 porque apuntaba a la publicación de portalatas P01. Registrar enlace real específico del inflador cuando el usuario lo aporte.

## Delivery — 2026-11-07
- El carrito ahora pregunta si el cliente quiere delivery a domicilio (para cotizar) u otra opción coordinada.
- El cliente puede indicar provincia, cantón y distrito. Estos datos se incluyen en el mensaje de WhatsApp que genera el carrito.
- El subtotal mostrado corresponde solo a productos, sin envío; no se anuncian cobros automáticos ni tarifas fijas sin comprobar con mensajería/proveedor.
- Se confirmó que las rutas y el JavaScript del carrito se mantienen en GitHub; la publicación externa de Cloudflare y la experiencia en celular necesitan validación visual.
- Una posible reducción de precios o promoción de entrega requiere aprobación del dueño y revisión de costos, márgenes y comisiones, especialmente en productos de ₡7.000–₡9.900.
