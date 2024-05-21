import { Router } from "express";
import {
  deleteUsuariosPorId,
  getUsuarios,
  getUsuariosPorId,
  postUsuarios,
  putUsuariosPorId,
} from "../controllers/usuariosController.js";

const router = Router();

/**
 * @openapi
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   correo_electronico:
 *                     type: string
 *                     example: "juan.perez@example.com"
 *                   pais:
 *                     type: string
 *                     example: "Argentina"
 *                   experiencia:
 *                     type: integer
 *                     example: 5
 *                   educacion:
 *                     type: string
 *                     example: "Ingeniería en Sistemas"
 *                   rol:
 *                     type: string
 *                     example: "Desarrollador"
 *                   createdAt:
 *                     type: string
 *                     example: "2021-09-01T20:00:00.000Z"
 *                   updatedAt:
 *                     type: string
 *                     example: "2021-09-01T20:00:00.000Z"
 */

/**
 * @openapi
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Juan Pérez"
 *               correo_electronico:
 *                 type: string
 *                 example: "juan.perez@example.com"
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
 *     responses:
 *       201:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 createdAt:
 *                   type: string
 *                   example: "2021-09-01T20:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   example: "2021-09-01T20:00:00.000Z"
 */

/**
 * @openapi
 * /usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Juan Pérez"
 *                 correo_electronico:
 *                   type: string
 *                   example: "juan.perez@example.com"
 *                 pais:
 *                   type: string
 *                   example: "Argentina"
 *                 experiencia:
 *                   type: integer
 *                   example: 5
 *                 educacion:
 *                   type: string
 *                   example: "Ingeniería en Sistemas"
 *                 rol:
 *                   type: string
 *                   example: "Desarrollador"
 *                 createdAt:
 *                   type: string
 *                   example: "2021-09-01T20:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   example: "2021-09-01T20:00:00.000Z"
 *       404:
 *         description: No encontrado
 */

/**
 * @openapi
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Juan Pérez"
 *               correo_electronico:
 *                 type: string
 *                 example: "juan.perez@example.com"
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
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Juan Pérez"
 *                 correo_electronico:
 *                   type: string
 *                   example: "juan.perez@example.com"
 *                 pais:
 *                   type: string
 *                   example: "Argentina"
 *                 experiencia:
 *                   type: integer
 *                   example: 5
 *                 educacion:
 *                   type: string
 *                   example: "Ingeniería en Sistemas"
 *                 rol:
 *                   type: string
 *                   example: "Desarrollador"
 *                 createdAt:
 *                   type: string
 *                   example: "2021-09-01T20:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   example: "2021-09-01T20:00:00.000Z"
 *       404:
 *         description: No encontrado
 */

/**
 * @openapi
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: No encontrado
 */

// Rutas para los usuarios
router.get("/usuarios", getUsuarios);
router.post("/usuarios", postUsuarios);
router.get("/usuarios/:id", getUsuariosPorId);
router.put("/usuarios/:id", putUsuariosPorId);
router.delete("/usuarios/:id", deleteUsuariosPorId);

export default router;
