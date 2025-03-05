<template>
  <div>
    <UeberUnsSection3 />
    <UeberUnsSection2 />
    <UeberUnsSection />
    <ReferenzenSection />
  </div>
</template>

<script>
import UeberUnsSection from "@/components/UeberUnsSection.vue";
import UeberUnsSection2 from "@/components/UeberUnsSection2.vue";
import UeberUnsSection3 from "@/components/UeberUnsSection3.vue";
import ReferenzenSection from "@/components/ReferenzenSection.vue";

export default {
  name: "UeberUnsPage",
  components: {
    UeberUnsSection,
    UeberUnsSection2,
    UeberUnsSection3,
    ReferenzenSection,
  },
};
</script>

<style scoped>
</style>