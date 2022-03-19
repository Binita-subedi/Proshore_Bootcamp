<template>
  <div>
    <h2 v-if="num === 0">The number is zere</h2>
    <h2 v-else-if="num < 0">The number is negative</h2>
    <h2 v-else-if="num > 0">The number is positive</h2>
    <h2 v-else>Not a number</h2>

    <template v-if="display">
      <h2>Binita</h2>
      <h2>Codevolution</h2>
      <h2>Vue</h2>
    </template>

    <h2 v-show="showElement">Using v-show</h2>
    <h2 v-if="showElement">Using v-if</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      num: "Hi",
      display: true,
      showElement: false,
    };
  },
};
</script>