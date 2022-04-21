<template>
  <div class="home">
   <h1>Home</h1>
   <h2>Refs</h2>
   <p>{{ ninjaOne.name}} - {{ ninjaOne.age}}</p>
   <button @click="updateNinjaOne">Update ninja one</button>
   <h2>Reactive</h2>
   <p>{{ ninjaTwo.name}} - {{ ninjaTwo.age}}</p>
   <button @click="updateNinjaTwo">Update ninja Two</button>

   <hr>
   
   <button @click="router.push('/reactivity')">Next page</button>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';


    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name:'luigi', age: 35})
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 50
    }
    const router = useRouter()
   
  
 
 </script>



  
