"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const create_pronostico_dto_1 = require("./dto/create-pronostico.dto");
const pronostico_service_1 = require("./pronostico.service");
let PronosticoGateway = class PronosticoGateway {
    constructor(pronosticoService) {
        this.pronosticoService = pronosticoService;
    }
    async handleConnection(client, ...args) {
        const token = client.handshake.headers.authentication;
        console.log('Client attempting to connect:', client.id, 'with token:', token);
        try {
            await this.pronosticoService.registerClient(client, token);
        }
        catch (error) {
            console.error('Connection error:', error.message);
            client.disconnect();
            return;
        }
        console.log('Client connected:', client.id);
        this.wss.emit('clients-updated', this.pronosticoService.getConnectedClients());
    }
    handleDisconnect(client) {
        console.log('Client disconnected:', client.id);
        this.pronosticoService.removeClient(client.id);
        this.wss.emit('clients-updated', this.pronosticoService.getConnectedClients());
    }
    onMessageFromClient(client) {
        this.wss.emit('message-from-server', {
            fullName: this.pronosticoService.getUserFullName(client.id),
        });
    }
    create(createPronosticoDto) {
        const inserted = this.pronosticoService.create(createPronosticoDto);
        this.wss.emit('newPronostico', this.findAll());
        return inserted;
    }
    findAll() {
        return this.pronosticoService.findAll();
    }
};
exports.PronosticoGateway = PronosticoGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PronosticoGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message-from-client'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], PronosticoGateway.prototype, "onMessageFromClient", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('agregar-transaccion'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pronostico_dto_1.CreatePronosticoDto]),
    __metadata("design:returntype", void 0)
], PronosticoGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('consultar-activos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PronosticoGateway.prototype, "findAll", null);
exports.PronosticoGateway = PronosticoGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [pronostico_service_1.PronosticoService])
], PronosticoGateway);
//# sourceMappingURL=pronostico.gateway.js.map