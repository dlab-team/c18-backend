/**
 * @openapi
 * /metricas:
 *   get:
 *     summary: Obtener todas las Metricas
 *     tags: [Metricas]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *             $ref: '#/components/schemas/Metricas'
 *       404:
 *         description: metrica no encontrada
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crear una nueva metrica
 *     tags: [Metricas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Metricas'
 *     responses:
 *       201:
 *         description: metrica creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Metricas'
 *       400:
 *         description: Error al crear metrica
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /metricas/{id}:
 *   put:
 *     summary: Actualizar una metrica existente
 *     tags: [Metricas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: ID de la metrica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Metricas'
 *     responses:
 *      200:
 *        description: metrica actualizada
 *      404:
 *        description: metrica no encontrada
 *      500:
 *        description: Error del servidor
 *   get:
 *     summary: Obtener una metrica por ID
 *     tags: [Metricas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la metrica
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: metrica no encontrada
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Eliminar un metrica por ID
 *     tags: [Metricas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la metrica
 *     responses:
 *       200:
 *         description: metrica eliminada
 *       404:
 *         description: metrica no encontrada
 *       500:
 *         description: Error del servidor
 */
