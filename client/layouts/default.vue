<template>
  <div>
    <b-overlay :show="isLoading"  >
      <top-bar/>
      <b-container fluid style="min-height: 100vh">
        <nuxt class="mt-2" />
      </b-container>
    </b-overlay>
  </div>
</template>


<script>
import {createNamespacedHelpers} from "vuex";
const {mapGetters: templateGetters} = createNamespacedHelpers('template')

export default {
  computed: {
    ...templateGetters(['isLoading']),
  },
}
</script>
