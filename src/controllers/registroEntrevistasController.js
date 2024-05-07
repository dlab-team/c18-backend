import { RegistroEntrevistas } from "../models/RegistroEntrevistas.js";

export async function getEntrevistas(req, res) {
  try {
    const entrevistas = await RegistroEntrevistas.findAll();
    res.json(entrevistas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function postEntrevista(req, res) {
  try {
    const nuevaEntrevista = await RegistroEntrevistas.create(req.body);
    res.status(201).json(nuevaEntrevista);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getEntrevistaPorId(req, res) {
  const id = req.params.id;
  try {
    const entrevista = await RegistroEntrevistas.findByPk(id);
    if (!entrevista) {
      return res.status(404).json({ message: "Entrevista no encontrada" });
    }
    res.json(entrevista);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function putEntrevistaPorId(req, res) {
  const id = req.params.id;
  try {
    const entrevista = await RegistroEntrevistas.findByPk(id);
    if (!entrevista) {
      return res.status(404).json({ message: "Entrevista no encontrada" });
    }
    await entrevista.update(req.body);
    res.json(entrevista);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteEntrevistaPorId(req, res) {
  const id = req.params.id;
  try {
    const entrevista = await RegistroEntrevistas.findByPk(id);
    if (!entrevista) {
      return res.status(404).json({ message: "Entrevista no encontrada" });
    }
    await entrevista.destroy();
    res.json({ message: "Entrevista eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
