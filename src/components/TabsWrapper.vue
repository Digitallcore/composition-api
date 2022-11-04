<template>
  <div class="tab">
    <ul class="tab__header">
      <li v-for="title in tabTitles"
          :key="title"
          :class="{selected: title == selectedTitle}"
          @click="selectedTitle = title"
      >
        {{title}}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import {ref, provide} from 'vue'
export default {
  setup(props, {slots}) {
    const tabTitles = ref(slots.default().map((tab)=> tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide("selectedTitle", selectedTitle)
    return {tabTitles, selectedTitle}
  }
}
</script>

<style scoped>
.tab{
  max-width: 400px;
  margin: 10px auto;
}
.tab__header{
  list-style: none;
  padding: 0;
  display: flex;
}
.tab__header li {
  width: 90px;
  text-align: center;
  padding: 10px 20px;
  background-color: #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s all ease-out;
  border: 1px solid teal;
}
.tab__header li.selected {
  background-color: teal;
  color: white;
  margin: 0 5px 0 5px;
}
</style>