<template>
    <Layout>
        <section class="p-4 rounded-lg shadow-lg bg-gray-50 w-2/3 h-auto relative">
            <div class="h-auto">
                <a
                class="text-xl font-bold text-center text-green-800 hover:text-green-600 hover:underline"
                >
                {{postPage.title}}
                </a>
                <div>    
                    <img
                    v-show="!!postPage.image > 0"
                    class="float-left m-2 pr-3 rounded"
                    :src="postPage.image"
                    height="140"
                    width="210"
                    />
                </div>      
                <p class="mt-2 text-justify text-gray-700 line-clamp-4">
                {{postPage.shortText}}
                </p>
                <p class="pb-5"><span v-html="postPage.text"></span></p>
            </div>
            <div class="absolute bottom-3 left-4">
                <p class="mt-2 font-light text-gray-600" @formatDatePage="formatDate">
                {{ formatDatePage(postPage.datePublish) }}
                </p>
            </div>
            <div class="absolute bottom-3 right-4">
                <RouterLink to="/" class="font-bold text-right text-green-800 hover:text-green-600 hover:underline">Back</RouterLink>
            </div>
        </section>
    </Layout>    
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Layout from '@/components/Layout.vue'
import NewsCard from '@/components/NewsCard.vue'
import axios from 'axios'

export default{
    components: { Layout, Header, Footer, NewsCard},
    data(){
        return {
            postPage: [],
        }
    },
    methods:{
        async fetchNewsPage(){
            try {
                const response = await axios.get('https://domotekhnika.ru/api/v1/news/'+this.$route.params.slug)
                const results = response.data
                this.postPage = results.data.news
            } catch(error){console.log(error.response)}
        },
        formatDatePage(strDate) {
            return new Date(strDate).toLocaleDateString('ru-ru', {year:"numeric", month:"long", day:"numeric"})
      },
    },
    mounted(){
        this.fetchNewsPage()
    }
}    
    
</script>