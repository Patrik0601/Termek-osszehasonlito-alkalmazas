<script setup>
import { useProductStore } from '@/stores/product'
const props = defineProps({
  products: Array,
  fields: Array,
  currency: String
})

const store = useProductStore()

const formatValue = (value, field) => {

  if (value === null || value === undefined)
    return "N/A"

  if (field.type === "boolean")
    return value ? "Igen" : "Nem"

  if (field.type === "currency")
    return value.toLocaleString() + " " + props.currency

  return field.unit
    ? value + " " + field.unit
    : value
}

</script>

<template>
  <div class="table-responsive">
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Tulajdonság</th>
          <th v-for="product in products" :key="product.id">{{ product.brand }}<br><small>{{ product.name }}</small>
            <div class="mt-2">
              <button class="btn btn-sm btn-danger" @click="store.toggleSelection(product.id)">Eltávolítás</button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="field in fields":key="field.key">
            <td><strong>{{ field.label }}</strong></td>
            <td v-for="product in products" :key="product.id"> {{ formatValue(product[field.key], field) }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>