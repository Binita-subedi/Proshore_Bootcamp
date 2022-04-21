<template>
<div class="home">
  <h1>Props</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <Postlist v-if="showPosts" :posts="posts" />
  </div>
  <div v-else>Loading....</div>
  
  <button @click="showPosts = !showPosts">toggle Posts</button> |
  <button @click="posts.pop()">delete a post</button>
</div>
</template>


<script>
import Postlist from '../components/Postlist.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'props', 
  components: { Postlist },
  setup() {
    const { posts, error, showPosts, load
  } = getPosts()

  load()
  
  return { posts, error, showPosts }
  }
} 
</script>
