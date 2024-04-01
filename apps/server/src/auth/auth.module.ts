import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '@server/prisma.service';
import { AuthService } from '@server/auth/auth.service';
import { UserService } from '@server/user/user.service';
import { AuthController } from '@server/auth/auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, JwtService],
})
export class AuthModule {}
