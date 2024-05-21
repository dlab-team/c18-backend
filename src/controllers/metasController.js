import { Metas } from "../models/Metas.js";

//include
import { Usuarios } from "../models/Usuarios.js";

export async function getMetas(req, res) {
  try {
    const metas = await Metas.findAll({ include: { model: Usuarios } });
    res.json(metas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createMeta(req, res) {
  try {
    const nuevaMeta = await Metas.create(req.body);
    res.status(201).json(nuevaMeta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getMetaById(req, res) {
  const id = req.params.id;
  try {
    const meta = await Metas.findByPk(id, { include: { model: Usuarios } });
    if (!meta) {
      return res.status(404).json({ message: "Meta no encontrada" });
    }
    res.json(meta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateMetaById(req, res) {
  const id = req.params.id;
  try {
    const meta = await Metas.findByPk(id);
    if (!meta) {
      return res.status(404).json({ message: "Meta no encontrada" });
    }
    await meta.update(req.body);
    res.json(meta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteMetaById(req, res) {
  const id = req.params.id;
  try {
    const meta = await Metas.findByPk(id);
    if (!meta) {
      return res.status(404).json({ message: "Meta no encontrada" });
    }
    await meta.destroy();
    res.json({ message: "Meta eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
