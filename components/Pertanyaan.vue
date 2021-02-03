<template>
  <div class="bg-white">
    <div class="wrapper pertanyaan">
      <img class="md:col-span-1 md:col-start-1 md:row-span-2" src="~/assets/images/question.svg" alt="">
      <h2 class="font-bold text-xl md:text-4xl md:col-start-2 md:col-span-1 md:self-end">
        FAQ
        <div class="h-1 w-16 md:w-32 bg-kuning-900 rounded-full mt-4" />
      </h2>
      <div class="md:col-span-1 md:col-start-2">
        <p class="text-sm md:text-base mb-4">
          Silakan klik tombol di bawah ini untuk mengetahui seputar pertanyaan yang sering ditanyakan.
        </p>
        <button class="unduh__btn" @click="askNow()">
          Tanyakan Sekarang
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    askNow () {
      window.open(process.env.TANYAKAN_SEKARANG, '_blank')
    }
  }
}
</script>
<style lang="postcss" scoped>
.pertanyaan {
  @apply bg-hijau-50 rounded-2xl shadow-lg p-4 grid grid-cols-1 gap-4 md:grid-cols-2 my-6 md:my-16
}
.unduh__btn {
  @apply px-2 py-2 border border-solid border-hijau-700 rounded-md text-hijau-700 font-semibold focus:outline-none
}
</style>
