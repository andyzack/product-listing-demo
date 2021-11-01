<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="ml-auto mr-auto w-28">
    <HelloWorld msg="Product Listing App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
