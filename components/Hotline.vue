<template>
  <div class="bg-white">
    <div class="hotline wrapper">
      <h2 class="font-semibold text-lg md:text-4xl md:col-start-1 md:col-span-1 md:self-end">
        Kontak Hotline Petani Milenial
      </h2>
      <img class="md:col-start-2 md:col-span-1 md:row-span-2" src="~/assets/images/hotline.svg" alt="">
      <div class="md:col-start-1">
        <p class="text-abu-700 text-sm md:text-base md:w-9/12 mb-4 md:mb-6">
          Anda dapat menghubungi Hotline Petani Milenial untuk bertanya atau
          sekedar mencari informasi seputar Petani Milenial di Jawa Barat.
        </p>
        <button
          class="md:col-span-1 md:col-start-1 bg-hijau-700 rounded-md text-white px-2 py-2 md:py-3 font-medium w-7/12 md:w-1/2 lg:w-1/4"
          @click="contactNow()"
        >
          Hubungi Sekarang
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    contactNow () {
      window.open(process.env.HUBUNGI_SEKARANG, '_blank')
    }
  }
}
</script>
<style lang="postcss" scoped>
.hotline {
  @apply py-6 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-4;
}
</style>
