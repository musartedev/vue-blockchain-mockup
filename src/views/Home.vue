<template>
  <div><px-assets-table :assets="assets" /></div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "../api";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      assets: []
    };
  },
  async created() {
    const assets = await api.getAssets();
    this.assets = assets;
  }
};
</script>
