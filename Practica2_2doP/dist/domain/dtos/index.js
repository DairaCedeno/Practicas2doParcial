"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./apostadores/create-apostador.dto"), exports);
__exportStar(require("./apostadores/update-apostador.dto"), exports);
__exportStar(require("./apostadores/get-apostador.dto"), exports);
__exportStar(require("./apostadores/getall-apostador.dto"), exports);
__exportStar(require("./apostadores/delete-apostador.dto"), exports);
__exportStar(require("./encuentros/create-encuentro.dto"), exports);
__exportStar(require("./encuentros/update-encuentro.dto"), exports);
__exportStar(require("./encuentros/get-encuentro.dto"), exports);
__exportStar(require("./encuentros/getall-encuentro.dto"), exports);
__exportStar(require("./encuentros/delete-encuentro.dto"), exports);
__exportStar(require("./pronosticos/create-pronostico.dto"), exports);
__exportStar(require("./pronosticos/update-pronostico.dto"), exports);
__exportStar(require("./pronosticos/get-pronostico.dto"), exports);
__exportStar(require("./pronosticos/getall-pronostico.dto"), exports);
__exportStar(require("./pronosticos/delete-pronostico.dto"), exports);
