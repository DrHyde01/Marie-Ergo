<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-center lg:justify-between w-full p-14 lg:p-24 2xl:px-72 bg-cover bg-center bg-fixed bg-[url('~/assets/ergo_banner.jpeg')]"
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
          <p
            class="font-poppins text-normal font-extralight mt-6 leading-relaxed"
          >
            L'ergothérapie est une discipline de la santé visant la promotion de
            la santé et du bien-être des individus et des communautés, au
            travers de leurs occupations. Elle soutient les personnes dans la
            réalisation de ce qu'elles souhaitent ou doivent faire, en
            intervenant sur les composantes de l'individu, de l'activité ou de
            l'environnement physique ou social.
          </p>
        </div>

        <div
          class="flex flex-col flex-wrap mt-10 lg:mt-0 w-4/5 md:3/6 lg:w-2/6"
        >
          <div
            v-for="(action, index) in actions"
            :key="index"
            class="flex flex-col flex-start items-center px-8 py-10 lg:p-8 mt-16 lg:mt-6 lg:m-8 rounded-lg shadow-xl bg-white relative hover:shadow-2xl hover:scale-105 ease-in-out duration-500"
          >
            <div
              class="flex justify-center items-center bg-green-600 h-16 w-16 rounded-full shadow-xl absolute -top-8 lg:-left-8"
            >
              <fa
                :icon="['fa-solid', action.icon]"
                class="text-white h-6 w-6"
              />
            </div>
            <p class="font-poppins text-normal font-extralight">
              {{ action.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap flex-col items-center justify-center w-full p-6 md:p-14 lg:p-24 bg-gradient-to-t from-green-50 via-neutral-50 to-white"
    >
      <figure
        class="flex flex-col items-center lg:w-1/2 2xl:w-1/3 mb-10 shadow-xl rounded-xl bg-gradient-to-br from-green-100 via-neutral-50 to-white hover:shadow-2xl origin-center hover:origin-bottom hover:-rotate-2 ease-in-out duration-500"
      >
        <img
          src="../assets/ergo_occupation2.jpg"
          alt="illustration de personnes qui s'entreaident"
          class="object-cover rounded-t-xl"
        />
        <figcaption class="p-8 lg:p-10">
          <p
            class="font-poppins text-normal font-extralight my-4 leading-relaxed"
          >
            <strong class="text-green-600"
              >L’ergothérapeute (Occupational Therapist)</strong
            >
            est un professionnel de santé, exerçant dans les champs sanitaire,
            médico-social et social.
          </p>
          <p
            class="font-poppins text-normal font-extralight my-4 leading-relaxed"
          >
            Collaborant avec de nombreux professionnels (médecins, auxiliaires
            médicaux, travailleurs sociaux, acteurs de l’enseignement et de la
            formation, techniciens de l’habitat…), il est un
            <strong class="text-green-600"
              >intervenant incontournable dans le processus d’adaptation, de
              réadaptation et d’intégration sociale</strong
            >
            des personnes.
          </p>
        </figcaption>
      </figure>

      <figure
        class="flex flex-col items-center lg:w-1/2 2xl:w-1/3 mb-10 shadow-xl rounded-xl bg-gradient-to-tl from-green-100 via-neutral-50 to-white hover:shadow-2xl origin-center hover:origin-bottom hover:rotate-2 ease-in-out duration-500"
      >
        <img
          src="../assets/ergo_occupation.jpg"
          alt="illustration de personnes qui s'occupent"
          class="object-cover rounded-t-xl"
        />
        <figcaption class="p-8 lg:p-10">
          <p
            class="font-poppins text-normal font-extralight my-4 leading-relaxed"
          >
            Spécialiste du rapport entre l’activité (ou occupation en lien avec
            la terminologie internationale désignant l’ergothérapie) et la
            santé,
            <strong class="text-green-600"
              >il mène des actions d’une part pour prévenir et modifier les
              activités délétères pour la santé, et d’autre part pour assurer
              l’accès des individus aux occupations qu’ils veulent ou doivent
              faire</strong
            >
            et rendre possible leur accomplissement de façon sécurisée,
            autonome, indépendante et efficace.
          </p>
        </figcaption>
      </figure>

      <div
        class="flex flex-col items-center lg:w-1/2 2xl:w-1/3 lg:my-10 p-8 lg:p-10 shadow-xl rounded-xl bg-gradient-to-bl from-green-300 to-green-600 hover:shadow-2xl 5 ease-in-out duration-500"
      >
        <h3
          class="font-poppins text-white text-center text-normal font-normal my-4 leading-relaxed"
        >
          Vous voulez en savoir plus sur les différentes prestations que je
          propose en tant qu'ergothérapeute ?
        </h3>

        <div class="flex flex-wrap justify-center p-4">
          <nuxt-link
            to="/prestations"
            class="contact_button flex items-center h-12 p-4 m-4 bg-white rounded-lg text-amber-500 hover:shadow-lg hover:shadow-amber-400/40 hover:bg-amber-400 hover:text-white ease-in-out duration-500"
            ><span class="font-poppins">Mes prestations</span></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ogImage from '../assets/portrait_mini.jpg'
export default {
  data() {
    return {
      actions: [
        {
          name: "Accompagner le processus d'adaptation, réadaptation, réhabilitation ou intégration.",
          icon: 'hand-holding-hand',
        },
        {
          name: 'Vous donner accès à une qualité de vie satisfaisante.',
          icon: 'person-walking',
        },
        {
          name: 'Permettre le maintien dans un milieu de vie répondant à vos besoins.',
          icon: 'person-arrow-up-from-line',
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
        content:
          "Ce que l'ergotherapie et l'ergothérapeute peut vous apporter dans la vie de tout les jours",
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'ergotherapie, ergothérapeute, Rennes, accompagnement, adaptation, réadaptation',
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: "Marie André - L'ergothérapie",
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          "Ce que l'ergotherapie et l'ergothérapeute peut vous apporter dans la vie de tout les jours",
      },
      { hid: 'og-image', property: 'og:image', content: ogImage },
      {
        hid: 'og-url',
        property: 'og:url',
        content: 'marie-andre-ergothérapeute.fr/ergothérapie',
      },
    ],
  },
}
</script>
