import { Notas } from "../models/Notas.js";

//include
import { Empleos } from "../models/Empleos.js";

export async function getNotas(req, res) {
  try {
    const notas = await Notas.findAll({ include: { model: Empleos } });
    res.json(notas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function postNota(req, res) {
  try {
    const nuevaNota = await Notas.create(req.body);
    res.status(201).json(nuevaNota);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getNotaPorId(req, res) {
  const id = req.params.id;
  try {
    const nota = await Notas.findByPk(id, { include: { model: Empleos } });
    if (!nota) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }
    res.json(nota);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function putNotaPorId(req, res) {
  const id = req.params.id;
  try {
    const nota = await Notas.findByPk(id);
    if (!nota) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }
    await nota.update(req.body);
    res.json(nota);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteNotaPorId(req, res) {
  const id = req.params.id;
  try {
    const nota = await Notas.findByPk(id);
    if (!nota) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }
    await nota.destroy();
    res.json({ message: "Nota eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
