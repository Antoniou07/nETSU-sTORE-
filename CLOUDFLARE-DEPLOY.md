# Netsu Store — Cloudflare Pages

Sitio estático HTML/CSS/JavaScript. El archivo principal es `index.html` en la raíz; las fotos están en `assets/`.

## Configuración
1. Iniciar sesión en Cloudflare y abrir **Workers & Pages**.
2. Crear aplicación → **Pages** → **Connect to Git** (la interfaz puede variar).
3. Autorizar GitHub y seleccionar `Antoniou07/nETSU-sTORE-`.
4. Rama de producción: `main`.
5. Framework preset: **None**.
6. Build command: dejar vacío.
7. Build output directory: `/` (raíz del repositorio; según la interfaz se puede indicar `.`).
8. Publicar y probar la dirección `*.pages.dev` que Cloudflare asigne.
9. Cuando esté comprobada la nueva dirección, dejar de usar la URL de Vercel para anuncios y clientes.

No se necesita Shopify ni un despliegue manual para cada actualización. Los commits a `main` publicarán nuevas versiones automáticamente cuando Cloudflare esté conectado.

## Estado de pedidos
El carrito se guarda localmente en el navegador del comprador y genera un mensaje de WhatsApp. **No es una base de datos ni reserva inventario.** El vendedor confirma existencias, precio final y envío antes de enviar un enlace de cobro manual de Pagadito. No marcar pagado sin verificar la transacción en Pagadito.

## Siguientes integraciones
- Inventario y pedidos centralizados: Google Sheets o base de datos + endpoint seguro; nunca exponer credenciales en `index.html`.
- Pagos: enlaces manuales al principio. Una futura integración automática requerirá backend y confirmación segura del pago.
- Meta Pixel: agregar ID real y revisar consentimiento, política de privacidad y eventos antes de activar publicidad de conversiones.
