import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '@server/prisma.service';
import { UserService } from '@server/user/user.service';
import { UserController } from '@server/user/user.controller';

@Module({
  providers: [UserService, PrismaService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
