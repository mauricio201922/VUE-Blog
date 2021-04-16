<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Blog msg=""></Blog>
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog.vue'

export default {
  name: 'Home',
  components: {
    Blog
  }
}
</script>
