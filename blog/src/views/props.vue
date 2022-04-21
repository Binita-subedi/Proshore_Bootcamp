<template>
<div class="home">
  <h1>Props</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <Postlist v-if="showPosts" :posts="posts" />
  </div>
  <div v-else>Loading....</div>
  
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
    const posts = ref([])
    const error = ref(null)
    const showPosts = ref(true)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
      
    }
    load()

    return { posts, showPosts }
  }
} 
</script>
