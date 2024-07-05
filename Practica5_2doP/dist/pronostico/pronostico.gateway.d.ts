import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreatePronosticoDto } from './dto/create-pronostico.dto';
import { PronosticoService } from './pronostico.service';
export declare class PronosticoGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly pronosticoService;
    wss: Server;
    constructor(pronosticoService: PronosticoService);
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
    handleDisconnect(client: Socket): void;
    onMessageFromClient(client: Socket): void;
    create(createPronosticoDto: CreatePronosticoDto): import("./entities/pronostico.entity").Pronostico;
    findAll(): import("./entities/pronostico.entity").Pronostico[];
}
