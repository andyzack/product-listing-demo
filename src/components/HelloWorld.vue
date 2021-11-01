<template>
  <div class="hello">
    <h1 class="mt-10 mb-2 text-4xl font-bold">{{ msg }}</h1>
    <p class="text-sm italic">
      Product listing demo using <a href="https://cli.vuejs.org/" target="_blank" rel="noopener" class="text-red-500 underline">Vue.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="text-red-500 underline">Tailwind.css</a> <br /><br />
    </p>
    <h3 class="mt-10">Installed CLI Plugins</h3>
    <ul class="p-0">
      <li class="inline-block px-2"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" class="text-red-500 underline">babel</a></li>
      <li class="inline-block px-2"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" class="text-red-500 underline">eslint</a></li>
    </ul>
    <h3 class="mt-10">Ecosystem</h3>
    <ul class="p-0">
      <li class="inline-block px-2"><a href="https://router.vuejs.org" target="_blank" rel="noopener" class="text-red-500 underline">vue-router</a></li>
      <li class="inline-block px-2"><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" class="text-red-500 underline">vuex</a></li>
      <li class="inline-block px-2"><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" class="text-red-500 underline">vue-devtools</a></li>
      <li class="inline-block px-2"><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" class="text-red-500 underline">vue-loader</a></li>
      <li class="inline-block px-2"><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" class="text-red-500 underline">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
