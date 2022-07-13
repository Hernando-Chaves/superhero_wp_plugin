<template>
  <div
    class="apariencia mt-2 bg-gray-100 hover:bg-blue-500 rounded-md px-4 p-2 hover:shadow-2xl group transition duration-300"
  >
    <h2 class="text-sm text-blue-400 group-hover:text-white">Trabajo</h2>
    <div class="">
      <div class="info-hero text-sm group-hover:text-white">
        <p class="mt-2">
          <b>Ocupación:</b> <span>{{ bio.work["occupation"] }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    bio: {
      type: Object,
      required: true,
    },
  },
};
</script>
