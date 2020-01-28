import Vue from 'vue'
import App from './App.vue'

// import { Form } from 'vue-formio';
// import { FormBuilder } from 'vue-formio';

Vue.config.productionTip = false

// Vue.use(Form, 'formio')
// Vue.use(FormBuilder, 'formbuilder')

new Vue({
  render: h => h(App),
}).$mount('#app')
