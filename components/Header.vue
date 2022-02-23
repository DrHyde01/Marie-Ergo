<template>
  <div>
    <nav
      class="hidden sm:flex items-center justify-between h-20 w-full py-4 px-6 fixed inset-x-0 top-0 bg-white"
    >
      <nuxt-link to="/">
        <img src="../assets/hands_bk.png" alt="logo mains" class="h-10 mx-2" />
      </nuxt-link>
      <div class="flex items-center justify-between">
        <nav v-for="(item, index) in items" :key="index">
          <nuxt-link
            :to="item.link"
            class="font-poppins font-light mx-10 hover:text-darkPurple-500 ease-in-out duration-500"
            >{{ item.title }}</nuxt-link
          >
        </nav>
      </div>
      <nuxt-link
        to="/contact"
        class="flex items-center h-12 p-4 bg-darkPurple-500 rounded-lg hover:shadow-xl hover:bg-darkPurple-400 ease-in-out duration-500"
        ><span class="font-poppins font-light text-white"
          >Contact</span
        ></nuxt-link
      >
    </nav>

    <div class="flex justify-between items-center ml-auto sm:hidden p-6">
      <nuxt-link to="/">
        <img src="../assets/hands_bk.png" alt="logo mains" class="h-10 mx-2" />
      </nuxt-link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
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

    <nav v-show="menu" class="w-full">
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
        >Contact</nuxt-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Ergothérapie',
          link: '/ergotherapie',
        },
        {
          title: 'Prestations',
          link: '/prestations',
        },
        {
          title: 'Tarifs',
          link: '/tarifs',
        },
      ],
    }
  },
}
</script>
