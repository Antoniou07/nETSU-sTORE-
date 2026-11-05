# Netsu Store — Cloudflare Workers Builds

## Estado verificado 2026-11-05
El repositorio de GitHub `Antoniou07/nETSU-sTORE-`, rama `main`, tiene activa la integración **Cloudflare Workers Builds: netsu-store**. Se detectó una ejecución de compilación automática para el commit de organización de fotos `c0d31947f1c18d124423394911985bd0bf5da2fe`. La publicación final de esa ejecución debe comprobarse en los checks de GitHub / panel Cloudflare antes de afirmar que está en producción.

- URL pública usada históricamente: https://netsu-store.juliomfutpo.workers.dev/
- Página Shoe Dryer: https://netsu-store.juliomfutpo.workers.dev/shoe-dryer.html
- Integración Git: GitHub -> Cloudflare Workers Builds, rama main.
- Check del último commit: https://github.com/Antoniou07/nETSU-sTORE-/commit/c0d31947f1c18d124423394911985bd0bf5da2fe/checks

## Organización de fotos
Consultar `assets/README.md`. Cada producto tiene carpeta: `p01-portalatas`, `t01-inflador`, `t02-arrancador`, `t03-shoe-dryer`; las siete imágenes duplicadas de portalatas que estaban en `_archivo` se eliminaron, conservando las versiones WebP publicadas. Las galerías y portadas ya refieren sus ubicaciones actuales.

## Verificar o corregir un despliegue
1. Entrar a [Cloudflare Workers & Pages](https://dash.cloudflare.com/).
2. Abrir Worker `netsu-store` -> **Settings > Builds** y comprobar el repositorio y la rama main.
3. Consultar el resultado del build en Cloudflare o los checks del commit de GitHub.
4. Si está exitoso, refrescar la URL pública y las páginas de producto, preferiblemente con Ctrl+F5.
5. Si el build falló, revisar logs de Cloudflare antes de volver a subir imágenes o editar código.

## Carrito y pedidos
Carrito en almacenamiento local del navegador, con SKU NETSU-P01, T01, T02 y T03. Pedidos dirigidos por WhatsApp a +506 7280-0252; las existencias y precios finales se confirman antes de cobrar. No registra cobro automático ni reserva inventario. Pixel Meta condicionado a configuración/consentimiento.
