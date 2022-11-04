<script setup>
import TabsWrapper from '@/components/TabsWrapper.vue'
import TabItem from '@/components/Tab.vue'
import axios from 'axios'
import {ref} from 'vue'
import Layout from '@//components/Layout'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const post = ref([

])
const test = ref(0)
const fetchText = async () => {
  try{
    test.value += 1
    const fetch = await axios.get('https://domotekhnika.ru/api/v1/news', {
      params: {
        page: test.value,
        limit: 1
      }
    })
    const res = fetch.data.data.news[0].shortText
    post.value.push(res)
    console.log(res)
  }
  catch (e) {
    console.log(e.responce)
  }
  return {post}
}

</script>

<template>
  <Header/>
  <Layout>
    <TabsWrapper>
      <TabItem title="Tab 1" id="1">{{ post }} <button @click="fetchText">Test</button></TabItem>
      <TabItem title="Tab 2" id="2">{{ post }} <button @click="fetchText">Test</button></TabItem>
      <TabItem title="Tab 3" id="3">Content from Tab 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptates,
        ipsa.</TabItem>
      <TabItem title="Tab 4" id="4">Content from Tab 4 Lorem ipsum dolor sit amet.</TabItem>
      <TabItem title="Tab 5" id="5">Content from Tab 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        maiores ab minima. Facere mollitia tempora soluta, commodi beatae sit. Distinctio.</TabItem>
      <TabItem title="Tab 6" id="6">Content from Tab 6</TabItem>
    </TabsWrapper>
  </Layout>
  <Footer/>
</template>

<style>
* {
  box-sizing: border-box;
}
</style>