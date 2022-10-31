<template>
  <h1>Real-time Data</h1>
  <dir v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </dir>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from "../firebase/config";
export default {
setup(){
    const posts = ref([])

    projectFirestore.collection('posts').orderBy('createdAt', 'desc')
    .onSnapshot((snap)=>{
        console.log(snap)
        let docs = snap.docs.map((doc)=>{
            return { ...doc.data(), id: doc.id}
        })
        console.log("documents: ",(docs))
        posts.value = docs
    })

    return { posts }
}
}
</script>

<style>

</style>