import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommonModule } from './common/common.module'
import { AuthModule } from './auth/auth.module'
import { SoftModule } from './soft/soft.module'
import { UploadModule } from './upload/upload.module'
import { UserModule } from './user/user.module'
import { CaptchaModule } from './captcha/captcha.module'
import { CacheModule } from '@nestjs/cache-manager'
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [
    CommonModule,
    AuthModule,
    SoftModule,
    UploadModule,
    UserModule,
    CaptchaModule,
    CacheModule.register({
      ttl: 600,
      isGlobal: true,
    }),
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
