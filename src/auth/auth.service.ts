import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

    async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });
    if (existingUser) {
      throw new ConflictException('Пользователь с таким именем уже существует');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const defaultRole = await this.prisma.role.findUnique({
      where: { name: 'user' },
    });

    const user = await this.prisma.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        password: hashedPassword,
        roles: {
          connect: { id: defaultRole?.id } 
        }
      },
    });

    const { password, ...result } = user;
    return result;
  }

  async login(dto: LoginDto) {
   const user = await this.prisma.user.findUnique({
      where: { username: dto.username },
      include: { roles: true }, 
    });
    
     if (!user) throw new UnauthorizedException('Неверный логин или пароль');

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Неверный логин или пароль');

    const payload = { 
      sub: user.id, 
      username: user.username,
      roles: user.roles.map(r => r.name) 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }}