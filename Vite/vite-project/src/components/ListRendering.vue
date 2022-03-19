<template>
  <div>
    <h2 v-for="name in names" :key="name">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      names: ["Bruse", "Clark", "Diana"],
    };
  },
};
</script>