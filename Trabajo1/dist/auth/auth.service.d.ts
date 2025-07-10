import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './auth.user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(loginCredentialsDto: LoginCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
