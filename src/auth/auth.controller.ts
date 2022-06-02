import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  Req,
  Body,
} from '@nestjs/common';

//dto is Data Transfer Objects

@Controller('auth')
export class AuthController {
  //nestjs handles the initialization of a service  for us,oonga boonga
  constructor(private authService: AuthService) {}

  @Post('signup')
  //we avoid doing this because it creates express dependency, what if i want to change to express
  //signup(@Req() req: Request) {
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
