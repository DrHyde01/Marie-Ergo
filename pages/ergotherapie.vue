<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-center lg:justify-between w-full p-6 md:p-14 lg:p-24 bg-cover bg-left bg-fixed bg-[url('~/assets/ergo_banner.jpeg')]"
      >
        <div
          class="flex flex-col flex-start p-8 md:p-10 lg:w-3/6 lg:mx-10 rounded-lg shadow-xl bg-white"
        >
          <h1
            class="font-poppins text-4xl md:text-5xl text-green-600 font-light mr-4"
          >
            L'ergothérapie
          </h1>
          <h2 class="font-poppins text-xl text-green-600 font-light my-4">
            En bref
          </h2>
          <p class="font-poppins text-normal font-extralight mt-10">
            L'ergothérapie est une discipline de la santé visant la promotion de
            la santé et du bien-être des individus et des communautés, au
            travers de leurs occupations. Elle soutient les personnes dans la
            réalisation de ce qu'elles souhaitent ou doivent faire, en
            intervenant sur les composantes de l'individu, de l'activité ou de
            l'environnement physique ou social1.
          </p>
        </div>

        <div class="flex flex-col flex-wrap mt-14 lg:mt-0 lg:w-2/6">
          <div
            v-for="(action, index) in actions"
            :key="index"
            class="flex flex-col flex-start p-8 mt-6 lg:m-8 rounded-lg shadow-xl bg-white"
          >
            <p class="font-poppins text-normal font-extralight">
              {{ action.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap flex-col items-center justify-center w-full p-6 md:p-14 lg:p-24"
    >
      <div
        class="flex flex-col items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-xl rounded-xl bg-gradient-to-br from-green-100 via-neutral-50 to-white hover:shadow-2xl origin-center hover:origin-bottom hover:-rotate-2 ease-in-out duration-500"
      >
        <p class="font-poppins text-normal font-extralight my-4">
          <strong class="text-green-600">L’ergothérapeute</strong> est un
          professionnel de santé dont l’expertise se base sur le
          <strong class="text-green-600"
            >lien entre l’activité humaine (travail, loisir, activités
            domestiques, etc) et la santé</strong
          >.
        </p>
        <p class="font-poppins text-normal font-extralight my-4">
          Il intervient
          <strong class="text-green-600"
            >auprès de toutes les populations</strong
          >, sans distinction d’âge, et quelles que soient les incapacités
          limitant sa participation aux activités qui lui tiennent à cœur.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          name: 'Favoriser l’autonomie des personnes',
        },
        {
          name: 'Permettre aux personnes d’avoir une qualité de vie satisfaisante',
        },
        {
          name: 'Faciliter leur maintien dans un milieu de vie répondant à leurs besoins et à leurs préférences',
        },
      ],
    }
  },

  head: {
    title: "Marie André - L'ergothérapie",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Marie André, votre ergothérapeute située à Rennes',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'ergotherapie, ergothérapeute, Rennes, bilans',
      },
    ],
  },
}
</script>
