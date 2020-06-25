<template>
  <div>
    <bounce-loader :loading="loading" :color="'#68d391'"></bounce-loader>
    <px-assets-table v-if="!loading === true" :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import { BounceLoader } from "@saeris/vue-spinners";
import api from "../api";

export default {
  name: "Home",
  components: { PxAssetsTable, BounceLoader },
  data() {
    return {
      assets: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    const assets = await api.getAssets();
    this.assets = assets;
    this.loading = false;
  }
};
</script>
