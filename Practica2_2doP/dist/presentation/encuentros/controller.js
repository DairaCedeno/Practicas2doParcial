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
exports.EncuentroController = void 0;
const create_encuentro_dto_1 = require("../../domain/dtos/encuentros/create-encuentro.dto");
const update_encuentro_dto_1 = require("../../domain/dtos/encuentros/update-encuentro.dto");
class EncuentroController {
    constructor(encuentroRepository) {
        this.encuentroRepository = encuentroRepository;
        this.getEncuentros = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const encuentros = yield this.encuentroRepository.getAll();
                return res.status(200).json(encuentros);
            }
            catch (error) {
                console.error('Error in getEncuentros:', error);
                res.status(500).json({ message: 'Error al obtener los encuentros', error: error.message });
            }
        });
        this.getEncuentroById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const encuentro = yield this.encuentroRepository.findById(id);
                if (!encuentro) {
                    return res.status(404).json({ message: `Encuentro con id ${id} no encontrado` });
                }
                return res.json(encuentro);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener el encuentro', error: error.message });
            }
        });
        this.createEncuentro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [error, createEncuentroDto] = create_encuentro_dto_1.CreateEncuentroDeportivoDto.create(req.body);
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const encuentro = yield this.encuentroRepository.create(createEncuentroDto);
                return res.json(encuentro);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al crear el encuentro', error: error.message });
            }
        });
        this.updateEncuentro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const [error, updateEncuentroDto] = update_encuentro_dto_1.UpdateEncuentroDeportivoDto.create(Object.assign(Object.assign({}, req.body), { id }));
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const encuentro = yield this.encuentroRepository.updateById(updateEncuentroDto);
                return res.json(encuentro);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al actualizar el encuentro', error: error.message });
            }
        });
        this.deleteEncuentro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                yield this.encuentroRepository.deleteById(id);
                return res.json({ message: 'Encuentro eliminado correctamente' });
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al eliminar el encuentro', error: error.message });
            }
        });
    }
}
exports.EncuentroController = EncuentroController;
