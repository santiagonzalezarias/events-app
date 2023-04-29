import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';

class User {
  @ApiProperty({ example: '1' })
  id: string;
  @ApiProperty({ example: 'Santiago' })
  name: string;
  @ApiProperty({ example: 'santiago@gmail.com' })
  email: string;
}

@ApiTags('AppController')
@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Hola mundo',
    description: 'Devuelve un Hola Mundo',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('miNombre/:name')
  @ApiOperation({ summary: 'Mi nombre', description: 'Devuelve mi nombre' })
  @ApiParam({ name: 'name', description: 'Nombre del usuario' })
  miNombre(@Param('name') name: string): string {
    return this.appService.miNombre(name);
  }

  @Post('createUser')
  @ApiOperation({
    summary: 'Crea un usuario',
    description: 'Crea un usuario con los datos enviados',
  })
  @ApiBody({ type: User })
  createUser(@Body() user: User): string {
    return this.appService.createUser(user);
  }
}
