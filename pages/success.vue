<template>
  <div class="flex flex-wrap flex-col items-center justify-center h-screen">
    <div
      class="p-16 shadow-xl rounded-xl bg-gradient-to-tl from-indigo-50 via-neutral-50 to-white w-4/5 lg:w-1/2 2xl:w-1/3"
    >
      <div class="flex flex-col">
        <h1 class="font-poppins text-3xl text-darkPurple-900 font-normal">
          Votre demande a été transmise !
        </h1>
        <nuxt-link
          to="/"
          class="font-poppins text-normal font-normal my-6 hover:text-darkPurple-400"
        >
          Retourner sur la page d'accueil
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
