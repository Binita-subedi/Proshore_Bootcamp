<template>
  <div>
    <h2>{{ name }}</h2>
    <hr />
    <div>
      <button v-on:click="name = 'Batman'">Change Name</button>
    </div>
    <hr />
    <div>
      <button v-on:mouseover="name = 'Batman'">Change Name</button>
    </div>
    <div>
      <h2>{{ count }}</h2>
      <div>
        <button v-on:click="increment(1)">Increment by 1</button>
        <button v-on:click="increment(5)">Increment by 5</button>
        <hr />
        <button v-on:click="decrement(1)">Decrement by 1</button>
        <button v-on:click="decrement(5)">Decrement by 5</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Binita",
      count: 0,
    };
  },
  methods: {
    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
  },
};
</script>
