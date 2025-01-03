<template>
  <div
    class="p-6 md:p-16 shadow-xl rounded-xl bg-gradient-to-tl from-indigo-50 via-neutral-50 to-white lg:w-1/2 2xl:w-1/3 hover:shadow-2xl ease-in-out duration-500"
  >
    <div class="flex flex-col">
      <h1 class="font-poppins text-3xl text-darkPurple-900 font-normal">
        Prenons contact
      </h1>
      <p class="font-poppins text-normal font-extralight my-4">
        Complètez le formulaire ci-dessous en précisant votre demande
      </p>
    </div>

    <form
      class="my-6"
      name="contact"
      method="POST"
      action="/success/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label class="block mb-6">
        <span class="text-gray-700">Nom</span>
        <input
          type="text"
          name="nom"
          class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          placeholder="Votre nom"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Prénom</span>
        <input
          type="text"
          name="prenom"
          class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          placeholder="Votre prénom"
          required
        />
      </label>

      <label class="block mb-6">
        <span class="text-gray-700"
          >Comment souhaitez vous être recontacté ?</span
        >
        <select v-model="selected" class="block w-full mt-1 p-2">
          <option disabled value="">Choisissez</option>
          <option>Email</option>
          <option>Téléphone</option>
        </select>
      </label>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-in-out  duration-500"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-in-out duration-100"
        leave-to-class="opacity-0"
      >
        <label v-if="selected === 'Email'" class="block mb-6">
          <span class="text-gray-700">Email</span>
          <input
            v-model="email"
            name="email"
            type="email"
            class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
            placeholder="Votre adresse email"
            required
          />
        </label>

        <div v-if="selected === 'Téléphone'" class="block mb-6">
          <label class="block mb-6">
            <span class="text-gray-700">Téléphone</span>
            <input
              v-model="telephone"
              name="telephone"
              type="text"
              class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
              placeholder="Votre numero de téléphone"
              required
            />
          </label>
          <div class="flex flex-wrap justify-between items-center">
            <label for="horaire">Une heure à laquelle vous rappeler ?</label>

            <input
              v-model="horaire"
              type="time"
              class="p-2"
              name="horaire"
              min="09:00"
              max="18:00"
              required
            />
          </div>
        </div>
      </transition>

      <label class="block mb-6">
        <span class="text-gray-700">Message</span>
        <textarea
          name="message"
          class="block w-full h-28 mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          rows="3"
          placeholder="Votre message"
        ></textarea>
      </label>
      <div class="mb-6 flex justify-center md:justify-start">
        <button
          type="submit"
          class="flex items-center h-12 p-4 text-white bg-darkPurple-500 rounded-lg hover:shadow-lg hover:shadow-darkPurple-400/40 hover:bg-darkPurple-400 ease-in-out duration-500"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      telephone: '',
      email: '',
      horaire: '',
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()

      const myForm = event.target
      const formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          window.location.href = '/success/'
        })
        .catch((error) => alert(error))
    },
  },
}
</script>
