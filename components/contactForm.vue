<template>
  <div
    class="p-16 shadow-xl rounded-xl bg-gradient-to-tl from-indigo-50 via-neutral-50 to-white w-4/5 lg:w-1/2 2xl:w-1/3"
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
      method="post"
      action="/success/"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label class="block mb-6">
        <span class="text-gray-700">Nom</span>
        <input
          type="text"
          name="name"
          class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm outline-0 focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          placeholder="Votre nom"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Prénom</span>
        <input
          type="text"
          name="surname"
          class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm outline-0 focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          placeholder="Votre prénom"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email</span>
        <input
          name="email"
          type="email"
          class="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm outline-0 focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          placeholder="Votre adresse email"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Message</span>
        <textarea
          name="message"
          class="block w-full h-28 mt-1 p-2 border-gray-300 rounded-md shadow-sm outline-0 focus:border-darkPurple-600 focus:ring focus:ring-darkPurple-600 focus:ring-opacity-50"
          rows="3"
          placeholder="Votre message"
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="flex items-center h-12 p-4 text-white bg-darkPurple-500 rounded-lg hover:shadow-lg hover:shadow-darkPurple-600/40 hover:bg-darkPurple-600 ease-in-out duration-500"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>
