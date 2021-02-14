<template>
  <div class="bg-white relative">
    <div class="wrapper flex justify-between items-center py-4">
      <div>
        <img
          class="h-16 -ml-2"
          src="~/assets/images/logo/logotype.png"
          alt=""
        >
      </div>
      <div @click="activeMenu = !activeMenu">
        <img
          v-if="!activeMenu"
          class="w-8 h-8"
          src="~/assets/images/menu.svg"
          alt=""
        >
        <img v-else class="w-8 h-8" src="~/assets/images/close.svg" alt="">
      </div>
    </div>
    <transition name="menu">
      <div v-if="activeMenu" class="bg-white shadow absolute w-full t-0 z-10">
        <ul>
          <li class="wrapper grid grid-cols-1 gap-4 py-3">
            <div v-show="false" class="font-medium text-md cursor-pointer" @click="joinNow()">
              Bergabung Sekarang
            </div>
            <div
              v-scroll-to="{
                el: '#tentang-kami',
                onDone: onDone,
              }"
              class="font-medium text-md cursor-pointer"
            >
              Tentang Kami
            </div>
            <div
              v-scroll-to="{
                el: '#kontak',
                onDone: onDone,
              }"
              class="font-medium text-md cursor-pointer"
            >
              Kontak
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeMenu: false
    }
  },
  methods: {
    joinNow () {
      window.open(process.env.NUXT_ENV_BERGABUNG_SEKARANG, '_blank')
    },
    onDone () {
      this.activeMenu = false
    }
  }
}
</script>
<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.1s, transform 0.1s ease;
}
.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(0);
}
</style>
