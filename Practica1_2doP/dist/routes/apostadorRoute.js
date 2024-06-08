"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
// GET all apostadores
router.get('/', async (req, res) => {
    const estado = req.query.estado ? String(req.query.estado) : 'Activo';
    const apostadores = await prisma_1.default.apostador.findMany({
        where: { estado },
    });
    res.json(apostadores);
});
// POST a new apostador
router.post('/', async (req, res) => {
    const newApostador = await prisma_1.default.apostador.create({
        data: req.body,
    });
    res.status(201).json(newApostador);
});
// GET a single apostador by ID
router.get('/:id', async (req, res) => {
    const apostador = await prisma_1.default.apostador.findUnique({
        where: { id: parseInt(req.params.id) },
    });
    if (apostador && apostador.estado !== 'Eliminado') {
        res.json(apostador);
    }
    else {
        res.status(404).send('Apostador no encontrado');
    }
});
// PUT update an existing apostador
router.put('/:id', async (req, res) => {
    try {
        const updatedApostador = await prisma_1.default.apostador.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });
        res.json(updatedApostador);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el apostador' });
    }
});
// DELETE an apostador (soft delete)
router.delete('/:id', async (req, res) => {
    try {
        const updatedApostador = await prisma_1.default.apostador.update({
            where: { id: parseInt(req.params.id) },
            data: { estado: 'Eliminado' },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el apostador' });
    }
});
exports.default = router;
