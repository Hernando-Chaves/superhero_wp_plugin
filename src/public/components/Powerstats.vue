<template>
  <div class="powerstats">
    <p
      class="text-white text-center text-sm mt-3 font-medium rounded bg-blue-500"
    >
      <b>Inteligencia</b>:
      <span v-if="potencia.intelligence != 'null'">{{ potencia.power }}</span>
      <span v-else>No registra</span>
    </p>
    <p
      class="text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"
    >
      <b>Fuerza</b>:
      <span v-if="potencia.strength != 'null'">{{ potencia.power }}</span>
      <span v-else>No registra</span>
    </p>
    <p
      class="text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"
    >
      <b>Velocidad</b>:
      <span v-if="potencia.speed != 'null'">{{ potencia.power }}</span>
      <span v-else>No registra</span>
    </p>
    <p
      class="text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"
    >
      <b>Duración</b>:<span v-if="potencia.durability != 'null'">{{
        potencia.power
      }}</span>
      <span v-else>No registra</span>
    </p>
    <p
      class="text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"
    >
      <b>Poder</b>:<span v-if="potencia.power != 'null'">{{
        potencia.power
      }}</span>
      <span v-else>No registra</span>
    </p>
    <p
      class="text-white text-center text-sm mt-1 font-medium rounded bg-blue-500"
    >
      <b>Combate</b>: {{ potencia.combat }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Powerstats",
  props: {
    potencia: {
      type: Object,
      required: true,
    },
  },
};
</script>
