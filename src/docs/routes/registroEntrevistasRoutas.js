/**
 * @openapi
 * /entrevistas:
 *   get:
 *     summary: Obtener todas las Entrevistas
 *     tags: [Entrevistas]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             $ref: '#/components/schemas/Entrevistas'
 *       404:
 *         description: entrevista no encontrada
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crear una nueva entrevista
 *     tags: [Entrevistas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrevistas'
 *     responses:
 *       201:
 *         description: entrevista creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistas'
 *       400:
 *         description: Error al crear entrevista
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /entrevistas/{id}:
 *   put:
 *     summary: Actualizar una entrevista existente
 *     tags: [Entrevistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: ID de la entrevista
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrevistas'
 *     responses:
 *      200:
 *        description: entrevista actualizada
 *      404:
 *        description: entrevista no encontrada
 *      500:
 *        description: Error del servidor
 *   get:
 *     summary: Obtener una entrevista por ID
 *     tags: [Entrevistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la entrevista
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: entrevista no encontrada
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Eliminar un entrevista por ID
 *     tags: [Entrevistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la entrevista
 *     responses:
 *       200:
 *         description: entrevista eliminada
 *       404:
 *         description: entrevista no encontrada
 *       500:
 *         description: Error del servidor
 */
