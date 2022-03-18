<template>
  <div>
    <nav
      class="hidden md:flex items-center justify-between h-20 w-full py-4 px-6 fixed inset-x-0 top-0 bg-white border-b z-50"
    >
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <img
            src="../assets/hands_bk.png"
            alt="logo mains"
            class="h-10 ml-2 mr-12"
          />
        </nuxt-link>
        <nav v-for="(item, index) in items" :key="index">
          <nuxt-link
            :to="item.link"
            class="font-poppins mx-10 hover:text-darkPurple-500 ease-in-out duration-500"
            >{{ item.title }}</nuxt-link
          >
        </nav>
      </div>
      <nuxt-link
        to="/contact"
        class="flex items-center h-12 p-4 bg-darkPurple-500 rounded-lg hover:shadow-lg hover:shadow-darkPurple-400/40 hover:bg-darkPurple-400 ease-in-out duration-500"
        ><span class="font-poppins text-white">Me contacter</span></nuxt-link
      >
    </nav>

    <div class="flex justify-between items-center ml-auto md:hidden p-6">
      <nuxt-link to="/">
        <img src="../assets/hands_bk.png" alt="logo mains" class="h-10 mx-2" />
      </nuxt-link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="menu = !menu"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-in-out transition-medium duration-500"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-in-out transition-medium duration-500"
      leave-to-class="opacity-0"
    >
      <nav v-show="menu" class="w-full absolute bg-white transition-opacity">
        <ul class="flex flex-col text-center">
          <li v-for="(item, index) in items" :key="index">
            <nuxt-link
              :to="item.link"
              class="font-poppins hover:bg-darkPurple-500 ease-in-out duration-500 hover:text-white p-6 block"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link
          to="/contact"
          class="font-poppins text-center hover:bg-darkPurple-500 ease-in-out duration-500 hover:text-white p-6 block"
          >Me contacter</nuxt-link
        >
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Accueil',
          link: '/',
        },
        {
          title: "L'ergothérapie",
          link: '/ergotherapie',
        },
        {
          title: 'Prestations',
          link: '/prestations',
        },
      ],
    }
  },
  watch: {
    $route() {
      this.menu = false
    },
  },
}
</script>
