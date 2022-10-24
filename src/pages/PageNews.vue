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
                {{ formatDate(postPage.datePublish) }}
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
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useFormatDate } from "@/hooks/useFormatDate"

export default{
    components: { Layout, Header, Footer, NewsCard},
    props:{
        postPage:{
            type: Array
        }
    },
    setup(props){
        const {formatDate} = useFormatDate()
        const route = useRoute();
        const postPage = ref([])
        const fetchNewsPage = () => {
            const response = axios.get('https://domotekhnika.ru/api/v1/news/' + route.params.slug)
            .then((response) => {postPage.value = response.data.data.news})
        }
        onMounted(fetchNewsPage)
        return {postPage, formatDate}
    }
}
</script>