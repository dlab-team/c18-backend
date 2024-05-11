import { Metricas } from '../models/Metricas.js';

export async function getMetricas(req, res) {
    try {
        const metricas = await Metricas.findAll();
        res.json(metricas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function postMetricas(req, res) {
    try {
        const nuevaMetrica = await Metricas.create(req.body);
        res.status(201).json(nuevaMetrica);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export async function getMetricasPorId(req, res) {
    const id = req.params.id;
    try {
        const metrica = await Metricas.findByPk(id);
        if (!metrica) {
            return res.status(404).json({message: 'Metrica no encontrada'});
        }
        res.json(metrica);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function putMetricasPorId(req, res) {
    const id = req.params.id;
    try {
        const metrica = await Metricas.findByPk(id);
        if (!metrica) {
            return res.status(404).json({message: 'Metrica no encontrada'});
        }
        await metrica.update(req.body);
        res.json(metrica);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export async function deleteMetricasPorId(req, res) {
    const id = req.params.id;
    try {
        const metrica = await Metricas.findByPk(id);
        if (!metrica) {
            return res.status(404).json({message: 'Metrica no encontrada'});
        }
        await metrica.destroy();
        res.json({message: 'Metrica eliminada exitosamente'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

