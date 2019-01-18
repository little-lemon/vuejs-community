import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

const directives = {
  validator,
  dropdown
}

console.log(directives)
console.log(Object.entries(directives))

for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}