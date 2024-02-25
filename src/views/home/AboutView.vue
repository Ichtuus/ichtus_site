<script setup lang="ts">
import { computed } from "vue";

const dateToBecomeDev = computed(
  () => new Date().getFullYear() - new Date("2018-11-01").getFullYear()
);

const dateToBeFrontDev = computed(
  () => new Date().getFullYear() - new Date("2021-07-01").getFullYear()
);
</script>

<template>
  <div
    class="flex gap-5 sm:gap-8 flex-wrap md:flex-nowrap align-items-center border-round bg-primary mt-5 p-5 font-medium"
  >
    <div class="flex justify-content-center w-full">
      <div class="ichtus_sample-text-center">
        <Image imageClass="image-bulle" src="/images/nico.jpeg" alt="me" />
        <div class="mt-5 font-bold text-lg">Nicolas Diarra</div>
        <div class="text-300">
          {{ $t("ichtus_sample__about-block--jobdesc-label") }}
        </div>
        <Divider class="md:hidden" />
      </div>
    </div>

    <div class="text-900">
      <p>
        {{
          $t("ichtus_sample__about-block--desc-p1", { years: dateToBecomeDev })
        }}
      </p>
      <p>
        {{
          $t("ichtus_sample__about-block--desc-p2", { years: dateToBeFrontDev })
        }}
      </p>
      <p class="mb-5">
        {{ $t("ichtus_sample__about-block--desc-p3") }}
      </p>

      <p>
        {{ $t("ichtus_sample__about-block--desc-p4") }}
      </p>

      <p>
        {{ $t("ichtus_sample__about-block--desc-p5") }}
      </p>
      <p>
        {{ $t("ichtus_sample__about-block--desc-p6") }}
      </p>
    </div>
  </div>
</template>
<style lang="scss">
@media (min-device-width: 300px) {
  img {
    width: 250px;
    height: 250px;
  }
}

@media (min-device-width: 800px) {
  img {
    width: 500px;
    height: 500px;
  }
}

.image-bulle {
  border-radius: 50%;
  object-fit: cover;
}
</style>
