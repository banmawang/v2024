import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import config from '../config'
import { ConfigService } from './config.service'
import { PrismaService } from './prisma.service'
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [],
  providers: [ConfigService, PrismaService],
  exports: [ConfigService, PrismaService],
})
export class CommonModule {}
