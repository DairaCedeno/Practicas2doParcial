"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoController = void 0;
const create_pronostico_dto_1 = require("../../domain/dtos/pronosticos/create-pronostico.dto");
const update_pronostico_dto_1 = require("../../domain/dtos/pronosticos/update-pronostico.dto");
class PronosticoController {
    constructor(pronosticoRepository) {
        this.pronosticoRepository = pronosticoRepository;
        this.getPronosticos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pronosticos = yield this.pronosticoRepository.getAll();
                return res.status(200).json(pronosticos);
            }
            catch (error) {
                console.error('Error in getPronosticos:', error);
                res.status(500).json({ message: 'Error al obtener los pronosticos', error: error.message });
            }
        });
        this.getPronosticoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const pronostico = yield this.pronosticoRepository.findById(id);
                if (!pronostico) {
                    return res.status(404).json({ message: `Pronostico con id ${id} no encontrado` });
                }
                return res.json(pronostico);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener el pronostico', error: error.message });
            }
        });
        this.createPronostico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [error, createPronosticoDto] = create_pronostico_dto_1.CreatePronosticoDto.create(req.body);
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const pronostico = yield this.pronosticoRepository.create(createPronosticoDto);
                return res.json(pronostico);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al crear el pronostico', error: error.message });
            }
        });
        this.updatePronostico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const [error, updatePronosticoDto] = update_pronostico_dto_1.UpdatePronosticoDto.create(Object.assign(Object.assign({}, req.body), { id }));
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const pronostico = yield this.pronosticoRepository.updateById(updatePronosticoDto);
                return res.json(pronostico);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al actualizar el pronostico', error: error.message });
            }
        });
        this.deletePronostico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                yield this.pronosticoRepository.deleteById(id);
                return res.json({ message: 'Pronostico eliminado correctamente' });
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al eliminar el pronostico', error: error.message });
            }
        });
    }
}
exports.PronosticoController = PronosticoController;
