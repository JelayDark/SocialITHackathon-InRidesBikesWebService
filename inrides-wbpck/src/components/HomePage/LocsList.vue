<template>
  <ul class="list-of-points">
    <li v-for="item in items" @click="chooseThis(item)">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'locs-list',
  data: () => {
    return {
      items: ['aa', 'dd', 'ff0', 'ffds', 'dsfdf', 'aa', 'dd', 'ff0', 'ffds', 'dsfdf']
    }
  },
  methods: {
    chooseThis (item) {
      console.log(`item chosen: ${item}`)
    }
  },
  created: () => {
    console.log('check for items')
  }
}
</script>

<style lang="scss" scoped>
.list-of-points {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  li {
    display: block;
    margin: 5px;
    padding: 5px;
    background-color: #eee;
    &:hover {
      background-color: #eee000;
      cursor: pointer;
    }
  }
}
</style>
