<template>
  <div>
    <div>{{ greet }} {{ name }}</div>
    <div v-text="channel"></div>
    <div v-html="key"></div>
    <div v-html="hack"></div>
    <h2 v-bind:id="headingId">Heading</h2>
    <button v-bind:disable="isDisabled">Bind</button>
    <h2 class="underline">Underlined text</h2>
    <h2 v-bind:class="status">Status</h2>
    <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
    <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">MOVIES</h2>
    <h2 v-bind:class="['new', 'promoted']">Newly promoted movie</h2>

    <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">
      The movie has sold out
    </h2>
    <h2
      v-bind:class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']"
    >
      Array conditional movie
    </h2>
    <h2
      v-bind:class="{
        promoted: isPromoted,
        new: !isSoldout,
        'sold-out': isSoldout,
      }"
    >
      Object conditional movie
    </h2>
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
      status: "sucess",
      isPromoted: true,
      isSoldout: true,
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

.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: rgb(185, 113, 113);
}
</style>
