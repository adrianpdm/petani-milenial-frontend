<template>
  <div class="bg-hijau-50 overflow-hidden relative">
    <div class="wrapper banner w-full">
      <div class="w-full md:w-1/2 flex flex-col items-start justify-center">
        <h1 class="text-2xl md:text-5xl font-bold mb-6 mt-6 md:mt-0">
          Petani Milenial Juara
        </h1>
        <p class="font-medium text-sm md:text-base md:w-11/12 mb-8 md:mb-24">
          Jadilah penentu kemajuan pertanian masa depan melalui inovasi dan
          pemanfaatan teknologi digital. Kamu bisa jadi wajah baru pertanian
          modern Jawa Barat yang mandiri, produktif, dan berkelanjutan.
        </p>
        <button v-show="false" class="bg-hijau-700 rounded-md text-white px-6 py-2 md:py-3 font-medium mb-12 md:mb-24" @click="joinNow()">
          Bergabung sekarang
        </button>
        <div class="hidden md:block w-9/12 self-end">
          <img src="~/assets/images/frame.svg" alt="" data-not-lazy>
        </div>
      </div>
      <div class="w-full md:w-1/2 mt-12 md:mt-0 flex items-center">
        <img src="~/assets/images/aset-banner.png" alt="" data-not-lazy>
      </div>
    </div>
    <div class="hidden md:block circle">
      <img src="~/assets/images/cirlce.svg" alt="" data-not-lazy>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    joinNow () {
      window.open(process.env.NUXT_ENV_BERGABUNG_SEKARANG, '_blank')
    }
  }
}
</script>
<style lang="postcss" scoped>
.banner {
  /* height: 659px; */
  @apply flex flex-col-reverse justify-end md:flex-row md:my-24;
}
.circle{
  @apply transform rotate-90 absolute;
  right: -50px;
  bottom: -50px;
}
</style>
