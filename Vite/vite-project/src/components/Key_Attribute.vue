<template>
  <div>
    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Clark`'">{{ name }}</h2>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      names: ["Bruce", "Clark", "Diana"],
    };
  },
};
</script>