# Organización de imágenes de Netsu Store

Cada producto tiene su propia carpeta. Las imágenes de la tienda están organizadas sin copias redundantes de los siete artes de portalatas. Los WebP optimizados son las versiones en uso.

- P01 portalatas: `assets/p01-portalatas/` — foto de portada, cinco colores, tabla de precios
- T01 inflador: `assets/t01-inflador/` — seis fotografías, `01_portada.png` como principal
- T02 arrancador: `assets/t02-arrancador/` — cinco fotografías, `01_portada.png` como principal
- T03 Shoe Dryer: `assets/t03-shoe-dryer/` — cinco fotografías, `01_portada.png` como principal
- Eliminada la carpeta temporal `assets/_archivo/`: sus siete PNG eran versiones originales de la misma portada, tabla de precios y cinco colores P01 ya conservados en WebP. Los archivos originales siguen recuperables en el historial de Git.

La página principal y las fichas se refieren a las carpetas anteriores. Para el próximo producto, crear `assets/t04-masajeador/` solamente cuando tengamos imágenes finales y ficha aprobada; no generar archivos vacíos por adelantado.

Todas las publicaciones de Facebook/Instagram existentes permanecen enlazadas desde las fichas. El enlace de la publicación de Instagram T03 sigue pendiente. La verificación de despliegue externo Cloudflare se realiza aparte.
