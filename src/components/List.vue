<template>
  <ul>
    <li :key="item" v-for="item in items">
      {{ item }} 本漫画
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: {
    items: {
      type: Array,
      default: ()=>{
          return []
      }
    }
  }
}
</script>
