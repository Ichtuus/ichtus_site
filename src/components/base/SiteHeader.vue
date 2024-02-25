<script setup lang="ts">
import { computed, ref, watch } from "vue";

const { t, locale } = useI18n();
const selectedLocale = ref();
const phoneNbr = "tel:0650210393";

const items = computed(() => {
  return [
    {
      label: t("ichtus_sample__header-item--home-label"),
      icon: "pi pi-home",
    },
    {
      label: t("ichtus_sample__header-item--skills-label"),
      icon: "pi pi-home",
      url: "#skills",
    },
    {
      label: t("ichtus_sample__header-item--projects-label"),
      icon: "pi pi-star",
      url: "#projects",
    },
  ];
});

watch(
  () => selectedLocale.value,
  (value) => {
    locale.value = Object.keys(value).toString();
  }
);
</script>

<template>
  <Menubar :model="items" class="ichtus_sample-justify-center">
    <template #end>
      <div class="flex gap-2 md:gap-5">
        <div class="flex flex-initial justify-content-end">
          <TreeSelect
            v-model="selectedLocale"
            selectable
            :options="[
              { label: 'en', key: 'en' },
              { label: 'fr', key: 'fr' },
            ]"
            placeholder="Select language"
            class="w-5"
          />
        </div>
        <div class="flex flex-initial justify-content-end">
          <a
            :href="phoneNbr"
            class="no-underline text-500 flex vertical-align-middle text-900"
          >
            <i
              class="pi pi-phone mr-2"
              style="color: slateblue; font-size: 1.5rem"
            />
            {{ phoneNbr.replace("tel:", "") }}
          </a>
        </div>
      </div>
    </template>
  </Menubar>
</template>
