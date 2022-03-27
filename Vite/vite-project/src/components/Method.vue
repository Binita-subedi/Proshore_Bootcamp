<template>
  <div>
    <h2>Happy Me</h2>
    <h2>Add method - {{ add(2, 5, 8) }}</h2>
    <h2>Add method - {{ add(10, 7, 8) }}</h2>
    <h2>Multiply method - {{ multiply(10) }}</h2>
    <h2>Multiply method - {{ multiply(baseValue) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 2,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
  },
};
</script>