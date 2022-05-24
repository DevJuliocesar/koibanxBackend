# Koibanx Backend Challenge
## Descripción

Servicio API REST de prueba para Koibanx, desarrollado usando Node.js, Express y Mongoose.

Esta API permite obtener y almacenar información de Comercios, siempre y cuando el usuario este autenticado.
Registrandolo en la base de datos MongoDB, la API cuenta con las siguientes funciones:
- Authorization mediante Basic Auth
- Ingreso de parametros con el estandar https://restdb.io/docs/querying-with-the-api#restdb.
- Paginación
- Validación de parametros de entrada
- Decorators para la devolución de información (DTO - Data Transfer Object)
- Test Unitarios para todas las funcionalidades
- Seeder para la creación del usuario inicial y para los Comercios
- Manejador de errores
- Test de Integración en Postman
- Docker


## Instalación

Clonar el repo:

```bash
git clone https://github.com/DevJuliocesar/koibanxBackend.git
cd koibanxBackend
```

Instalar las dependencias:

```bash
npm install
```

Agregar las variables de entorno:

```bash
cp .env.example .env
# open .env and modify the environment variables (if needed)
```

## Tabla de contenido

- [Caracteristicas](#Caracteristicas)
- [Comandos](#Comandos)
- [Variables de Entorno](#Variables-de-Entorno)
- [Estructura del Proyecto](#Estructura-del-Proyecto)
- [API Endpoints](#API-Endpoints)

## Caracteristicas

- **NoSQL database**: [MongoDB](https://www.mongodb.com) Modelado de objeto de datos usando [Mongoose](https://mongoosejs.com)
- **Authentication y authorization**: usando [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
- **Validation**: Validación de datos de la petición usando [express-validator](https://www.npmjs.com/package/express-validator)
- **Logging**: usando [winston](https://github.com/winstonjs/winston)
- **Testing**: Test Unitarios usando [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **Dependency management**: con [npm](https://www.npmjs.com/)
- **Environment variables**: usando [dotenv](https://github.com/motdotla/dotenv)
- **Docker support**
- **Linting**: con [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration usando [EditorConfig](https://editorconfig.org)

## Comandos

Run Local:

```bash
npm run dev
```

Run Producción:

```bash
npm start
```

Testing:

```bash
# run all tests
npm run test
# run test coverage
npm run test:cov
```

Docker:
```bash
# run Develop
npm run docker:dev
# run Production
npm run docker:prod
# run test
npm run docker:test
```

## Variables de Entorno

Las variables de entorno se pueden encontrar y modificar en el archivo `.env`. Vienen con estos valores predeterminados:

```bash
# Port number
PORT=3000
# Username of the Mongo DB: If is neccesary
DATABASE_USERNAME=username
# Password of the Mongo DB: If is neccesary
DATABASE_PASSWORD=password
# Url of the Mongo DB
DATABASE_HOST=127.0.0.1
# Port of the Mongo DB
DATABASE_PORT=27017
# Db Name of the Mongo DB
DATABASE_DBNAME=stores-api
```

## Estructura del Proyecto

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--mappers\        # Dto Mappers (mapper layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--repositories\   # Connect with models (repository layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
```

## API Endpoints

Lista de rutas habilitadas:

**Auth routes**:\
`POST /api/auth/login` - login\

**Store routes**:\
`POST /api/stores` - create a Store\
`GET /api/stores` - get all stores\
