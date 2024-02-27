<script setup lang="ts">
import Dialog from "primevue/dialog";
import { computed, ref } from "vue";
import { useAuthStore, type SignInPayload } from "../../stores/auth.store";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const authStore = useAuthStore();

const isVisible = ref<boolean>(false);
const currentDateYear = computed(() => new Date().getFullYear());
const linkedinUrl = "https://www.linkedin.com/in/nicolas-d-5b6708162/";
const phoneNbr = "tel:0650210393";

const email = ref<string>();
const password = ref<string>();

async function signInAction() {
  const payload: SignInPayload = {
    email: email.value as string,
    password: password.value as string,
  };
  try {
    await authStore.signin(payload);
    toast.add({
      severity: "success",
      summary: "Info",
      detail: "Correctly logged",
      life: 3000,
    });
  } catch (e) {
    toast.add({
      severity: "error",
      summary: "Info",
      detail: "Error on login",
      life: 3000,
    });
  }
}
</script>

<template>
  <footer class="surface-900 text-white font-bold p-8 flex">
    <div class="flex-1">
      © {{ currentDateYear }} with
      <span
        @click="isVisible = !isVisible"
        class="text-red-600 ichtus_site--heart"
        >♥</span
      >
      by Nicolas Diarra
    </div>
    <div class="flex gap-5 flex-1 justify-content-end">
      <NuxtLink :to="linkedinUrl" target="_blank">
        <i
          class="pi pi-linkedin"
          style="color: var(--surface-0); font-size: 1.5rem"
        />
      </NuxtLink>
      <a :href="phoneNbr"
        ><i
          class="pi pi-phone"
          style="color: var(--surface-0); font-size: 1.5rem"
      /></a>
    </div>
  </footer>
  <Dialog
    v-model:visible="isVisible"
    modal
    header="Login"
    :style="{ width: '25rem' }"
  >
    <span class="p-text-secondary block mb-5"
      >Administration of the website.</span
    >
    <div class="flex align-items-center gap-3 mb-3">
      <label for="email" class="font-semibold w-6rem">Email</label>
      <InputText
        v-model="email"
        id="email"
        class="flex-auto p-0 pt-2 pb-2"
        autocomplete="off"
      />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="password" class="font-semibold w-6rem">Password</label>
      <Password
        v-model="password"
        :feedback="false"
        class="flex-auto p-0 pt-2 pb-2"
      />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="isVisible = false"
      ></Button>
      <Button type="button" label="Save" @click="signInAction"></Button>
    </div>
  </Dialog>
</template>

<style lang="scss" scoped>
.ichtus_site--heart {
  cursor: pointer;
}
</style>
