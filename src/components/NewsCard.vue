<template>
  <section class="p-4 rounded-lg shadow-lg bg-gray-50 w-80 h-auto relative">
    <div class="h-2/3">
      <a
        class="text-xl font-bold text-center text-green-800 hover:text-green-600 hover:underline" 
        target="_blank"
        rel="noreferrer"
      >
      <RouterLink :to="'/'+ post.slug">{{post.title}}</RouterLink>
      </a>
      <img
        v-show="!!post.image > 0"
        class="w-full mt-2 rounded"
        :src="post.image"
        height="140"
        width="210"
      />
      <p class="mt-2 text-justify text-gray-700 line-clamp-4 mb-8">
        {{ post.shortText }}
      </p>
    </div>
    <div class="absolute bottom-3 left-4">
      <p class="mt-2 font-light text-gray-600">
        {{ formatDate(post.datePublish) }}
      </p>
    </div>
  </section>
</template>
  
<script>
import { useFormatDate } from '@/hooks/useFormatDate';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props){
    const {formatDate} = useFormatDate()
    return {formatDate}
  }
} 
</script>