import { Injectable } from '@nestjs/common';

class User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  miNombre(name: string): string {
    return 'Mi nombre es ' + name;
  }

  createUser(user: User): string {
    return 'Se creo el usuario con el nombre: ' + user.name;
  }
}
