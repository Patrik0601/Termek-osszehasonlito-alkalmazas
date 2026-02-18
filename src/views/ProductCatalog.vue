<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue'
  import {toast} from 'vue3-toastify'
  import ProductCard from '@/components/ProductCard.vue';
  import { useShopStore } from '@/stores/shop';

  const store = useShopStore()
  
</script>

<template>
  <h1>Termékek</h1>
  <div class="row">
    <ProductCard v-for="p in store.products" :product="p"/>
  </div>
</template>
