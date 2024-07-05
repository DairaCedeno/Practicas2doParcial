import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Pronostico } from './entities/pronostico.entity';

const pronosticos: Pronostico[] = [
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

interface User {
  id: string;
  nombre: string;
  isActive: boolean;
}

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    user: User;
  }
}

const users: User[] = [
  { id: '1', nombre: 'user1', isActive: true },
  { id: '2', nombre: 'user2', isActive: false },
  { id: '3', nombre: 'user3', isActive: true },
];

@Injectable()
export class PronosticoService {

  private connectedClients: ConnectedClients = {};

  registerClient(socket: Socket, userId: string) {
    console.log('Registering client:', userId);
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    if (!user.isActive) {
      throw new Error('El usuario no está activo');
    }
    const userConnections = Object.values(this.connectedClients).filter(
      client => client.user.id === user.id
    );

    if (userConnections.length >= 3) {
      throw new Error('Usuario ya tiene 3 conexiones activas');
    }

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    };
    console.log('Client registered successfully:', socket.id);
  }

  removeClient(clientId: string) {
    console.log('Removing client:', clientId);
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserFullName(socketId: string): string {
    return this.connectedClients[socketId].user.nombre;
  }

  checkUserConnection(user: User) {
    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectedClient.socket.disconnect();
        break;
      }
    }
  }

  create(createPronosticoDto: Pronostico): Pronostico {
    const newPronostico: Pronostico = {
      id: pronosticos.length + 1,
      descripcion: createPronosticoDto.descripcion,
      resultadoEsperado: createPronosticoDto.resultadoEsperado,
      idEncuentroDeportivo: createPronosticoDto.idEncuentroDeportivo,
      idApostador: createPronosticoDto.idApostador,
    };
    pronosticos.push(newPronostico);
    return newPronostico;
  }

  findAll(): Pronostico[] {
    return pronosticos;
  }
}
