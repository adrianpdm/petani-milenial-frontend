<template>
  <div class="bg-hijau-50">
    <div v-if="programs[programActive]" class="wrapper program">
      <img v-lazy-load :data-src="programs[programActive].image" class="object-cover h-56 w-full rounded-xl" alt="">
      <div>
        <h3 v-text="programs[programActive].title" />
        <nuxt-content :document="programs[programActive]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      programs: []
    }
  },
  async fetch () {
    const programs = await this.$content('faq-program')
      .fetch()
    this.programs = [...programs]
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
