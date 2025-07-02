import { Module } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { AuthResolver } from './Auth.resolver';

@Module({
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
