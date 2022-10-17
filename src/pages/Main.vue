<template>
    <Layout>    
      <NewsList :posts="posts" />
    </Layout>
  </template>
  
  <script>
  import Layout from "@/components/Layout.vue"
  import NewsList from "@/components/NewsList.vue"
  import axios from 'axios'
  
  export default {
    components: {
      Layout,
      NewsList,
    },
    data() {
      return {
        posts: [],
        page: 1,
        limit: 18
      }
    },
    methods:{
      async fetchNews(){
        try {
          const response = await axios.get('https://domotekhnika.ru/api/v1/news', {
            params: {
                page: this.page,
                limit: this.limit
            }
          })
          const results = response.data
          this.posts = results.data.news
        } catch(e){alert="Error!"}
      }
    },
    mounted(){
      this.fetchNews()
    }
  }
  </script>