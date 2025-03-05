<template>
  <div>
    <HeroSection />
    <UeberUnsSection />
    <PaketeSection />
    <LeistungenSection />
    <ServiceSection />
    <ReferenzenSection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import UeberUnsSection from "@/components/UeberUnsSection.vue";
import PaketeSection from "@/components/PaketeSection.vue";
import LeistungenSection from "@/components/LeistungenSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import ReferenzenSection from "@/components/ReferenzenSection.vue";

export default {
  name: "Startseite",
  components: {
    HeroSection,
    UeberUnsSection,
    PaketeSection,
    LeistungenSection,
    ServiceSection,
    ReferenzenSection,
  },
};
</script>

<style scoped>
</style>
