<template>
  <div>
    <nav
      class="flex items-center justify-between h-20 w-full py-4 px-6 fixed inset-x-0 top-0 bg-white"
    >
      <nuxt-link to="/">
        <img src="../assets/hands_bk.png" alt="logo mains" class="h-10 mx-2" />
      </nuxt-link>
      <div class="flex items-center justify-between">
        <nuxt-link
          to="/ergotherapie"
          class="font-poppins font-light mx-10 hover:text-darkPurple-500 ease-in-out duration-500"
          >Ergothérapie</nuxt-link
        >
        <nuxt-link
          to="/prestations"
          class="font-poppins font-light mx-10 hover:text-darkPurple-500 ease-in-out duration-500"
          >Prestations</nuxt-link
        >
        <nuxt-link
          to="/tarifs"
          class="font-poppins font-light mx-10 hover:text-darkPurple-500 ease-in-out duration-500"
          >Tarifs</nuxt-link
        >
      </div>
      <nuxt-link
        to="/contact"
        class="contact_button flex items-center h-12 p-4 bg-darkPurple-500 rounded-lg hover:shadow-xl hover:bg-darkPurple-400 ease-in-out duration-500"
        ><span class="font-poppins font-light text-white"
          >Contact</span
        ></nuxt-link
      >
    </nav>
  </div>
</template>
