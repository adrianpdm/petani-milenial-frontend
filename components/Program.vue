<template>
  <div class="bg-hijau-50">
    <div class="wrapper program">
      <img v-lazy-load :data-src="require(`~/assets/${programs[programActive].image2}`)" class="object-cover h-56 w-full rounded-xl" alt="">
      <div v-if="programs[programActive].type === 'paragraph'" class="grid gap-4">
        <h2 class="font-semibold text-lg md:text-2xl text-black">
          {{ programs[programActive].title }}
        </h2>
        <p v-for="(content, index) in programs[programActive].content" :key="index" class="text-sm md:text-base text-abu-700">
          {{ content }}
        </p>
      </div>
      <div v-else class="grid gap-4">
        <h2 class="font-semibold text-lg md:text-2xl text-black">
          {{ programs[programActive].title }}
        </h2>
        <ul class="list-disc list-program">
          <li v-for="(content, index) in programs[programActive].content" :key="index" class="ml-5">
            {{ content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import programs from '~/constant/program'
export default {
  data () {
    return {
      programs
    }
  },
  computed: {
    programActive () {
      return this.$store.state.program.programActive
    }
  }
}
</script>
<style lang="postcss" scoped>
.list-program{
  min-height: 200px;
}
.program {
  @apply grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2 py-6;
}
</style>
