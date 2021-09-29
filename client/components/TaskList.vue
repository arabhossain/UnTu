<template>
  <b-row class="justify-content-md-center pt-3">
    <b-col col cols="1" md="1">
      <b-form-checkbox v-model="isCompleted" @change="taskMark" :checked="getTask.completed"  size="lg"/>
    </b-col>
    <b-col col cols="8" md="9"> {{getTask.details}} </b-col>
    <b-col col cols="2" md="2" class=" text-right">
      <b-button @click="taskDelete()" variant="outline-secondary" class="mb-2" size="sm" >
        <b-icon icon="x" scale="2"></b-icon>
      </b-button>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props:['getTask'],
  data(){
    return {
      isCompleted: false
    }
  },
  methods:{
    taskMark(){
      this.$store.dispatch('todo/markTask', {id: this.getTask.id, completed: this.isCompleted ? 1 : 0})
    },
    async taskDelete(){
      const confirmed = await this.$bvModal.msgBoxConfirm('Do you want to delete the task?', {
        title: 'Confirmation',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'warning',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      });

      if (confirmed)
        this.$store.dispatch('todo/deleteTask', this.getTask)

    }
  }
}
</script>

