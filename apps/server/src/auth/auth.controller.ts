import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { LoginDto } from '@server/auth/dto/auth.dto';
import { CreateUserDto } from '@server/user/dto/user.dto';
import { AuthService } from '@server/auth/auth.service';
import { UserService } from '@server/user/user.service';
import { RefreshGuard } from '@server/auth/guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshGuard)
  @Post('refresh')
  async refreshToken(@Request() req: any) {
    return await this.authService.refreshToken(req.user);
  }
}
