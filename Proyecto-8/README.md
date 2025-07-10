# Proyecto 8

API RESTful para la gestión de autores y posts.

## Requisitos

- Node.js (v16 o superior recomendado)
- npm
- MySQL (servidor y base de datos configurados)

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone <URL-del-repositorio>
   cd Proyecto-8
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura la base de datos:**
   - Crea una base de datos MySQL.
   - Modifica el archivo `src/.env` con tus credenciales y datos de conexión.

4. **Ejecuta las migraciones o crea las tablas necesarias** (si aplica).

## Uso

### Desarrollo

Para iniciar el servidor en modo desarrollo:
```sh
npm run dev
```

El servidor estará disponible en `http://localhost:3000` (o el puerto configurado).

### Endpoints principales

- `/author` - Gestión de autores
- `/post` - Gestión de posts

Consulta los archivos en `src/routes/` para ver todos los endpoints disponibles.

## Estructura del proyecto

```
Proyecto-8/
├── index.js
├── package.json
├── src/
│   ├── app.js
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── author.controller.js
│   │   └── post.controller.js
│   ├── models/
│   │   ├── author.model.js
│   │   └── post.model.js
│   └── routes/
│       ├── api.routes.js
│       ├── author.routes.js
│       └── post.routes.js
└── README.md
```

## Notas
- Asegúrate de tener la base de datos MySQL en funcionamiento antes de iniciar el servidor.
- Puedes usar herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar los endpoints.

---

