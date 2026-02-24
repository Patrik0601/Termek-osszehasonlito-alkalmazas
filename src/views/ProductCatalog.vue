<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import ProductCard from '@/components/ProductCard.vue'
import SelectionBar from '@/components/SelectionBar.vue'

const store = useProductStore()

onMounted(() => {
  store.fetchAll()
})
</script>

<template>
  <div class="container my-4">

    <div v-if="store.loading" class="text-center">
      <p class="mt-2">Adatok betöltése...</p>
    </div>

    <div v-else-if="store.error" class="alert alert-danger">
      {{ store.error }}
    </div>

    <div v-else class="row">
      <h1 class="text-center">Termékek</h1>
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
      <SelectionBar />
    </div>

  </div>
</template>