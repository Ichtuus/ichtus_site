<script setup lang="ts">
import Chart from "primevue/chart";
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

function setChartData() {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["JS", "TS", "CSS/SCSS", "VUE2/3", "NUXT", "JEST", "GITHUB ACTION"],
    datasets: [
      {
        data: [840, 700, 500, 1000, 500, 650, 300],
        backgroundColor: [
          documentStyle.getPropertyValue("--yellow-500"),
          documentStyle.getPropertyValue("--blue-500"),
          documentStyle.getPropertyValue("--pink-500"),
          documentStyle.getPropertyValue("--green-700"),
          documentStyle.getPropertyValue("--green-500"),
          documentStyle.getPropertyValue("--orange-500"),
          documentStyle.getPropertyValue("--luegray-900"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--yellow-400"),
          documentStyle.getPropertyValue("--blue-400"),
          documentStyle.getPropertyValue("--pink-400"),
          documentStyle.getPropertyValue("--green-600"),
          documentStyle.getPropertyValue("--green-400"),
          documentStyle.getPropertyValue("--orange-400"),
          documentStyle.getPropertyValue("--luegray-800"),
        ],
      },
    ],
  };
}

function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");

  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: textColor,
        },
      },
    },
  };
}
</script>

<template>
  <div
    id="skills"
    class="border-round flex flex-wrap align-items-center justify-content-center p-5 card"
  >
    <div class="flex w-full justify-content-center">
      <h2 class="text-5xl font-bold bg-primary p-2 border-round">
        {{ $t("ichtus_sample__skills-block--title-label") }}
      </h2>
    </div>
    <div class="flex w-full justify-content-center pb-6">
      <Chart
        type="pie"
        :data="chartData"
        :options="chartOptions"
        class="w-full md:w-30rem"
      />
    </div>
  </div>
</template>
