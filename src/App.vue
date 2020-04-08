<template>
  <div id="app">
    <formio src="https://pkvmbfepdkcudwv.form.io/testform" v-on:submit="onSubmitMethod" />
    <hr />
    <formbuilder :form="form" :options="formConfig" v-on:change="onBuilderChange(schema)"></formbuilder>
  </div>
</template>

<script>
import { Form } from 'vue-formio';
import { FormBuilder } from 'vue-formio';
const defaultIgnoreItems = [
  { key: 'api', ignore: true },
  { key: 'conditional', ignore: true },
  { key: 'logic', ignore: true },
  { key: 'layout', ignore: true },
  { key: 'hidden', ignore: true },
  {
    key: 'display',
    ignore: false,
    components: [
      { key: 'prefix', ignore: true },
      { key: 'suffix', ignore: true },
      { key: 'widget.type', ignore: true },
      { key: 'widget', ignore: true },
      { key: 'inputMask', ignore: true },
      { key: 'allowMultipleMasks', ignore: true },
      { key: 'inputMasks', ignore: true },
      { key: 'customClass', ignore: true },
      { key: 'tabindex', ignore: true },
      { key: 'hidden', ignore: true },
      { key: 'hideLabel', ignore: true },
      { key: 'showWordCount', ignore: true },
      { key: 'showCharCount', ignore: true },
      { key: 'mask', ignore: true },
      { key: 'autofocus', ignore: true },
      { key: 'spellcheck', ignore: true },
      { key: 'dataGridLabel', ignore: true },
      { key: 'disabled', ignore: true },
      { key: 'tableView', ignore: true },
      { key: 'modalEdit', ignore: true },
    ],
  },
  {
    key: 'data',
    ignore: false,
    components: [
      { key: 'multiple', ignore: true },
      { key: 'persistent', ignore: true },
      { key: 'protected', ignore: true },
      { key: 'dbIndex', ignore: true },
      { key: 'encrypted', ignore: true },
      { key: 'redrawOn', ignore: true },
      { key: 'clearOnHide', ignore: true },
      { key: 'customDefaultValuePanel', ignore: true },
      { key: 'calculateValuePanel', ignore: true },
      { key: 'allowCalculateOverride', ignore: true },
    ],
  },
]

const builderConfig = {
  builder:
  {
  basic: false,
  advanced: false,
  premium: false,
  data: false,
  customBasic: {
      title: 'Basic Components',
      default: true,
      weight: 0,
      components: {
          textfield: true,
          textarea: true,
          number: true,
          checkbox: true,
          selectboxes: true,
          radio: true,
          select: true,
      },
  },
  customAdvanced: {
      title: 'Advanced',
      default: true,
      weight: 0,
      components: {
          email: true,
          url: true,
          datetime: true,
          day: true,
          time: true,
          currency: true,
          file: true,
      },
  },
  layout: false,
  },
  editForm: {
  textfield: [...defaultIgnoreItems],
  textarea: [...defaultIgnoreItems],
  number: [...defaultIgnoreItems],
  checkbox: [...defaultIgnoreItems],
  selectboxes: [...defaultIgnoreItems],
  radio: [...defaultIgnoreItems],
  email: [...defaultIgnoreItems],
  url: [...defaultIgnoreItems],
  datetime: [...defaultIgnoreItems],
  day: [...defaultIgnoreItems],
  time: [...defaultIgnoreItems],
  currency: [...defaultIgnoreItems],
  signature: [...defaultIgnoreItems],
  },
}

export default {
  name: 'app',
  components: {
    formio: Form,
    formbuilder: FormBuilder
  },
  data() {
    return {
      form: {
        display: 'form',
        components: [],
      },
      formConfig: builderConfig,
      schema: {
        components: [
          {
            type: 'textfield',
            key: 'firstName',
            label: 'First Name',
            placeholder: 'Enter your first name.',
            input: true
          },
          {
            type: 'textfield',
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Enter your last name',
            input: true
          },
          {
            type: 'button',
            action: 'submit',
            label: 'Submit',
            theme: 'primary'
          }
        ]
      },
    }
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
