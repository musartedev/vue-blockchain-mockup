<template>
  <header class="shadow-w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         <px-icon class="mr-3" />
          <span class="font-semibold text-xl tracking-tiight">Exchange</span>
        </div>
        <div
          class="hidden-sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        ></div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";
export default {
  name: "PxHeader",
  components: { PxIcon }
};
</script>

<style></style>
