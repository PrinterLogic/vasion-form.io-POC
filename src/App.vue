<template>
  <div id="app">
    <formio src="https://pkvmbfepdkcudwv.form.io/testform" v-on:submit="onSubmitMethod" />
    <hr />
    <div class="formio-header">
      <div class="md-layout-item vasion-page-title left-padding margin-bottom">
      </div>
      <div class="col-xs-8 col-sm-9 col-md-10 formarea">
          <div class="formio-extension" v-if="showForm">
            <input
              class='form-name'
              inputType='top-white'
              name='form-name'
              id='form-name'
              placeholder='Untitled Form'
              v-model='saveEFormsPayload.Name'
            />
            <input
              class='form-description'
              inputType='top-white'
              name='form-description'
              id='form-description'
              placeholder='Form Description'
              v-model='saveEFormsPayload.Description'
            />
          </div>
          <div class="md-layout-item vasion-flex-end">
            <VasionButton :isDisabled="isLoading" id="eform-back" class="eformButtonsNoAddition" :classProp="'secondary'" v-if="showBack" @vasionButtonClicked="calculateBackLocation()">Back</VasionButton>
            <VasionButton :isDisabled="isLoading" id="eform-next" class="eform-buttons" :class='{eformButtonsNoAddition: showBack}' :classProp="'primary'" v-if="showNext" @vasionButtonClicked="calculateNextLocation()">Next</VasionButton>
            <VasionButton :isDisabled="isLoading" id="eform-save" class="eformButtonsNoAddition" :classProp="'primary'" v-if="showSave" @vasionButtonClicked="save()">Save</VasionButton>
          </div>
      </div>
    </div>
    <div class="vasion-form-builder">
      <formbuilder :form="form" :options="formConfig" v-on:change="onBuilderChange(schema)"></formbuilder>
    </div>
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
@import './assets/css/vasion-formio.scss';
@import 'https://unpkg.com/formiojs@latest/dist/formio.full.min.css';
@import './assets/css/variables.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#browse-folders-for-eform {
  position: relative;
  top: 10px;
  margin-right: 40px;
}
.builder-components {
  border-radius: 0px 0px 8px 8px;
  width: 1004px;
  overflow-y: inherit;
  margin: 0 auto;
  margin-top: 30px;
}
.vasion-card {
  width: 1000px;
  min-height: 422px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(22, 23, 24, 0.15);
  z-index: 3000;
  margin: 0 auto;
  background-color: $white;
  display: flex;
  padding: 40px;
  flex-direction: column;
  max-height: calc(100vh - 230px);
  overflow-y: auto;
}
.eform-buttons {
  position: relative;
  bottom:62px;
  left: 6px;
}
.eformButtonsNoAddition {
  position: relative;
  bottom: 1px;
  left: 6px;
}
.formio-builder-form {
  padding-top: 1px !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.folderText {
  text-align: left;
}
.folder-dialog-browse {
  width: 400px;
  height: 300px;
  overflow: auto;
  z-index: 30;
}
.formio-extension {
  width: 1004px;
  height: 122px;
  background-color: $white;
  position: relative;
  top: 160px;
  right: 9px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0 4px 8px 0 rgba(22, 23, 24, 0.15);
  z-index: 300000;
  margin: 0 auto;
}
.formio-header {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  box-shadow: 0 1px 0 0 #e4e5e6;
  z-index: 2;
}
.form-name {
  border: none;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  padding: 30px 24px 8px 24px;
  outline: none;
  border-radius: 8px 8px 0 0;
}
.form-name:focus,
.form-description:focus {
  background-color: $grey-75;
}
.form-description {
  border: none;
  width: 100%;
  font-size: 18px;
  padding: 0px 0px 30px 24px;
  outline: none;
  border-bottom: 1px solid #d6d8da;
}
.header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.field-value {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.left-padding {
  padding-left: 15px;
}
.left-pannel {
  height: 0;
  width: 84.1%;
}
.line-item {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $grey-75;
  padding: 10px 0px;
}
.line-item-name {
  position: relative;
  top: 8px;
}
.margin-bottom {
  margin-bottom: 22px;
  color: $grey-400;
}
.margin-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.md-overlay {
  z-index: 20;
}
.md-dialog {
  z-index: 50;
}
.search-group {
  display: flex;
  justify-content: space-between;
  padding-bottom: 38px;
}
.horizontal-line {
  border-bottom: 1px solid $grey-300;
  margin: 30px 0px;
}
.vasion-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#vasion-form-builder .formio-form {
  position: relative;
  min-height: 80px;
  top: 125px;
  z-index: 1;
}
@media screen and (max-width: 1535px) {
  .builder-components {
  width: 890px;
  }
  .formio-extension {
    width: 890px;
  }
}
@media screen and (max-width: 1400px) {
  .builder-components {
  width: 700px;
  }
  .formio-extension {
    width: 700px;
  }
}
</style>
