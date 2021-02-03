<template>
  <div id="kontak" class="bg-biruabu-50">
    <div class="wrapper footer">
      <div class="flex flex-col gap-y-3 col-span-4 md:col-span-3">
        <div>
          <img class="h-24 -ml-4 md:-ml-3" src="~/assets/images/logo/logotype.png" alt="">
        </div>
        <div class="flex justify-start items-center gap-2">
          <img src="~/assets/images/mail.svg" alt="">
          <a href="mailto:distan@jabarprov.go.id" class="text-sm text-abu-800">
            distan@jabarprov.go.id
          </a>
        </div>
        <div class="flex justify-start items-center gap-2">
          <img src="~/assets/images/telepon.svg" alt="">
          <div class="text-sm text-abu-800">
            (022) 2503884
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-2 col-span-2">
        <h3 class="font-bold text-abu-800">
          Petani Milenial
        </h3>
        <a v-scroll-to="'#tentang-kami'" href="" class="text-abu-700 text-sm">Tentang Kami</a>
        <a v-scroll-to="'#kontak'" href="" class="text-abu-700 text-sm">Kontak</a>
      </div>
      <div class="flex flex-col gap-y-2 col-span-2">
        <h3 class="font-bold text-abu-800">
          Ikuti Kami
        </h3>
        <a href="https://www.facebook.com/dinastphjabar/" target="_blank" class="text-abu-700 text-sm">Facebook</a>
        <a href="https://www.instagram.com/dinastphjabar" target="_blank" class="text-abu-700 text-sm">Instagram</a>
        <a href="https://twitter.com/dinastphjabar" target="_blank" class="text-abu-700 text-sm">Twitter</a>
      </div>
      <div class="flex flex-col gap-y-2 col-span-4 md:col-span-3">
        <h3 class="font-bold text-abu-800">
          Alamat
        </h3>
        <span class="text-abu-700 text-sm">Jl. Surapati No.71, Sadang Serang, Kecamatan Coblong, Kota Bandung, Jawa Barat 40133</span>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly lg:justify-between col-span-4 md:col-span-5 gap-4">
        <img src="~/assets/images/logo/pemprov-footer.png" class="h-12" alt="">
        <img src="~/assets/images/logo/dtph-footer.png" class="h-12" alt="">
        <img src="~/assets/images/logo/diskominfo-footer.png" class="h-12" alt="">
        <img src="~/assets/images/logo/jds-footer.png" class="h-12" alt="">
      </div>
      <div class="flex items-center justify-center md:col-start-7 col-span-4">
        <span class="text-abu-700 text-xs md:text-sm text-center">Copyright © Pemerintah Provinsi Jawa Barat 2021. All rights reserved</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="postcss" scoped>
.footer {
  @apply py-4 md:py-20 grid grid-cols-4 md:grid-cols-10 gap-4 md:gap-y-20
}
</style>
