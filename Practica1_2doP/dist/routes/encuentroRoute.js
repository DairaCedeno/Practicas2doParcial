"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
// GET all encuentros deportivos
router.get('/', async (req, res) => {
    const estado = req.query.estado ? String(req.query.estado) : 'Activo';
    const encuentros = await prisma_1.default.encuentroDeportivo.findMany({
        where: { estado },
    });
    res.json(encuentros);
});
// POST a new encuentro deportivo
router.post('/', async (req, res) => {
    const newEncuentro = await prisma_1.default.encuentroDeportivo.create({
        data: req.body,
    });
    res.status(201).json(newEncuentro);
});
// GET a single encuentro deportivo by ID
router.get('/:id', async (req, res) => {
    const encuentro = await prisma_1.default.encuentroDeportivo.findUnique({
        where: { id: parseInt(req.params.id) },
    });
    if (encuentro && encuentro.estado !== 'Eliminado') {
        res.json(encuentro);
    }
    else {
        res.status(404).send('Encuentro deportivo no encontrado');
    }
});
// PUT update an existing encuentro deportivo
router.put('/:id', async (req, res) => {
    try {
        const updatedEncuentro = await prisma_1.default.encuentroDeportivo.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });
        res.json(updatedEncuentro);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el encuentro deportivo' });
    }
});
// DELETE an encuentro deportivo (soft delete)
router.delete('/:id', async (req, res) => {
    try {
        const updatedEncuentro = await prisma_1.default.encuentroDeportivo.update({
            where: { id: parseInt(req.params.id) },
            data: { estado: 'Eliminado' },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el encuentro deportivo' });
    }
});
exports.default = router;
