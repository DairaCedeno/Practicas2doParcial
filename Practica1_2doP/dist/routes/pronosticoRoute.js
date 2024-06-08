"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
// GET all pronosticos
router.get('/', async (req, res) => {
    const estado = req.query.estado ? String(req.query.estado) : 'Activo';
    const pronosticos = await prisma_1.default.pronostico.findMany({
        where: { estado },
    });
    res.json(pronosticos);
});
// POST a new pronostico
router.post('/', async (req, res) => {
    const newPronostico = await prisma_1.default.pronostico.create({
        data: req.body,
    });
    res.status(201).json(newPronostico);
});
// GET a single pronostico by ID
router.get('/:id', async (req, res) => {
    const pronostico = await prisma_1.default.pronostico.findUnique({
        where: { id: parseInt(req.params.id) },
    });
    if (pronostico && pronostico.estado !== 'Eliminado') {
        res.json(pronostico);
    }
    else {
        res.status(404).send('Pronostico no encontrado');
    }
});
// PUT update an existing pronostico
router.put('/:id', async (req, res) => {
    try {
        const updatedPronostico = await prisma_1.default.pronostico.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });
        res.json(updatedPronostico);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el pronostico' });
    }
});
// DELETE a pronostico (soft delete)
router.delete('/:id', async (req, res) => {
    try {
        const updatedPronostico = await prisma_1.default.pronostico.update({
            where: { id: parseInt(req.params.id) },
            data: { estado: 'Eliminado' },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el pronostico' });
    }
});
exports.default = router;
