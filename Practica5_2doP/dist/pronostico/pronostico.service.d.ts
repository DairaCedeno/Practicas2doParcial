import { Socket } from 'socket.io';
import { Pronostico } from './entities/pronostico.entity';
interface User {
    id: string;
    nombre: string;
    isActive: boolean;
}
export declare class PronosticoService {
    private connectedClients;
    registerClient(socket: Socket, userId: string): void;
    removeClient(clientId: string): void;
    getConnectedClients(): string[];
    getUserFullName(socketId: string): string;
    checkUserConnection(user: User): void;
    create(createPronosticoDto: Pronostico): Pronostico;
    findAll(): Pronostico[];
}
export {};
