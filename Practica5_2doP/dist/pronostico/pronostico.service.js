"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoService = void 0;
const common_1 = require("@nestjs/common");
const pronosticos = [
    {
        id: 1,
        descripcion: 'Pronóstico 1',
        resultadoEsperado: 'Resultado 1',
        idEncuentroDeportivo: 1,
        idApostador: 1,
    },
    {
        id: 2,
        descripcion: 'Pronóstico 2',
        resultadoEsperado: 'Resultado 2',
        idEncuentroDeportivo: 2,
        idApostador: 2,
    },
];
const users = [
    { id: '1', nombre: 'user1', isActive: true },
    { id: '2', nombre: 'user2', isActive: false },
    { id: '3', nombre: 'user3', isActive: true },
];
let PronosticoService = class PronosticoService {
    constructor() {
        this.connectedClients = {};
    }
    registerClient(socket, userId) {
        console.log('Registering client:', userId);
        const user = users.find(user => user.id === userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (!user.isActive) {
            throw new Error('El usuario no está activo');
        }
        const userConnections = Object.values(this.connectedClients).filter(client => client.user.id === user.id);
        if (userConnections.length >= 3) {
            throw new Error('Usuario ya tiene 3 conexiones activas');
        }
        this.connectedClients[socket.id] = {
            socket: socket,
            user: user
        };
        console.log('Client registered successfully:', socket.id);
    }
    removeClient(clientId) {
        console.log('Removing client:', clientId);
        delete this.connectedClients[clientId];
    }
    getConnectedClients() {
        return Object.keys(this.connectedClients);
    }
    getUserFullName(socketId) {
        return this.connectedClients[socketId].user.nombre;
    }
    checkUserConnection(user) {
        for (const clientId of Object.keys(this.connectedClients)) {
            const connectedClient = this.connectedClients[clientId];
            if (connectedClient.user.id === user.id) {
                connectedClient.socket.disconnect();
                break;
            }
        }
    }
    create(createPronosticoDto) {
        const newPronostico = {
            id: pronosticos.length + 1,
            descripcion: createPronosticoDto.descripcion,
            resultadoEsperado: createPronosticoDto.resultadoEsperado,
            idEncuentroDeportivo: createPronosticoDto.idEncuentroDeportivo,
            idApostador: createPronosticoDto.idApostador,
        };
        pronosticos.push(newPronostico);
        return newPronostico;
    }
    findAll() {
        return pronosticos;
    }
};
exports.PronosticoService = PronosticoService;
exports.PronosticoService = PronosticoService = __decorate([
    (0, common_1.Injectable)()
], PronosticoService);
//# sourceMappingURL=pronostico.service.js.map