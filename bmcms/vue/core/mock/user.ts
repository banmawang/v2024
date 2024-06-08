import { MockMethod } from 'vite-plugin-mock'
import { ApiEnum } from '../../src/enum/ApiEnum'

export default [
  {
    url: '/api/' + ApiEnum.CURRENT_USER,
    method: 'get',
    response: () => {
      return {
        id: 1,
        name: '斑马兽',
        email: 'banmawang2021@163.com',
        sex: 1,
        avatar: '/images/bmcms.png',
        home: 'http://www.banmashou.com',
        weibo: null,
        wechat: 'banmashou2021',
        github: 'http://github.com/banmawang',
        qq: '',
        created_at: '2019-03-13T20:50:56.000000Z',
        updated_at: '2022-10-23T15:19:54.000000Z',
      }
    },
  },
] as MockMethod[]
