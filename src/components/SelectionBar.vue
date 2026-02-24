<script setup>
    import { useRouter } from 'vue-router'
    import { useProductStore } from '@/stores/product'

    const store = useProductStore()
    const router = useRouter()

    const goToCompare = () => {
        if(store.count >= 2){
            router.push('/compare')
        }
    }

    const goToProducts = () => {
        router.push('/')
    }
</script>

<template>
    <nav class="navbar navbar-dark bg-dark fixed-bottom">
        <div class="container-fluid">
            <div class="d-flex align-items-center ms-auto gap-3">
                <span class="navbar-text text-white">Kiválasztva: {{ store.count }} / 3</span>
                <button class="btn btn-primary" @click="goToProducts">Termékek</button>
                <button class="btn btn-primary" :disabled="store.count < 2" @click="goToCompare">Összehasonlítás</button>
            </div>
        </div>
    </nav>
</template>