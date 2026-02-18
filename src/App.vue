<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios';
  import {onMounted} from 'vue'
  import { useShopStore } from './stores/shop';
  const shopStore = useShopStore()

  onMounted(() => {
    axios.get('')
    .then(res => {
      shopStore.products = res.data      
    })
    
  })
</script>

<template>
       <nav>
        <RouterLink to="/products">Termékek</RouterLink>&nbsp;
        <RouterLink to="/schema">Összehasonlítás</RouterLink>
      </nav>
  
  <RouterView />
</template>
