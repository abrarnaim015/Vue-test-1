<template>
  <div>
    <h1>Test Na'im {{ text }}</h1>
    <button @click="changeText()">Plus Number</button> |
    <button @click="changeTextMinus()">Minus Number</button> |
    <button @click="resetText()">Reset Number</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      text: 0
    }
  },
  methods: {
    changeText () {
      this.text = this.text + 1
    },
    resetText () {
      this.text = 0
    },
    changeTextMinus () {
      this.text = this.text - 1
    }
  }
}
</script>

<style>

</style>
