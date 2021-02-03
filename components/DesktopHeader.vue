<template>
  <div class="bg-abu-50">
    <div class="w-full wrapper header">
      <div>
        <img class="h-24 -ml-2" src="~/assets/images/logo/logotype.png" alt="">
      </div>
      <div class="menu">
        <ul>
          <li class="flex items-center justify-between gap-6">
            <div class="text-center font-medium text-lg cursor-pointer" @click="joinNow()">
              Bergabung Sekarang
            </div>
            <div v-scroll-to="'#tentang-kami'" class="text-center font-medium text-lg cursor-pointer">
              Tentang Kami
            </div>
            <div v-scroll-to="'#kontak'" class="text-center font-medium text-lg cursor-pointer">
              Kontak
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    joinNow () {
      window.open(process.env.BERGABUNG_SEKARANG, '_blank')
    }
  }
}
</script>
<style lang="postcss" scoped>
.menu {
  @apply justify-end
}
.header{
  /* height: 65px; */
  @apply flex flex-row items-center justify-between;
}
</style>
