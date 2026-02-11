import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', () => {
  const products = ref([])
  const cart = ref([])

  const addToCart = (id)  => {
    let cartItem = cart.value.find((item) => item.id == id)
    console.log(cartItem)
    if (cartItem == undefined){
      cart.value.push({id : id, q : 1})      
    } else{
      cartItem.q += 1
    }
    console.table(cart.value)
    findProductById.stock--
  }

  function removeProduct(id){
    let q = cart.value.find(x => x.id == id).q
    cart.value = cart.value.filter(x => x.id != id)
    findProductById.stock += q
  }

  function changeQuantity(id, dir){
    let p = findProductById(id);
    let cartItem = cart.value.find(c = C.id == id);
    if(dir == '+'){
      if(p.stock > 0){
        p.stock--
        cartItem.q++
      }

    }
    if(dir == '-'){
      if (cartItem.q >= 1){
        cartItem.q--
        p.stock++
      }
      if(cartItem.q == 0){
        removeProduct(id)
      }
    }
  }

  function total(){
    let t = 0;
    for (const cartItem of cart.value) {
      t += findProductById(cartItem.id).price * cartItem.q
    }
    return t;
  }

  function findProductById(id){
    return products.value.find(p => p.id == id)
  }

  return { 
    cart, 
    products, 
    addToCart,
    removeProduct,
    changeQuantity,
    total
  }
})
