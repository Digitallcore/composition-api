import axios from 'axios'
import {onMounted, ref} from 'vue'

const posts = ref([])
const page = ref(1)
const limit = ref(18)
export function useMainPage(){
    const fetchNewsTest = () => {
      axios.get('https://domotekhnika.ru/api/v1/news', {params:{
         page: page.value,
         limit: limit.value
      }})
      .then ((res) =>{
        posts.value = res.data.data.news 
      })
    }
    onMounted(fetchNewsTest)
    return {fetchNewsTest}
  }
export function useLoadPage(){
  const fetchLoadNews = () => {
    page.value += 1;
    axios.get('https://domotekhnika.ru/api/v1/news', {params:{
       page: page.value,
       limit: limit.value
    }})
    .then ((res) =>{
      posts.value = [...posts.value,...res.data.data.news]
    })
  }
  return {posts ,fetchLoadNews}
}
  



