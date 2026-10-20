# Cubo AR — 8th Wall Desktop

Proyecto con un cubo turquesa anclado a la tarjeta `cubo-qr`.

## Estado

- Creado en 8th Wall Desktop 1.0.202610122134.0, runtime ECS 3.2.1.
- Compilación de producción verificada y escena revisada en el editor.
- Pendiente: prueba física con la cámara del celular. Aún no se ha validado la calidad del seguimiento en un dispositivo real.
- Dirección de publicación y contenido del QR: https://miguelgzz90.github.io/cubo-ar-8thwall/. Si cambia la dirección, regenerar el QR y reprocesar la tarjeta completa como Image Target.

## Editar

En 8th Wall Desktop, pulsa Open y selecciona esta carpeta, que contiene package.json. En la escena Cubo AR, el objeto Cubo está dentro de Marcador QR.

El cubo tiene lados de 0.48 unidades respecto al marcador y su centro está a Z=0.24, de modo que su base coincide con el plano de la tarjeta. Estas unidades no garantizan un tamaño físico en centímetros. La cámara usa seguimiento de imagen con World Tracking desactivado.

## Probar una vez publicado

1. Imprime `src/assets/marcador-cubo.png` completo, preferentemente de unos 12–15 cm de ancho, o muéstralo en otra pantalla.
2. Escanea el QR con el celular y abre el enlace en Safari o Chrome.
3. Permite el uso de la cámara.
4. Apunta a toda la tarjeta, incluidos los bordes de color. El cubo se muestra al reconocer la imagen y se oculta cuando se pierde su seguimiento.
5. Prueba con buena iluminación y sin reflejos. Comprueba detección inicial, movimiento, pérdida y recuperación del marcador.

Escanear el QR abre la web. El seguimiento de la tarjeta completa ubica el cubo. Otros QR no están registrados como marcadores.

## Compilar

Con Node.js 20.19+:

```sh
npm ci
npm run build
```

La carpeta `dist/` contiene la web compilada. Debe alojarse mediante HTTPS para acceder a la cámara en el celular. Abrir index.html directamente como archivo no es una prueba válida de WebAR. Se necesita Internet para cargar el motor y Landing Page desde jsDelivr.

## Publicación preparada

Repositorio previsto: `MiguelGzz90/cubo-ar-8thwall`.

El workflow `.github/workflows/deploy.yml` compila y despliega desde main. En Settings → Pages, seleccionar GitHub Actions como origen. Subir el proyecto incluyendo `.github/` y `src/.expanse.json`, y excluyendo `node_modules/` y `dist/`.

También puede alojarse el contenido de dist en otro servidor HTTPS. Si cambia la URL, actualizar el QR y reprocesar la tarjeta antes de imprimir.

## Archivos

- `src/.expanse.json`: escena editable y jerarquía del marcador y cubo.
- `src/app.js`: carga del marcador y ayuda visual.
- `src/marker-status.ts`: mensajes de detección y pérdida.
- `src/index.html`: interfaz en español.
- `image-targets/cubo-qr.json`: metadatos generados con la herramienta oficial @8thwall/image-target-cli 1.0.0.

Base: ejemplo oficial de Image Targets de 8th Wall, licencia MIT en LICENSE. El runtime y motor conservan sus licencias correspondientes.

