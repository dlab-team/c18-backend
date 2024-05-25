/**
 * @openapi
 * /usuarios:
 *   get:
 *     summary: Obtener todos los Usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crear un nuevo Usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       201:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuarios'
 *       400:
 *         description: Error al crear Usuario
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un Usuario existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: ID del Usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *      200:
 *        description: Usuario actualizado
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error del servidor
 *   get:
 *     summary: Obtener un Usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del Usuario
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Eliminar un Usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del Usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
