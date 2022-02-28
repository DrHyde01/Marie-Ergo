<template>
  <div>
    <footer
      class="flex flex-col h-auto w-full py-10 px-12 bottom-0 bg-darkPurple-900"
    >
      <div class="flex flex-col justify-start">
        <h3 class="font-poppins text-white font-normal">Marie André</h3>
        <p class="font-poppins text-white text-normal font-extralight">
          27 Boulevard Emile Combes
        </p>
        <p class="font-poppins text-white text-normal font-extralight">
          35200 Rennes
        </p>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p class="font-poppins text-white text-normal font-extralight">
            06 40 58 91 29
          </p>
        </div>

        <nuxt-link
          to="/contact"
          class="flex justify-center items-center h-12 w-36 p-4 mt-4 bg-darkPurple-500 rounded-lg hover:shadow-lg hover:shadow-darkPurple-400/40 hover:bg-darkPurple-400 ease-in-out duration-500"
          ><span class="font-poppins text-white">Me contacter</span></nuxt-link
        >
      </div>
      <div class="flex justify-center mt-8">
        <p class="font-poppins text-white font-extralight">
          © 2022 Tout droits réservés
        </p>
      </div>
    </footer>
  </div>
</template>
