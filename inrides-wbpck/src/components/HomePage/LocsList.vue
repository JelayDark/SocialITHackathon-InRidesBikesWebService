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
      items: ['aa', 'dd', 'ff0', 'ffds', 'dsfdf', 'aa', 'dd', 'ff0', 'ffds', 'dsfdf', 'aa', 'dd', 'ff0', 'ffds', 'dsfdf', 'aa', 'dd', 'ff0', 'ffds', 'dsfdf', 'aa', 'dd', 'ff0', 'ffds', 'dsfdf', 'aa', 'dd', 'ff0', 'ffds', 'dsfdf']
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
  height: 490px;
  li {
    display: block;
    margin-bottom: 1px;
    padding: 8px 8px 8px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    background-color: #BCA0D7;
    font-family: 'Lato', sans-serif;
    &:hover {
      background-color: #9D79BC;
      cursor: pointer;
    }
  }
}
</style>
