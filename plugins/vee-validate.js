import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, alpha, regex } from 'vee-validate/dist/rules';

// Add the required rule
extend('required', {
    ...required,
    message: (field) => `${field} is required.`
})

extend('regex', {
    ...regex,
    message: (field) => `${field} is incorect.`
})
// Add the email rule
extend('email', email)
extend('alpha', alpha)
extend('regex', regex)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)