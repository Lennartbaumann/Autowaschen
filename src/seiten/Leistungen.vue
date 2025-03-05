<template>
  <div>
    <LeistungenSection />
    <PaketeSection />
    <ServiceSection />
    <ReferenzenSection />
  </div>
</template>

<script>
import LeistungenSection from "@/components/LeistungenSection.vue";
import PaketeSection from "@/components/PaketeSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import ReferenzenSection from "@/components/ReferenzenSection.vue";

export default {
  name: "LeistungenPage",
  components: {
    LeistungenSection,
    PaketeSection,
    ServiceSection,
    ReferenzenSection,
  },
};
</script>

<style scoped>
</style>
