<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-center w-full p-14 md:p-14 lg:p-24 2xl:px-72 bg-cover bg-center bg-fixed bg-[url('~/assets/services_banner.jpeg')]"
      >
        <div
          class="flex flex-col flex-start p-8 md:p-10 lg:w-3/6 lg:mx-10 rounded-lg shadow-xl bg-white"
        >
          <h1
            class="font-poppins text-4xl md:text-5xl text-amber-600 font-normal mr-4"
          >
            Mes prestations
          </h1>
          <h2 class="font-poppins text-xl text-amber-600 font-light my-4">
            Ce que je propose
          </h2>
          <p
            class="font-poppins text-normal font-extralight mt-6 leading-relaxed"
          >
            En tant qu'ergothérapeute je vous propose diverses prestations afin
            de cibler, évaluer, et suivre vos différents besoins.<br />
            D'un premier entretien, à une évaluation, jusqu'au suivi, venez en
            savoir plus sur mes services.
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-wrap flex-row justify-center gap-12 lg:gap-14 w-full p-6 pb-32 md:p-10 md:pb-32 lg:p-24 lg-pb-24 2xl:px-72 2xl:pb-24 bg-gradient-to-t from-neutral-50 to-white"
    >
      <div
        v-for="(prestation, index) in prestations"
        :key="index"
        class="flex flex-col sm:w-full md:w-5/12 h-auto p-10 shadow-xl rounded-xl overflow-auto hover:shadow-2xl origin-center hover:origin-bottom ease-in-out duration-500"
        :class="prestation.custom"
      >
        <h2 class="font-poppins text-xl text-amber-500 font-light my-4">
          {{ prestation.name }}
        </h2>
        <p
          class="font-poppins text-normal font-extralight my-4 leading-relaxed"
        >
          {{ prestation.description }}
        </p>
      </div>
    </div>

    <div
      class="flex flex-wrap flex-row justify-center gap-12 lg:gap-14 w-full p-6 pt-24 md:p-10 md:pt-24 lg:p-10 lg:pt-10 2xl:px-72 bg-amber-500 relative"
    >
      <div
        class="h-auto w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 p-6 shadow-2xl rounded-xl bg-darkPurple-600 absolute -top-16"
      >
        <h3
          class="font-poppins text-normal text-center font-normal text-white leading-relaxed"
        >
          Dans le cas d'une personne avec TSA (Trouble du Spectre Autistique) je
          propose également les prestations suivantes.
        </h3>
      </div>
      <div
        class="flex flex-wrap flex-row justify-center gap-12 lg:gap-14 w-full py-14"
      >
        <div
          v-for="(prestationTSA, index) in prestationsTSA"
          :key="index"
          class="flex flex-col sm:w-full lg:w-1/3 h-auto p-10 shadow-xl rounded-xl overflow-auto hover:shadow-2xl origin-center hover:origin-bottom ease-in-out duration-500"
          :class="prestationTSA.custom"
        >
          <h2 class="font-poppins text-xl text-amber-500 font-light my-4">
            {{ prestationTSA.name }}
          </h2>
          <p
            class="font-poppins text-normal font-extralight my-4 leading-relaxed"
          >
            {{ prestationTSA.description }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap flex-row justify-center gap-12 lg:gap-14 w-full p-6 pt-24 md:p-10 md:pt-24 lg:p-10 lg:pt-10 2xl:px-72"
    >
      <div
        class="flex flex-col items-center lg:w-1/2 lg:my-10 p-8 lg:p-10 shadow-xl rounded-xl bg-gradient-to-bl from-darkPurple-600 to-darkPurple-900 hover:shadow-2xl 5 ease-in-out duration-500"
      >
        <h2 class="font-poppins text-xl text-white font-light my-4">
          Bon à savoir !
        </h2>
        <p
          class="font-poppins text-white text-normal font-normal my-4 leading-relaxed"
        >
          Tout déplacement au delà de 30 km de mon adresse postale entraîne le
          paiement de frais kilométriques.
        </p>
        <p
          class="font-poppins text-white text-normal font-normal my-4 leading-relaxed"
        >
          Les séances d’ergothérapie ne sont pas remboursées par l’Assurance
          Maladie. Pour obtenir des aides afin de financer vos séances, vous
          pouvez effectuer des demandes auprès des organismes suivants :
        </p>

        <ul
          class="font-poppins text-normal font-extralight p-6 text-white leading-relaxed list-disc"
        >
          <li
            v-for="(aide, index) in aides"
            :key="index"
            class="items-start my-2"
          >
            {{ aide.name }}
          </li>
        </ul>
        <p
          class="font-poppins text-white text-center text-normal font-normal my-4 leading-relaxed"
        >
          Vous souhaitez avoir plus d'informations au sujet de mes prestations ?
          Cliquez sur le bouton ci-dessous afin de prendre contact !
        </p>
        <div class="flex flex-wrap justify-center p-4">
          <nuxt-link
            to="/contact"
            class="contact_button flex items-center h-12 p-4 m-4 bg-white rounded-lg text-darkPurple-900 hover:shadow-lg hover:shadow-darkPurple-400/40 hover:bg-darkPurple-400 hover:text-white ease-in-out duration-500"
            ><span class="font-poppins">Me contacter</span></nuxt-link
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
      prestations: [
        {
          name: 'Premier entretien',
          description:
            'Cette première rencontre va permettre de cerner vos besoins, d’échanger autour des problématiques que vous rencontrez au quotidien. A la fin de celle-ci, nous déterminerons ensemble les évaluations nécessaires, ainsi que l’accompagnement le plus adéquat.',
          custom:
            'bg-gradient-to-tl from-amber-50 via-neutral-50 to-white hover:-rotate-2',
        },
        {
          name: 'Mises en situation (domicile, travail, loisirs) ',
          description:
            'En fonction des difficultés ciblées lors de notre première entretien, je vous propose des mises en situations afin d’évaluer ce qui pose problèmes dans la réalisation de tâche.',
          custom:
            'bg-gradient-to-tr from-amber-50 via-neutral-50 to-white hover:rotate-2',
        },
        {
          name: 'Évaluation du besoin en aide technique (et essai) ',
          description:
            'Vous avez des besoins spécifiques en aides techniques (enfile soutien-gorge, couverts adaptés, aides au déplacement, etc) ? Je vous aide dans le choix d’outils adaptés à votre demande. Nous programmerons également des essais avant toute acquisition de matériel.',
          custom:
            'bg-gradient-to-bl from-amber-50 via-neutral-50 to-white hover:rotate-2',
        },
        {
          name: 'Diagnostic d’accessibilité du logement',
          description:
            'Parce que votre domicile doit correspondre à vos besoins pour garantir un maximum d’autonomie, je suis en mesure d’établir un diagnostic d’accessibilité de votre domicile, et de vous accompagner tout au long du processus d’aménagement.',
          custom:
            'bg-gradient-to-br from-amber-50 via-neutral-50 to-white hover:-rotate-2',
        },
        {
          name: 'Séance de suivi',
          description:
            'Pendant ces séances, nous avancerons selon les divers axes établis précédemment et, si besoin, réévaluerons ces axes pour qu’ils restent en accord avec vos besoins.',
          custom:
            'bg-gradient-to-t from-amber-50 via-neutral-50 to-white hover:rotate-2',
        },
      ],

      prestationsTSA: [
        {
          name: 'Évaluation sensorielle',
          description:
            'L’évaluation sensorielle permet de mettre en avant et de comprendre les particularités de perception et de traitement de l’information sensorielle (auditive, visuelle, olfactive,…). Cela donnera lieu à des propositions d’aménagement de l’environnement, de mise en place d’aides techniques, de moyens de compensations.',
          custom:
            'bg-gradient-to-br from-amber-100 via-neutral-50 to-white hover:-rotate-2',
        },
        {
          name: 'Évaluation des comportements adaptatifs',
          description:
            'Via l’échelle Vineland-II, il est possible d’évaluer les capacités d’autonomie et d’adaptation aux situations de vie quotidienne.',
          custom:
            'bg-gradient-to-t from-amber-100 via-neutral-50 to-white hover:rotate-2',
        },
      ],

      aides: [
        {
          name: 'MDPH : Allocation d’éducation de l’enfant handicapé (AEEH), Prestation de compensation du Handicap (PCH)',
        },
        {
          name: 'Plateforme TND 35 : plateforme d’intervention précoce permettant de faire un bilan et des séances d’ergothérapie pour les enfants de 0 à 7 ans présentant un trouble du neuro-développement',
        },
        {
          name: 'CPAM : demande de secours en prestations extra légales ou faire une demande de fond d’action sociale.',
        },
        {
          name: "Mutuelles, caisses de retraite; comité d'entreprise",
        },
      ],
    }
  },

  head: {
    title: 'Marie André - Mes prestations',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Premier entretien, évaluations, suivi, ... Découvrez les différentes prestations que je vous propose.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'ergotherapie, ergothérapeute, ergothérapeute Rennes, ergothérapeute Ille-et-Vilaine, évalutations, suivi, TSA, prestations, TND',
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Marie André - Prestations',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Premier entretien, évaluations, suivi, ... Découvrez les différentes prestations que je vous propose.',
      },
      { hid: 'og-image', property: 'og:image', content: ogImage },
      {
        hid: 'og-url',
        property: 'og:url',
        content: 'marie-andre-ergothérapeute.fr/prestations',
      },
    ],
  },
}
</script>
