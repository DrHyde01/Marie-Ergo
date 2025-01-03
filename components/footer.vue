<template>
  <div>
    <footer
      class="flex flex-col h-auto w-full py-10 px-12 bottom-0 bg-darkPurple-900"
    >
      <div
        class="flex flex-col md:flex-row justify-center items-center md:justify-between align-center flex-wrap"
      >
        <div class="flex flex-col text-center md:text-left mb-0">
          <h3 class="font-poppins text-white font-normal">Marie André</h3>
          <p class="font-poppins text-white text-sm font-extralight">
            Cabinet Oberthur d'Esprit
          </p>
          <p class="font-poppins text-white text-sm font-extralight">
            1 rue Raoul Ponchon
          </p>
          <p class="font-poppins text-white text-sm font-extralight">
            35000 Rennes
          </p>

          <p class="font-poppins text-white text-sm font-extralight">
            06 40 58 91 29
          </p>
        </div>
        <img
          src="../assets/hands.png"
          alt="logo mains"
          class="h-10 my-8 md:hidden"
        />
        <div class="flex flex-col">
          <ul class="flex flex-col text-center md:text-left">
            <li v-for="(item, index) in items" :key="index">
              <nuxt-link
                :to="item.link"
                class="font-poppins text-white text-sm font-extralight hover:text-purple-500 ease-in-out duration-500"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8">
        <p class="font-poppins text-center text-white font-extralight text-sm">
          © 2024 Marie André. Tout droits réservés
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: "L'ergothérapie",
          link: '/ergotherapie',
        },
        {
          title: 'Prestations',
          link: '/prestations',
        },
        {
          title: 'Me contacter',
          link: '/contact',
        },
        {
          title: 'Mentions légales',
          link: '/mentions',
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
