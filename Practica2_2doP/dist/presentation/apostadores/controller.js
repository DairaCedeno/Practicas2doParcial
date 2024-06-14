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
exports.ApostadorController = void 0;
const create_apostador_dto_1 = require("../../domain/dtos/apostadores/create-apostador.dto");
const update_apostador_dto_1 = require("../../domain/dtos/apostadores/update-apostador.dto");
class ApostadorController {
    constructor(apostadorRepository) {
        this.apostadorRepository = apostadorRepository;
        this.getApostadores = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const apostadores = yield this.apostadorRepository.getAll();
                return res.status(200).json(apostadores);
            }
            catch (error) {
                console.error('Error in getApostadores:', error);
                res.status(500).json({ message: 'Error al obtener los apostadores', error: error.message });
            }
        });
        this.getApostadorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const apostador = yield this.apostadorRepository.findById(id);
                if (!apostador) {
                    return res.status(404).json({ message: `Apostador con id ${id} no encontrado` });
                }
                return res.json(apostador);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error al obtener el apostador', error: error.message });
            }
        });
        this.createApostador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [error, createApostadorDto] = create_apostador_dto_1.CreateApostadorDto.create(req.body);
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const apostador = yield this.apostadorRepository.create(createApostadorDto);
                return res.json(apostador);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al crear el apostador', error: error.message });
            }
        });
        this.updateApostador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                const [error, updateApostadorDto] = update_apostador_dto_1.UpdateApostadorDto.create(Object.assign(Object.assign({}, req.body), { id }));
                if (error) {
                    return res.status(400).json({ message: error });
                }
                const apostador = yield this.apostadorRepository.updateById(updateApostadorDto);
                return res.json(apostador);
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al actualizar el apostador', error: error.message });
            }
        });
        this.deleteApostador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            try {
                yield this.apostadorRepository.deleteById(id);
                return res.json({ message: 'Apostador eliminado correctamente' });
            }
            catch (error) {
                return res.status(400).json({ message: 'Error al eliminar el apostador', error: error.message });
            }
        });
    }
}
exports.ApostadorController = ApostadorController;
