/**
 * @openapi
 * components:
 *   schemas:
 *     Usuarios:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: "Juan Pérez"
 *         correo_electronico:
 *           type: string
 *           example: "jgrsdigoletti0@forbes.com"
 *         contrasena:
 *           type: string
 *           example: "password123"
 *         pais:
 *           type: string
 *           example: "Argentina"
 *         experiencia:
 *           type: integer
 *           example: 5
 *         educacion:
 *           type: string
 *           example: "Ingeniería en Sistemas"
 *         rol:
 *           type: string
 *           example: "Desarrollador"
 *         createdAt:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         meta:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               semana:
 *                 type: integer
 *                 example: 3
 *               cantidad_meta:
 *                 type: integer
 *                 example: 1
 *               cantidad_cumplida:
 *                 type: integer
 *                 example: 1
 *               mes:
 *                 type: integer
 *                 example: 6
 *               usuario_id::
 *                 type: integer
 *                 example: 2
 *               createdAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *         metrica:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               total_postulaciones:
 *                 type: integer
 *                 example: 10
 *               total_entradas:
 *                 type: integer
 *                 example: 5
 *               ofertas:
 *                 type: integer
 *                 example: 17
 *               guardados:
 *                 type: integer
 *                 example: 12
 *               usuario_id:
 *                 type: integer
 *                 example: 1
 *               createdAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *               updatedAt:
 *                 type: string
 *                 example: "2021-09-01T20:00:00.000Z"
 *       example:
 *         id: 1
 *         nombre: "Juan Pérez"
 *         correo_electronico: "texztr@test.com"
 *         contrasena: "password123"
 *         pais: "Argentina"
 *         experiencia: 5
 *         educacion: "Ingeniería en Sistemas"
 *         rol: "Desarrollador"
 *         createdAt: "2021-09-01T20:00:00.000Z"
 *         updatedAt: "2021-09-01T20:00:00.000Z"
 *         meta:
 *           - id: 1
 *             semana: 3
 *             cantidad_meta: 1
 *             cantidad_cumplida: 1
 *             mes: 6
 *             usuario_id: 2
 *             createdAt: "2021-09-01T20:00:00.000Z"
 *             updatedAt: "2021-09-01T20:00:00.000Z"
 *         metrica:
 *           - id: 1
 *             total_postulaciones: 10
 *             total_entradas: 5
 *             ofertas: 17
 *             guardados: 12
 *             usuario_id: 1
 *             createdAt: "2021-09-01T20:00:00.000Z"
 *             updatedAt: "2021-09-01T20:00:00.000Z"
 */
