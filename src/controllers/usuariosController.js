import { Usuarios } from "../models/Usuarios.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function postUsuarios(req, res) {
  try {
    const nuevoUsuario = await Usuarios.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getUsuariosPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function putUsuariosPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await usuario.update(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteUsuariosPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await usuario.destroy();
    res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
