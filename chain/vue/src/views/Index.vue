<template>
  <div>
    <div class="container">
      <h1>
        <div v-if="address">
          Go to your script:
          <router-link class="sp-button" :to="{ name: 'script-detail', params: { script_address: address } }">
            {{ address }}
          </router-link>
        </div>
      </h1>
      <SpTokenSend :address="address" refresh="true" />
      <SpTransferList :address="address" />
    </div>
  </div>
</template>

<script>
import { JSONEditor } from '@json-editor/json-editor'

class CustomTheme extends JSONEditor.AbstractTheme {
  getButton(text, icon, title) {
    const el = super.getButton(text, icon, title)
    //el.classList.add('sp-button')
    return el
  }

  //getContainer() {
  //  const el = document.createElement('div')
  //  el.classList.add('sp-box', 'sp-shadow')
  //  return el
  //}

  getFormControl(label, input, description, infoText) {
    const group = document.createElement('div')

    if (label && (input.type === 'checkbox' || input.type === 'radio')) {
      group.classList.add(input.type)
      label.insertBefore(input, label.firstChild)
      group.appendChild(label)
    } else {
      input.classList.add('sp-input')
      group.classList.add('form-group')
      if (label) {
        label.classList.add('control-label')
        label.classList.add('sp-box-header')
        group.appendChild(label)
        if (infoText) label.appendChild(infoText)
      }
      group.appendChild(input)
    }

    if (description) group.appendChild(description)

    return group
  }
}
CustomTheme.rules = {}
JSONEditor.defaults.themes.myCustom = CustomTheme

export default {
  name: 'Index',
  computed: {
    address() {
      return this.$store.getters['common/wallet/address']
    },
  },
}
</script>
