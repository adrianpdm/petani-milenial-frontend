<template>
  <div id="tentang-kami" class="bg-white">
    <div class="list-program wrapper">
      <h2 class="list-program__title">
        Tinggal di Desa, Rezeki Kota, Bisnis Mendunia!
      </h2>
      <div class="cols-start-1 col-span-10 md:hidden flex flex-row justify-between items-center">
        <span class="text-abu-600 font-semibold text-sm w-9/12">{{ programs[programActive].title }}</span>
        <div class="inline-flex gap-2">
          <img class="cursor-pointer" src="~/assets/images/arrow-left.svg" alt="" @click="prevProgram()">
          <img class="cursor-pointer" src="~/assets/images/arrow-right.svg" alt="" @click="nextProgram()">
        </div>
      </div>
      <div class="list-program__divider" />
      <transition name="slide">
        <img :src="require(`~/assets/${programs[programActive].image1}`)" alt="" class="object-cover h-56 w-full rounded-lg col-start-1 col-span-10 row-span-6 md:col-start-7 md:row-start-3 md:col-span-4 md:row-span-4">
      </transition>
      <div v-for="(program, index) in programs" :key="index" class="cursor-pointer md:col-span-6 col-start-1 hidden md:block" @click="$store.commit('program/SET_PROGRAM_ACTIVE',index)">
        <div class="flex items-center">
          <div :class="{'bg-hijau-700': programActive == index}" class="bg-abu-500 h-4 w-4 rounded-full mr-4" />
          <span :class="{'text-abu-900': programActive == index}" class="text-abu-600 font-semibold text-xl">{{ program.title }}</span>
        </div>
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
  },
  methods: {
    nextProgram () {
      let active
      if (this.programActive === 3) {
        active = 0
      } else {
        active = this.programActive + 1
      }
      this.$store.commit('program/SET_PROGRAM_ACTIVE', active)
    },
    prevProgram () {
      let active
      if (this.programActive === 0) {
        active = 3
      } else {
        active = this.programActive - 1
      }
      this.$store.commit('program/SET_PROGRAM_ACTIVE', active)
    }
  }
}
</script>
<style lang="postcss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: opacity 1s ease;
}
.slide-enter {
  opacity: 0;
}
.slide-leave-to {
  opacity: 0;
}

.list-program{
  @apply grid grid-cols-10 gap-x-2 gap-y-2 md:gap-y-6 py-4 md:py-20
}

.list-program__title{
  @apply text-abu-800 text-lg md:text-4xl font-medium col-span-10 md:col-span-5
}

.list-program__divider{
  @apply hidden md:block h-14 w-1 bg-hijau-200 col-span-10 col-start-1 rounded-full ml-2
}
</style>
