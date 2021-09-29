<template>
  <b-row class="mt-4">
    <b-col class="mt-1" cols="12" md="2">
      <b-button @click="saveTasks" :disabled="markedTasks.length === 0" variant="primary" class="w-100">Save</b-button>
    </b-col>
    <b-col class="mt-1"  cols="12" md="2">
      <b-button @click="loadTasks" variant="primary" class="w-100">Load</b-button>
    </b-col>
    <b-col class="mt-1" cols="12" md="2">
      <b-button @click="deleteTasks"  :disabled="tasks.length === 0" variant="primary" class="w-100">Clear</b-button>
    </b-col>
  </b-row>
</template>

<script>

import {createNamespacedHelpers} from "vuex";
const {mapGetters: todoGetters} = createNamespacedHelpers('todo')

export default {
  computed: {
    ...todoGetters(['tasks', 'markedTasks']),
  },
  methods:{
    saveTasks() {
      this.$store.dispatch('todo/saveTasks')
    },
    loadTasks() {
      this.$store.dispatch('todo/loadTasks')
    },
    deleteTasks() {
      this.$store.dispatch('todo/deleteTasks')
    }
  }
}
</script>
