/**
 * @openapi
 * components:
 *   schemas:
 *     Entrevistas:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         fecha_entrevista:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         estado:
 *           type: string
 *           example: "Pendiente"
 *         usuario_id:
 *           type: integer
 *           example: 1
 *         createdAt:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         empleos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               titulo:
 *                 type: string
 *                 example: "Desarrollador Web"
 *               empresa:
 *                 type: string
 *                 example: "Google"
 *               cargo:
 *                 type: string
 *                 example: "Desarrollador"
 *               url:
 *                 type: string
 *                 example: "https://google.com"
 *               descripcion:
 *                 type: string
 *                 example: "Desarrollar aplicaciones web"
 *               ubicacion:
 *                 type: string
 *                 example: "Argentina"
 *               tipo_empleo:
 *                 type: string
 *                 example: "Full-time"
 *               salario:
 *                 type: string
 *                 example: "100000"
 *               registroEntrevista_id:
 *                 type: integer
 *                 example: 1
 *               createdAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *         usuario:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: "Juan Pérez"
 *               correo_electronico:
 *                 type: string
 *                 example: "jgrsdigoletti0@forbes.com"
 *               contrasena:
 *                 type: string
 *                 example: "password123"
 *               pais:
 *                 type: string
 *                 example: "Argentina"
 *               experiencia:
 *                 type: integer
 *                 example: 5
 *               educacion:
 *                 type: string
 *                 example: "Ingeniería en Sistemas"
 *               rol:
 *                 type: string
 *                 example: "Desarrollador"
 *               createdAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *       example:
 *         id: 1
 *         fecha_entrevista: "2021-09-01T20:00:00.000Z"
 *         estado: "Pendiente"
 *         usuario_id: 1
 *         createdAt: "2021-09-01T20:00:00.000Z"
 *         updatedAt: "2021-09-01T20:00:00.000Z"
 *         empleos:
 *           - id: 1
 *             titulo: "Desarrollador Web"
 *             empresa: "Google"
 *             cargo: "Desarrollador"
 *             url: "https://google.com"
 *             descripcion: "Desarrollar aplicaciones web"
 *             ubicacion: "Argentina"
 *             tipo_empleo: "Full-time"
 *             salario: "100000"
 *             registroEntrevista_id: 1
 *             createdAt: "2021-09-01T20:00:00.000Z"
 *             updatedAt: "2021-09-01T20:00:00.000Z"
 *         usuario:
 *           - id: 1
 *             nombre: "Juan Pérez"
 *             correo_electronico: "test@test.com"
 *             contrasena: "password123"
 *             pais: "Argentina"
 *             experiencia: 5
 *             educacion: "Ingeniería en Sistemas"
 *             rol: "Desarrollador"
 *             createdAt: "2021-09-01T20:00:00.000Z"
 *             updatedAt: "2021-09-01T20:00:00.000Z"
 */
