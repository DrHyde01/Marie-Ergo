<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-center lg:justify-between w-full p-6 md:p-14 lg:p-24 2xl:px-72 bg-cover bg-left bg-fixed bg-[url('~/assets/ergo_banner.jpeg')]"
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

        <div
          class="flex flex-col flex-wrap mt-10 lg:mt-0 w-3/4 md:3/6 lg:w-2/6"
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
                class="text-white text-2xl"
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
        class="flex flex-col items-center lg:w-1/2 mb-10 p-8 lg:p-10 shadow-xl rounded-xl bg-gradient-to-br from-green-100 via-neutral-50 to-white hover:shadow-2xl origin-center hover:origin-bottom hover:-rotate-2 ease-in-out duration-500"
      >
        <p class="font-poppins text-normal font-extralight my-4">
          <strong class="text-green-600"
            >L’ergothérapeute (Occupational Therapist)</strong
          >
          est un professionnel de santé, exerçant dans les champs sanitaire,
          médico-social et social.
        </p>
        <p class="font-poppins text-normal font-extralight my-4">
          Collaborant avec de nombreux professionnels (médecins, auxiliaires
          médicaux, travailleurs sociaux, acteurs de l’enseignement et de la
          formation, techniciens de l’habitat…), il est un
          <strong class="text-green-600"
            >intervenant incontournable dans le processus d’adaptation, de
            réadaptation et d’intégration sociale</strong
          >
          des personnes.
        </p>
      </figure>

      <figure
        class="flex flex-col items-center lg:w-1/2 mb-10 shadow-xl rounded-xl bg-gradient-to-tl from-green-100 via-neutral-50 to-white hover:shadow-2xl origin-center hover:origin-bottom hover:rotate-2 ease-in-out duration-500"
      >
        <img
          src="../assets/ergo_occupation.jpg"
          alt="illustration de personnes qui s'occupent"
          class="object-cover rounded-t-xl"
        />
        <p class="font-poppins text-normal font-extralight my-4 p-8 lg:p-10">
          Spécialiste du rapport entre l’activité (ou occupation en lien avec la
          terminologie internationale désignant l’ergothérapie) et la santé,
          <strong class="text-green-600"
            >il mène des actions d’une part pour prévenir et modifier les
            activités délétères pour la santé, et d’autre part pour assurer
            l’accès des individus aux occupations qu’ils veulent ou doivent
            faire</strong
          >
          et rendre possible leur accomplissement de façon sécurisée, autonome,
          indépendante et efficace.
        </p>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          name: 'Être là pour améliorer votre adaptation, réadaptation, ou intégration.',
          icon: 'hand-holding-hand',
        },
        {
          name: 'Vous donner accès à une qualité de vie satisfaisante.',
          icon: 'person-walking',
        },
        {
          name: 'Vous faciliter le maintien dans un milieu de vie répondant à vos besoins.',
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
