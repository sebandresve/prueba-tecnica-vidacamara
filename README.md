# API de Gestión de Pólizas de Seguro

## Prueba Técnica - Vida Cámara

Este proyecto es una API RESTful desarrollada con **Node.js** y **Express** que permite gestionar pólizas de seguro.
La información se almacena en una base de datos **SQLite en memoria** (no persiste los datos, se reinician junto con el servidor).

---

## 🚀 Stack Tecnológico

- **Node.js** – entorno de ejecución.
- **Express.js** – framework para la creación de servidores HTTP.
- **SQLite** – base de datos ligera, en memoria.
- **Sequelize** – ORM para gestionar la base de datos.
- **express-validator** – validaciones en las rutas.
- **uuid** – para generar identificadores únicos.

---

## 🛠️ Instalación y Ejecución

1. **Clona el repositorio**

git clone https://github.com/sebandresve/prueba-tecnica-vidacamara
cd prueba-tecnica-vidacamara

2. **Instala las dependencias**

npm install

3. **Ejecuta el servidor en desarrollo**

npm run dev

**El servidor se ejecutará en http://localhost:3000**

**Puedes probar los siguientes Endpoints:**

| Método | Ruta                   | Descripción                                      |
| ------ | ---------------------- | ------------------------------------------------ |
| POST   | `/policies`            | Crea una nueva póliza                            |
| GET    | `/policies`            | Lista todas las pólizas (con filtros opcionales) |
| GET    | `/policies/:id`        | Consulta una póliza por ID                       |
| PUT    | `/policies/:id/status` | Actualiza el estado de la póliza                 |

Filtros disponibles en GET /policies
 - estado: emitida, activa, anulada
 - fecha: formato YYYY-MM-DD

**Validaciones**
Al crear o actualizar una póliza, se validan los siguientes campos:

 - rutTitular: requerido
 - fechaEmision: fecha válida
 - planSalud: requerido
 - prima: numérico y positivo
 - estado: solo emitida, activa o anulada

**Manejo de Errores**
 - 400 Bad Request – por validaciones incorrectas.
 - 404 Not Found – si la póliza no existe.
 - 500 Internal Server Error – errores del servidor.

## 📎 Pruebas Unitarias

Puedes revisar las pruebas realizadas a los Endpoints en el siguiente enlace de Google Drive:

🔗 [Documento de soporte del proyecto](https://drive.google.com/file/d/1hvl6_wEsgIYWjBOHSuKawmwazCdmZcht/view?usp=sharing)

 🧑‍💻 Autor
Sebastián Vásquez — Desarrollador Backend con experiencia en APIs RESTful.