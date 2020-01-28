<template>
  <div id="app">
    <formio src="https://pkvmbfepdkcudwv.form.io/testform" v-on:submit="onSubmitMethod" />
    <hr />
    <formbuilder v-bind:form="{display: 'form'}" v-bind:options="{}" v-on:change="onBuilderChange(schema)"></formbuilder>
  </div>
</template>

<script>
import { Form } from 'vue-formio';
import { FormBuilder } from 'vue-formio';

export default {
  name: 'app',
  components: {
    formio: Form,
    formbuilder: FormBuilder
  },

  methods: {
    onSubmitMethod: function(submission) {
      // eslint-disable-next-line
      console.log(submission);
    },
    onBuilderChange: function(schema) {
      // eslint-disable-next-line
      console.log(schema);
    }
  }
}
</script>

<style>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
@import 'https://unpkg.com/formiojs@latest/dist/formio.full.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
