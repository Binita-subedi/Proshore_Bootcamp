
import { ref } from 'vue'

const getPosts = () => {
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
    return { posts, error, showPosts, load }
  }

  export default getPosts
