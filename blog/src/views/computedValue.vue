<template>
<div class="home">
  <h1>Computed Value</h1>
  <input type="text" v-model="search">
  <p>Search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <hr>
  <button @click="router.push('/props')">Next Page</button>
  
</div>
</template>

<script>
import { computed, ref, watch, watchEffect} from 'vue'
import { useRouter } from 'vue-router';


export default {
  name: 'computedValue',
  setup() {
    const search = ref('')
    const names = ref(['mario','yoshi','luigi','toad','bowser','koopa','peach'])
    
    watch(search, () => {
      console.log('watch function run')
    })

    watchEffect(() => {
      console.log('watchEffect Function run', search.value)

    })
  
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    const router = useRouter()


    return { names, search, matchingNames, router }
    }
  }
</script>