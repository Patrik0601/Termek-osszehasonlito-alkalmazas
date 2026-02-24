import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify'
import axios from 'axios'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const fields = ref([])
  const meta = ref(null)

  const loading = ref(false)
  const error = ref(null)

  const selectedIds = ref([])

  const count = computed(() => selectedIds.value.length)

  const selectedProducts = computed(() =>
    products.value.filter(p =>
      selectedIds.value.includes(p.id)
    )
  )

const fetchAll = async () => {
  loading.value = true
  error.value = null

  try {
    const [itemsRes, fieldsRes, metaRes] = await Promise.all([
      axios.get('http://localhost:3000/items'),
      axios.get('http://localhost:3000/fields'),
      axios.get('http://localhost:3000/meta')
    ])

    products.value = itemsRes.data
    fields.value = fieldsRes.data
    meta.value = metaRes.data

  } catch (err) {
    error.value = err.response?.data?.message || err.message
  } finally {
    loading.value = false
  }
}

  const isSelected = (id) =>
    selectedIds.value.includes(id)

  const isDisabled = (id) =>
    count.value >= 3 &&
    !selectedIds.value.includes(id)

  const toggleSelection = (id) => {
    
    if (isSelected(id)) {
      selectedIds.value =
        selectedIds.value.filter(i => i !== id)
        toast.info("Termék eltávolítva a kiválasztottakból!")
    }
    else if (count.value < 3) {
      selectedIds.value.push(id)
      toast.success("Termék hozzáadva a kiválasztottakhoz!")
    }
  }

  return {
    products,
    fields,
    meta,
    loading,
    error,
    selectedIds,
    count,
    selectedProducts,
    fetchAll,
    toggleSelection,
    isSelected,
    isDisabled
  }
})