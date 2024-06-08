"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apostadorRoute_1 = __importDefault(require("./routes/apostadorRoute"));
const encuentroRoute_1 = __importDefault(require("./routes/encuentroRoute"));
const pronosticoRoute_1 = __importDefault(require("./routes/pronosticoRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/apostadores', apostadorRoute_1.default);
app.use('/encuentros', encuentroRoute_1.default);
app.use('/pronosticos', pronosticoRoute_1.default);
exports.default = app;
