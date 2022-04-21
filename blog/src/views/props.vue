<template>
<div class="home">
  <h1>Props</h1>
  <Postlist v-if="showPosts" :posts="posts" />
  <button @click="showPosts = !showPosts">toggle Posts</button>
  <button @click="posts.pop()">delete a post</button>
</div>
</template>


<script>
import Postlist from '../components/Postlist.vue'
import { ref } from 'vue'

export default {
  name: 'props',
  components: { Postlist },
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', id: 1},
      { title: 'top 5 css tips', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', id: 2},
    ])
    const showPosts = ref(true)

    return { posts, showPosts }
  }
} 
</script>
