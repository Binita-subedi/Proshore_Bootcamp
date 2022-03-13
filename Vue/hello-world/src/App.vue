<template>
  <div>
    <div>{{ greet }} {{ name }}</div>
    <div v-text="channel"></div>
    <div v-html="key"></div>
    <div v-html="hack"></div>
    <h2 v-bind:id="headingId">Heading</h2>
    <button v-bind:disable="isDisabled">Bind</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      greet: "Hello",
      name: "Binita",
      channel: "Codevolution",
      key: "<b>freecode<b>",
      hack: `<a href="#" onclick="alert('You have been hacked !')">Win a Prize</a>`,
      headingId: "heading",
      isDisabled: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
