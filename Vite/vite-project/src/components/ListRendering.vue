<template>
  <div>
    <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>
    <h2 v-for="name in fullNames" :key="name.first">
      {{ name.first }} {{ name.last }}
    </h2>
    <div v-for="actor in actors" :key="actor.name">
      <h2>{{ actor.name }}</h2>
      <h2 v-for="movie in actor.movies" :key="movie">{{ movie }}</h2>
    </div>
    <h2 v-for="(value, key, index) in myInfo" :key="value">
      {{ index }} {{ key }} {{ value }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["Bruse", "Clark", "Diana"],
      fullNames: [
        { first: "Bruce", last: "Wayne" },
        { first: "Clark", last: "Kent" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "The  Pestige"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Binita",
        channel: "Codevolution",
        course: "Vue 3",
      },
    };
  },
};
</script>