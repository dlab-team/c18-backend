/**
 * @openapi
 * /notas:
 *   get:
 *     summary: Obtener todas las Notas
 *     tags: [Notas]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             $ref: '#/components/schemas/Notas'
 *       404:
 *         description: nota no encontrada
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crear una nueva nota
 *     tags: [Notas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notas'
 *     responses:
 *       201:
 *         description: nota creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notas'
 *       400:
 *         description: Error al crear nota
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /notas/{id}:
 *   put:
 *     summary: Actualizar una nota existente
 *     tags: [Notas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: ID de la nota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notas'
 *     responses:
 *      200:
 *        description: nota actualizada
 *      404:
 *        description: nota no encontrada
 *      500:
 *        description: Error del servidor
 *   get:
 *     summary: Obtener una nota por ID
 *     tags: [Notas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la nota
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: nota no encontrada
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Eliminar un nota por ID
 *     tags: [Notas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la nota
 *     responses:
 *       200:
 *         description: nota eliminada
 *       404:
 *         description: nota no encontrada
 *       500:
 *         description: Error del servidor
 */
