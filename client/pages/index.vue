<template>
  <b-container class="pt-4">
    <add-new/>
    <task-list  v-for="(task, index) in tasks" :getTask="task" :key="'task-'+index"/>
    <div v-if="tasks.length <= 0 " class="text-center mt-3">
      <b-icon  variant="primary" animation="cylon" font-scale="4" icon="emoji-heart-eyes"/>
      <p>Yoo! No task! Have some rest ;) </p>
    </div>
    <action-buttons/>
  </b-container>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const {mapGetters: todoGetters} = createNamespacedHelpers('todo')

export default {
  computed: {
    ...todoGetters(['tasks']),
  },
  mounted() {
      this.$store.dispatch('todo/loadTasks')
  }
}
</script>

