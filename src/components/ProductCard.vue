<script setup>
    import { ref } from 'vue';
    import { useShopStore } from '@/stores/shop';
    const props = defineProps({product: Object})

    const store = useShopStore()
</script>

<template>
    <div class="card col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="product.image" :alt="product.name" class="card-image-top">
        <p class="card-text">{{ product.name }}</p>
        <p class="card-text">Készlet: {{product.stock}} db</p>

        
        <div class="card-footer">
            <button :disabled="product.stock < 1" @click="store.addToCart(product.id)" class="btn btn-primary">Kosárba</button>
        </div>
    </div>
</template>