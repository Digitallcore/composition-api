<template>
  <Header/>
  <Layout>    
    <NewsList :posts="posts" />
  </Layout>
  <button class="mb-4 bg-green-900 text-green-100 w-32 self-center rounded" @click="loadMorePosts">Показать ещё</button>
  <Footer/>  
       
</template>
  
<script>
import Layout from "@/components/Layout.vue"
import NewsList from "@/components/NewsList.vue"
import axios from 'axios'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
  
export default {
  components: {
  Layout,
  NewsList,
  Header,
  Footer
},
  data() {
    return {
      posts: [],
      page: 1,
      limit: 18,
      pageCount: 0
    }
  },
  methods:{
    async fetchNews(){
      try {
        const response = await axios.get('https://domotekhnika.ru/api/v1/news', {
          params: {
              page: 1,
              limit: this.limit
          }
        })
        const results = response.data
        this.pageCount = results.data.pageCount
        this.posts = results.data.news
      } catch(e){alert="Error!"}
    },
    async loadMorePosts(){
      try {
        this.page += 1;
        const response = await axios.get('https://domotekhnika.ru/api/v1/news', {
          params: {
            page: this.page,
            limit: this.limit
          }
        })
        const results = response.data
        this.pageCount = results.data.pageCount
        this.posts = [...this.posts, ...results.data.news]
      } catch(e){alert="Error!"}
    },  
  },
  mounted(){
    this.fetchNews()
  }
}
</script>