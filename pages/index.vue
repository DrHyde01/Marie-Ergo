<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-center lg:justify-between w-full p-6 md:p-14 lg:p-24 bg-gradient-to-b from-black to-darkPurple-900"
      >
        <div
          class="flex flex-col flex-start p-8 md:p-10 lg:w-1/2 lg:mx-10 rounded-lg shadow-xl shadow-white/20 bg-white"
        >
          <div class="flex flex-wrap items-center bg-d">
            <h1
              class="font-poppins text-5xl text-darkPurple-900 font-light mr-4"
            >
              MARIE
            </h1>
            <div
              class="hidden md:flex items-center justify-center shadow-lg h-20 w-20 rounded-full bg-darkPurple-900"
            >
              <img src="~/assets/hands.png" alt="mains" class="h-10" />
            </div>
            <h1
              class="font-poppins text-5xl text-darkPurple-900 font-light md:ml-4"
            >
              ANDRE
            </h1>
          </div>

          <h2 class="font-poppins text-xl text-darkPurple-900 font-light my-4">
            Ergothérapeute
          </h2>

          <p class="font-poppins text-normal font-extralight mt-10">
            Ici tu présenteras ton activité de manière brève, en précisant ta
            localisation et en employant des mots clés importants pour ta
            visibilité, comme "ergothérapeute, ergothérapie, Rennes, ...". Tu
            peux aussi bien utiliser un slogan si l'inspiration te vient 🙂
          </p>
        </div>
        <div class="flex mt-8 lg:mt-0 mx-10">
          <img
            src="../assets/portrait_home.jpeg"
            alt="photo marie"
            class="object-cover object-top h-80 w-full lg:h-96 lg:w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap flex-col items-center justify-center w-full p-6 md:p-14 lg:p-24"
    >
      <div
        class="flex flex-col items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-xl rounded-xl"
      >
        <h2 class="font-poppins text-xl text-darkPurple-900 font-light my-4">
          À propos
        </h2>
        <p class="font-poppins text-normal font-extralight my-4">
          Rentre ici dans le vif du sujet concernant ton métier, ton parcours,
          et ce que tu peux proposer, toujours de manière brève. Amène les
          potentiels clients à en savoir plus. Les informations plus détaillées
          seront sur les pages dédiées.
        </p>
      </div>

      <div
        class="flex flex-col items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-xl rounded-xl"
      >
        <p class="font-poppins text-normal font-extralight my-4">
          Vous voulez en savoir plus sur l'ergotherapie et les services que je
          propose ?
        </p>
        <p></p>
        <div class="flex flex-wrap justify-center">
          <nuxt-link
            to="/ergotherapie"
            class="contact_button flex items-center h-12 p-4 m-4 bg-green-500 rounded-lg hover:shadow-lg hover:shadow-green-400/40 hover:bg-green-400 ease-in-out duration-500"
            ><span class="font-poppins text-white"
              >L'ergothérapie</span
            ></nuxt-link
          >
          <nuxt-link
            to="/prestations"
            class="contact_button flex items-center h-12 p-4 m-4 bg-amber-500 rounded-lg hover:shadow-lg hover:bg-amber-400 hover:shadow-amber-400/40 ease-in-out duration-500"
            ><span class="font-poppins text-white"
              >Mes prestations</span
            ></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
