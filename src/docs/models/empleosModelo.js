/**
 * @openapi
 * components:
 *   schemas:
 *     Empleos:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         titulo:
 *           type: string
 *           example: "Desktop Support Technician"
 *         empresa:
 *           type: string
 *           example: "Livefish"
 *         cargo:
 *           type: string
 *           example: "Software Engineer"
 *         url:
 *           type: string
 *           example: "https://www.linkedin.com"
 *         descripcion:
 *           type: string
 *           example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *         ubicacion:
 *           type: string
 *           example: "Buenos Aires"
 *         tipo_empleo:
 *           type: string
 *           example: "Full-time"
 *         salario:
 *           type: integer
 *           example: 100000
 *         registroEntrevista_id:
 *           type: integer
 *           example: 1
 *         createdAt:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           example: "2021-09-01T20:00:00.000Z"
 *         notas:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               texto:
 *                 type: string
 *                 example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *               empleo_id:
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
 *         titulo: "Desktop Support Technician"
 *         empresa: "Livefish"
 *         cargo: "Software Engineer"
 *         url: "https://www.linkedin.com"
 *         descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *         ubicacion: "Buenos Aires"
 *         tipo_empleo: "Full-time"
 *         salario: 100000
 *         registroEntrevista_id: 1
 *         notas:
 *           - id: 1
 *             texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
 *             empleo_id: 1
 *             createdAt: "2021-09-01T20:00:00.000Z"
 *             updatedAt: "2021-09-01T20:00:00.000Z"
 *         createdAt: "2021-09-01T20:00:00.000Z"
 *         updatedAt: "2021-09-01T20:00:00.000Z"
 *
 */
