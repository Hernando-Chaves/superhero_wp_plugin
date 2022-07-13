<template>
  <div
    class="bg-gray-100 border-2 border-gray-300 rounded-md grid-cols-2 space-x-4 min-w-full p-6 flex"
  >
    <div class="">
      <img
        class="rounded-md h-96 border-4 border-blue-500 shadow-xl shadow-slate-700"
        :src="heroe.image.url"
        alt=""
      />
      <Powerstats :potencia="heroe.powerstats" />
    </div>
    <div class="bg-gray-200 p-2 rounded-md w-96">
      <div class="px-3 py-1 rounded-md bg-blue-500">
        <h1 class="text-left text-white text-2xl font-semibold">
          {{ heroe.biography["full-name"] }}
        </h1>
      </div>
      <Bio :bio="heroe" />
      <Appearance :bio="heroe" />
      <Work :bio="heroe" />
    </div>
  </div>
</template>

<script>
import Powerstats from "./Powerstats.vue";
import Bio from "./Biography.vue";
import Appearance from "./Appearance.vue";
import Work from "./Work.vue";
export default {
  data() {
    return {
      hero_id: "",
      token: "",
      heroe: "",
    };
  },
  components: {
    Powerstats,
    Bio,
    Appearance,
    Work,
  },
  mounted() {
    this.hero_id = SHORTCODE_ATTS.id > 0 ? SHORTCODE_ATTS.id : 1;
    this.token = SHORTCODE_ATTS.token;
    this.getHero();
  },
  methods: {
    async getHero() {
      try {
        const hero = await fetch(
          `https://www.superheroapi.com/api.php/${this.token}/${this.hero_id}`
        ).then((resp) => resp.json());
        this.heroe = hero;
        console.log("El token es " + this.token);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
