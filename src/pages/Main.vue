<template>
  <Header/>
  <Layout>    
    <NewsList :posts="posts" />
  </Layout>
  <button class="mb-4 bg-green-900 text-green-100 w-32 self-center rounded" @click=fetchLoadNews>Показать ещё</button>
  <Footer/>  
       
</template>
  
<script>
import Layout from "@/components/Layout.vue"
import NewsList from "@/components/NewsList.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import {useMainPage, useLoadPage} from "@/hooks/useNews"
export default {
  components: {
  Layout,
  NewsList,
  Header,
  Footer
  },
  props:{
    posts: {
      type: Array
    }
  },
  setup(props){
    const {fetchNewsTest} = useMainPage();
    const {posts, fetchLoadNews} = useLoadPage()
    return {posts, fetchNewsTest, fetchLoadNews}
  }
}
</script>