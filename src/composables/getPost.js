import { projectFirestore } from "../firebase/config";
import { ref } from "@vue/reactivity";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // let data = await fetch("http://localhost:3000/posts/" + id);
      // if (!data.ok) {
      //   throw Error("Post Dosen't Exist");
      // }
      // post.value = await data.json();
      let res = await projectFirestore.collection("posts").doc(id).get();

      if (!res.exists) {
        throw Error("That Post does not exist.");
      }

      post.value = { ...res.data(), id: res.id };
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
