<script setup>
import { useProductStore } from '@/stores/product'

const props = defineProps({ product: Object })
const store = useProductStore()
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">
          {{ product.brand }} - {{ product.name }}
        </h5>
        <ul class="list-unstyled small flex-grow-1">
          <li><strong>Ár:</strong> {{ product.price.toLocaleString() }} Ft</li>
          <li><strong>Teljesítmény:</strong> {{ product.output_power ?? 'N/A' }} W</li>
          <li><strong>Üzemidő:</strong> {{ product.battery_life }} óra</li>
          <li><strong>Vízállóság:</strong> {{ product.water_resistance }}</li>
        </ul>
        <div class="form-check mt-auto">
          <button class="btn mt-auto"
          :class="store.isSelected(product.id) ? 'btn-danger' : 'btn-primary'"
          :disabled="store.isDisabled(product.id)"
          @click="store.toggleSelection(product.id)">
          {{ store.isSelected(product.id) ? 'Eltávolítás' : 'Kiválasztás' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>