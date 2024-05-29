import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import config from '../config'

@Controller('config')
export class AppController {
  constructor(@Inject(config.KEY) private conf: ConfigType<typeof config>) {}

  @Get()
  getHello() {
    return this.conf.city
  }
}
