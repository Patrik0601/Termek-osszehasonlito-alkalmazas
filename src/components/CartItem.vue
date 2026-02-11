<script setup>
    const props = defineProps({item: Object})
    import {ref, onMounted, onUpdated} from 'vue'
    import { useShopStore } from '@/stores/shop';
    const store = useShopStore()
    const product = ref({})

    onMounted(() =>{
        product.value = store.products.find(x => x.id == props.item.id)
    })
    onUpdated(() =>{
        product.value = store.products.find(x => x.id == props.item.id)
    })
</script>

<template>
    <div>
        {{ product.name }} 
        <span class="btn btn-secondary" @click="store.changeQuantity(product.id, '-')"> - </span>
        Mennyiség: {{ item.q }} 
        <span class="btn btn-secondary" @click="store.changeQuantity(product.id, '+')"> + </span>
        <span>{{ product.price * item.q }} Ft</span>
        <button class="btn btn-outline-danger" @click="store.removeProduct(item.id)">Eltávolít</button>
    </div>
</template>