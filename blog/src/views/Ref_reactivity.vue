<template>
  <div class="home">
   <h1>Using Ref for reactivity</h1>
   <p> My name is {{ name }} and my age is {{ age }}</p>
   <button @click="handleclick">Click me</button>
   <button @click="age++">add 1 to age</button>
   <input type="text" v-model="name">
   <hr>
   <button @click="router.push('/computedvalue')">Next Page</button>
  

  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';


export default {
  name: 'Ref_reactivity',
   setup() {

    const p = ref(null)

    let name = ref('mario')
    let age = ref(30)

    const handleclick = () => {
      console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'Hello World'
      name.value = 'Subedi'
      age.value = 34
    }
     const router = useRouter()

    return { name, age, handleclick, p, router}
  },
}
</script>
