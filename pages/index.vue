<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-between w-full p-24 bg-darkPurple-900"
      >
        <div class="flex flex-col flex-start w-1/2 mx-10">
          <div class="flex items-center">
            <h1 class="font-poppins text-white text-5xl font-extralight mr-2">
              MARIE
            </h1>
            <img src="~/assets/hands.png" alt="mains" class="h-10 mx-2" />
            <h1 class="font-poppins text-white text-5xl font-extralight mx-2">
              ANDRE
            </h1>
          </div>

          <h2 class="font-poppins text-white text-xl font-extralight my-4">
            Ergothérapeute
          </h2>

          <p class="font-poppins text-white text-normal font-extralight my-4">
            Ici tu présenteras ton activité de manière brève, en précisant ta
            localisation et en employant des mots clés importants pour ta
            visibilité, comme "ergothérapeute, ergothérapie, Rennes, ...". Tu
            peux aussi bien utiliser un slogan si l'inspiration te vient 🙂
          </p>
        </div>
        <div class="flex mx-10">
          <img
            src="../assets/portrait_home.jpeg"
            alt="photo marie"
            class="object-cover h-96"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap flex-col items-center justify-center w-full p-24"
    >
      <div class="flex flex-col items-center w-1/2 mb-10">
        <h2 class="font-poppins text-xl font-extralight my-4">À propos</h2>
        <p class="font-poppins text-normal font-extralight my-4">
          Rentre ici dans le vif du sujet concernant ton métier, ton parcours,
          et ce que tu peux proposer, toujours de manière brève. Amène les
          potentiels clients à en savoir plus. Les informations plus détaillées
          seront sur les pages dédiées.
        </p>
      </div>
      <div class="flex flex-wrap">
        <nuxt-link
          to="/ergotherapie"
          class="contact_button flex items-center h-12 p-4 mx-4 bg-darkPurple-500 rounded-lg hover:shadow-xl hover:bg-darkPurple-400 ease-in-out duration-500"
          ><span class="font-poppins font-light text-white"
            >L'ergothérapie</span
          ></nuxt-link
        >
        <nuxt-link
          to="/prestations"
          class="contact_button flex items-center h-12 p-4 mx-4 bg-darkPurple-500 rounded-lg hover:shadow-xl hover:bg-darkPurple-400 ease-in-out duration-500"
          ><span class="font-poppins font-light text-white"
            >Mes services</span
          ></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
