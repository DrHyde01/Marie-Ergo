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
              class="font-poppins text-5xl text-darkPurple-900 font-normal mr-4"
            >
              MARIE
            </h1>
            <div
              class="hidden md:flex items-center justify-center shadow-lg h-20 w-20 rounded-full bg-darkPurple-900"
            >
              <img src="~/assets/hands.png" alt="mains" class="h-10" />
            </div>
            <h1
              class="font-poppins text-5xl text-darkPurple-900 font-normal md:ml-4"
            >
              ANDRE
            </h1>
          </div>

          <h2 class="font-poppins text-xl text-darkPurple-900 font-normal my-4">
            Ergothérapeute
          </h2>

          <h3 class="font-poppins text-lg font-light my-4">
            Présente et disponible pour l'évaluation de vos besoins et
            l'adaptation de votre environnement.
          </h3>
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
      class="flex flex-wrap flex-col items-center justify-center w-full px-6 py-12 md:p-14 lg:p-24"
    >
      <div
        class="flex flex-col lg:self-start items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-2xl rounded-xl bg-darkPurple-900"
      >
        <p
          class="font-poppins text-white text-normal font-extralight my-4 leading-relaxed"
        >
          <strong>Ergothérapeute située sur Rennes</strong>, je me déplace à
          votre domicile (jusqu’à 50km) pour cibler avec vous, ou votre enfant,
          les difficultés rencontrées dans la vie quotidienne (soins personnels,
          travail ou scolarité, loisirs, etc).
        </p>
        <p
          class="font-poppins text-white text-normal font-extralight my-4 leading-relaxed"
        >
          Une fois celles-ci ciblées, nous travaillerons ensemble pour
          construire des
          <strong>solutions qui vous conviennent et vous correspondent</strong>.
        </p>
      </div>

      <div class="flex justify-between items-center">
        <img
          src="../assets/illustration_home.jpg"
          alt="illustration d'un service"
          class="hidden lg:inline h-auto w-1/2 m-10"
        />
        <div
          class="flex flex-col items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-2xl rounded-xl bg-darkPurple-900"
        >
          <p
            class="font-poppins text-white text-normal font-extralight my-4 leading-relaxed"
          >
            Mon parcours m’a permis de travailler auprès d’un panel varié
            d’usagers.
          </p>
          <p
            class="font-poppins text-white text-normal font-extralight my-4 leading-relaxed"
          >
            Je travaille aussi bien à
            <strong>l’évaluation de vos besoins</strong>, à
            <strong>l’adaptation de votre domicile</strong>, qu’à
            <strong>l’évaluation de vos besoins</strong> en aide technique
            (ainsi qu’à des essais)
          </p>
          <p
            class="font-poppins text-white text-normal font-extralight my-4 leading-relaxed"
          >
            De par mon parcours professionnel, je suis également
            <strong
              >spécialisée dans l’accompagnement des personnes présentant un
              Trouble du Spectre de l’Autisme</strong
            >, et plus particulièrement sur le versant des
            <strong>particularités sensorielles</strong>.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-2xl rounded-xl"
      >
        <p class="font-poppins text-normal font-extralight my-4">
          Venez en découvrir davantage sur l'ergothérapie et mes différentes
          prestations !
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

  head: {
    title: 'Marie André - Ergothérapeute',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Marie André, votre ergothérapeute située à Rennes',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'ergotherapie, ergothérapeute, ergothérapeute Rennes, ergothérapeute Ille-et-Vilaine',
      },
    ],
  },
}
</script>
