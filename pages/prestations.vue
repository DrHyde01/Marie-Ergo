<template>
  <div class="w-screen mx-auto">
    <div class="md:pt-20">
      <div
        class="flex flex-wrap items-center justify-center w-full p-6 md:p-14 lg:p-24 bg-cover bg-center bg-fixed bg-[url('~/assets/services_banner.jpeg')]"
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
  </div>
</template>

<script>
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
    }
  },

  head: {
    title: 'Marie André - Mes prestations',
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
