<template>
  <div class="home">
   Home
   <h1>Home</h1>
   <h2>Refs</h2>
   <p>{{ ninjaOne.name}} - {{ ninjaOne.age}}</p>
   <button @click="updateNinjaOne">Update ninja one</button>
   <button @click="router.push('/reactivity')">Redirect</button>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';


    const ninjaOne = ref({ name: 'mario', age: 30 })
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
     const router = useRouter()
   
  

 </script>



  
