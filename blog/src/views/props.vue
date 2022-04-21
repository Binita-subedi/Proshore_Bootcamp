<template>
<div class="home">
  <h1>Props</h1>
  <Postlist :posts="posts" />

</div>
</template>


<script>
import Postlist from '../components/Postlist.vue'
import { ref } from 'vue'

export default {
  components: { Postlist },
  name: 'Home',
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', id: 1},
      { title: 'top 5 css tips', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', id: 2},
    ])
    return { posts }
  }
} 
</script>
