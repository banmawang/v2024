import * as veeValidate from 'vee-validate'
import { all } from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
import yup from './yup'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import { App } from 'vue'
// loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')

export default () => {}

veeValidate.configure({
  // validateOnInput: true,
  generateMessage: localize('zh_CN', zh_CN),
})

Object.entries(all).forEach(([name, rule]) => {
  veeValidate.defineRule(name, rule)
})

// Object.keys(all).forEach((key) => {
//   veeValidate.defineRule(key, rules[key])
// })

const useFields = (fields: string[]) => {
  fields.forEach((field) => veeValidate.useField(field))
}

const setup = (app: App) => {}

export { yup, veeValidate, useFields, setup }
