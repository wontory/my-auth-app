import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@server/auth/auth.module';
import { UserModule } from '@server/user/user.module';
import { AppService } from '@server/app.service';
import { PrismaService } from '@server/prisma.service';
import { AppController } from '@server/app.controller';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
