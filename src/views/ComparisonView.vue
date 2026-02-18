<script setup>
  import { useShopStore } from '@/stores/shop';
  import CartItem from '@/components/CartItem.vue';
  const store = useShopStore()
</script>
<template>
  <h1>Kosár</h1>
  <CartItem v-for="c in store.cart" :item="c" />
  <p>Fizetendő: {{ store.total() }}</p>
</template>
