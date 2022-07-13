<template>
  <div
    class="apariencia mt-2 bg-gray-100 hover:bg-blue-500 rounded-md px-4 p-2 hover:shadow-2xl group transition duration-300"
  >
    <h2 class="text-sm text-blue-400 group-hover:text-white">Biografía</h2>
    <div class="">
      <div class="info-hero text-sm group-hover:text-white">
        <p class="mt-2">
          <b>Alter-egos:</b>
          <span v-if="bio.biography['alter-egos'] != 'null'">{{
            bio.biography["alter-egos"]
          }}</span>
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Alias: </b>
          <span
            v-for="alias in bio.biography['aliases']"
            :key="alias + Math.random()"
          >
            {{ alias }}
          </span>
        </p>
        <p class="mt-2">
          <b>Lugar de nacimiento:</b>
          <span v-if="bio.biography['place-of-birth'] != 'null'">{{
            bio.biography["place-of-birth"]
          }}</span>
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Primera aparición:</b>

          <span v-if="bio.biography['first-appearance'] != 'null'">{{
            bio.biography["first-appearance"]
          }}</span>
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Publicado por:</b>
          <span v-if="bio.biography['publisher'] != 'null'">{{
            bio.biography["publisher"]
          }}</span>
          <span v-else>No registra</span>
        </p>
        <p class="mt-2">
          <b>Tendencia:</b>
          <span v-if="bio.biography['alignment'] != 'null'">{{
            bio.biography["alignment"]
          }}</span>
          <span v-else>No registra</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biography",
  props: {
    bio: {
      type: Object,
      required: true,
    },
  },
};
</script>
