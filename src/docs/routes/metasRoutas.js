/**
 * @openapi
 * /metas:
 *   get:
 *     summary: Obtener todas las metas
 *     tags: [Metas]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             $ref: '#/components/schemas/Metas'
 *       404:
 *         description: meta no encontrada
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crear una nueva meta
 *     tags: [Metas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Metas'
 *     responses:
 *       201:
 *         description: meta creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Metas'
 *       400:
 *         description: Error al crear meta
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /metas/{id}:
 *   put:
 *     summary: Actualizar una meta existente
 *     tags: [Metas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: ID de la meta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Metas'
 *     responses:
 *      200:
 *        description: meta actualizada
 *      404:
 *        description: meta no encontrada
 *      500:
 *        description: Error del servidor
 *   get:
 *     summary: Obtener una meta por ID
 *     tags: [Metas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la meta
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: meta no encontrada
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Eliminar un meta por ID
 *     tags: [Metas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la meta
 *     responses:
 *       200:
 *         description: meta eliminada
 *       404:
 *         description: meta no encontrada
 *       500:
 *         description: Error del servidor
 */
