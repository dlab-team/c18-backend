import { Empleos } from "../models/Empleos.js";

export async function getEmpleos(req, res) {
  try {
    const empleos = await Empleos.findAll({ include: "notas" });
    res.json(empleos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function postEmpleos(req, res) {
  try {
    const nuevoEmpleo = await Empleos.create(req.body);
    res.status(201).json(nuevoEmpleo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getEmpleosPorId(req, res) {
  const id = req.params.id;
  try {
    const empleo = await Empleos.findByPk(id);
    if (!empleo) {
      return res.status(404).json({ message: "Empleo no encontrado" });
    }
    res.json(empleo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function putEmpleosPorId(req, res) {
  const id = req.params.id;
  try {
    const empleo = await Empleos.findByPk(id);
    if (!empleo) {
      return res.status(404).json({ message: "Empleo no encontrado" });
    }
    await empleo.update(req.body);
    res.json(empleo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteEmpleosPorId(req, res) {
  const id = req.params.id;
  try {
    const empleo = await Empleos.findByPk(id);
    if (!empleo) {
      return res.status(404).json({ message: "Empleo no encontrado" });
    }
    await empleo.destroy();
    res.json({ message: "Empleo eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
