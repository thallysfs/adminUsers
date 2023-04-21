import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class User extends Document {
  @ApiProperty({
    description: 'E-mail',
    example: 'paulo@ig.com.br',
  })
  email: string;

  @ApiProperty({
    description: 'Senha',
    example: 'fed51re',
  })
  password: string;

  @ApiProperty({
    description: 'Perfil de permisão',
    example:
      'operator: para apenas ler os usuários, admin: ler e deletar usuários',
  })
  permission: 'admin' | 'operator';
}
