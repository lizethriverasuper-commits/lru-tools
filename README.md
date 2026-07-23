[README.md](https://github.com/user-attachments/files/30311808/README.md)
# LRU Tools — Recetario

App de recetario multi-cliente con acceso por PIN, para LRU Consultoría.
Incluye foto por plato y precarga automática de los 54 platos de Barra Maretazo.

## Archivos (los 3 deben subirse juntos, en la raíz del repositorio)
- `index.html` — estructura de la app
- `app.js` — lógica (PINs, formulario, fotos, exportación, panel admin)
- `firebase-init.js` — conexión a Firebase (proyecto: lru-diagnostico-legal), carga como módulo ES

## Cómo publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub llamado `lru-tools`
2. Sube los 3 archivos a la raíz del repositorio (deben estar juntos, en el mismo nivel)
3. Ve a Settings → Pages → Branch: main → Save
4. Tu link será: `https://TU-USUARIO.github.io/lru-tools/`

## Acceso
- **Clientes**: ingresan con su PIN de 4 dígitos (lo creas tú desde el panel admin)
- **Administrador (tú)**: ícono ⚙️ abajo a la derecha del login → clave: `LRU2026`

## Cliente "Barra Maretazo"
Si creas un cliente escribiendo el nombre EXACTO "Barra Maretazo", se precargan
automáticamente sus 54 platos (ceviches, tiraditos, arroces, etc.) con ingredientes
y categorías ya definidas. El cliente solo necesita completar cantidades, pasos y fotos.
Cualquier otro nombre de cliente empieza con su recetario vacío.

## Fotos
Cada receta puede llevar una foto del plato. Se comprime automáticamente a 900px de
ancho antes de subirse. Las fotos se guardan en **Firebase Storage** (no en Firestore),
así que no afectan el límite de 1MB por documento que usa el resto de la app.

## Base de datos
- **Firestore**: colección `recetario_lru` — clientes, PINs, recetas (texto), logos de marca
- **Storage**: carpeta `recetario_lru/{clienteId}/{recetaId}.jpg` — fotos de los platos

Ambos en el proyecto `lru-diagnostico-legal`, en colecciones/carpetas separadas de
tu diagnóstico legal — no interfieren entre sí. Ver `firestore.rules.snippet` y
`storage.rules.snippet` para las reglas de seguridad a agregar (sin tocar las reglas
existentes de tu diagnóstico legal).

Los datos son compartidos entre todos los que accedan al link — tú ves en tiempo real
lo que cada cliente va registrando desde tu panel admin.
