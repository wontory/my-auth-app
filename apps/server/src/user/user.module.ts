import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserService, PrismaService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
