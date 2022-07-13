<template>
  <div
    class="apariencia mt-2 bg-gray-100 hover:bg-blue-500 rounded-md px-4 p-2 hover:shadow-2xl group transition duration-300"
  >
    <h2 class="text-sm text-blue-400 group-hover:text-white">Apariencia</h2>
    <div class="">
      <div class="info-hero text-sm text-gray-700 group-hover:text-white">
        <p class="mt-2">
          <b>Genero:</b>
          <span v-if="bio.appearance['gender'] != 'null'">
            {{ bio.appearance["gender"] }}</span
          >
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Raza:</b>
          <span v-if="bio.appearance['race'] != 'null'">
            {{ bio.appearance["race"] }}</span
          >
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Altura:</b
          ><span v-if="bio.appearance['height'] != 'null'">
            {{ bio.appearance["height"] }}</span
          >
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Color de ojos:</b
          ><span v-if="bio.appearance['eye-color'] != 'null'">
            {{ bio.appearance["eye-color"] }}</span
          >
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Color de cabello:</b
          ><span v-if="bio.appearance['hair-color'] != 'null'">
            {{ bio.appearance["hair-color"] }}</span
          >
          <span v-else>No registra</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appearance",
  props: {
    bio: {
      type: Object,
      required: true,
    },
  },
};
</script>
