<script setup lang="ts">
// import ToastService from 'primevue/toastservice';
// const app = useNuxtApp()
// app.use(ToastService);
const head = useHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon/favicon-32x32.png" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    { rel: "manifest", href: "/favicon/site.webmanifest" },
  ],
});
</script>

<template>
  <div class="app">
    <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <Head>
        <Title>Nicolas Diarra</Title>
        <Link
          v-for="link in head.link"
          :id="link.id"
          :key="link.id"
          :rel="link.rel"
          :type="link.type"
          :href="link.href"
          :sizes="link.sizes"
          :hreflang="link.hreflang"
        />
        <Meta
          v-for="meta in head.meta"
          :id="meta.id"
          :key="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </Head>
      <Body>
        <NuxtLayout>
          <NuxtPage />
          <Toast />
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>
