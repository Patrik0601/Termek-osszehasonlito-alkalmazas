<script setup>
import { useProductStore } from '@/stores/product'
import ComparisonTable from '@/components/ComparisonTable.vue'
import SelectionBar from '@/components/SelectionBar.vue';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const store = useProductStore()
const router = useRouter()

watch(
  () => store.count,
  (newCount) => {
    if(newCount < 2){
      router.push('/')
    }
  }
)
</script>

<template>
  <div class="container my-5">
    <h2 class="mb-4">Termék összehasonlítás</h2>
    <ComparisonTable
      :products="store.selectedProducts"
      :fields="store.fields"
      :currency="store.meta?.currency"
      @remove="store.toggleSelection"
    />
  </div>
  <SelectionBar />
</template>