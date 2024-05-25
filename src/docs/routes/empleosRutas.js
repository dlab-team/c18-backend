/**
 * @openapi
 * /empleos:
 *   get:
 *     summary: Obtener todos los empleos
 *     tags: [Empleos]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empleos'
 *       404:
 *         description: Empleo no encontrado
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crear un nuevo empleo
 *     tags: [Empleos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleos'
 *     responses:
 *       201:
 *         description: Empleo creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleos'
 *       400:
 *         description: Error al crear empleo
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /empleos/{id}:
 *   put:
 *     summary: Actualizar un empleo existente
 *     tags: [Empleos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: ID del empleo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleos'
 *     responses:
 *      200:
 *        description: Empleo actualizado
 *      404:
 *        description: Empleo no encontrado
 *      500:
 *        description: Error del servidor
 *   get:
 *     summary: Obtener un empleo por ID
 *     tags: [Empleos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleo
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Empleo no encontrado
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Eliminar un empleo por ID
 *     tags: [Empleos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleo
 *     responses:
 *       200:
 *         description: Empleo eliminado
 *       404:
 *         description: Empleo no encontrado
 *       500:
 *         description: Error del servidor
 */
