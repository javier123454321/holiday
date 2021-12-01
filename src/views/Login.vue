<template>
<div class="text-center">
  <h1>Login</h1>
  <form @submit.prevent="sendLogin" class="flex flex-col max-w-md items-center mx-auto">
    <input type="text" name="name" id="name" class="border border-gray-700 p-2 mb-2" v-model="name">
    <input type="password" name="password" class="border border-gray-700 p-2" id="password" v-model="password">
    <button class="px-4 py-2 mt-4 cursor-pointer bg-gray-100">Submit</button>
  </form>
  <div class="mt-8">
  Or: <br>
  <metamask-login></metamask-login>
  </div>
</div>
</template>

<script lang="ts">
import { onMounted, inject, computed } from 'vue'
import { useStore } from 'vuex'
import Moralis from 'moralis/types'
export default {
//   name: 'App',
//   setup() {
//     const store = useStore()
//     const $moralis = inject('$moralis') as Moralis
//     const setUser = (payload: {}) => store.commit('setUser', payload)
   
   
//     const login = async () => {
//       const user = await $moralis.Web3.authenticate()
//       setUser(user)
//     }
//     const logout = async () => {
//       await $moralis.User.logOut()
//       setUser({})
//     }
//     const handleCurrentUser = () => {
//       const user = $moralis.User.current()
//       if (user) {
//         setUser(user)
//       }
//     }
//     onMounted(() => {
//       handleCurrentUser()
//     })
//     return {
//       login,
//       logout,
//       isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
//       user: computed(() => store.state.user)
//     }
//   }
}
</script>
