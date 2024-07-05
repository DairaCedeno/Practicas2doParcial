import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreatePronosticoDto } from './dto/create-pronostico.dto';
import { PronosticoService } from './pronostico.service';

@WebSocketGateway({ cors: true })
export class PronosticoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly pronosticoService: PronosticoService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    console.log('Client attempting to connect:', client.id, 'with token:', token);
    try {
      // Validar el token
      await this.pronosticoService.registerClient(client, token);
    } catch (error) {
      console.error('Connection error:', error.message);
      client.disconnect();
      return;
    }
    console.log('Client connected:', client.id);
    this.wss.emit('clients-updated', this.pronosticoService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    this.pronosticoService.removeClient(client.id);
    this.wss.emit('clients-updated', this.pronosticoService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket) {
    // Todos reciben el mensaje
    this.wss.emit('message-from-server', {
      fullName: this.pronosticoService.getUserFullName(client.id),
    });
  }

  @SubscribeMessage('agregar-transaccion')
  create(@MessageBody() createPronosticoDto: CreatePronosticoDto) {
    const inserted = this.pronosticoService.create(createPronosticoDto);
    this.wss.emit('newPronostico', this.findAll());
    return inserted;
  }

  @SubscribeMessage('consultar-activos')
  findAll() {
    return this.pronosticoService.findAll();
  }
}
