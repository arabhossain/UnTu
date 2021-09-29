<template>
  <b-row class="justify-content-md-center p-1">
    <b-col col cols="9" md="10">
      <b-form-input v-model="task" type="text" placeholder="Enter a task note ..."  ></b-form-input>
    </b-col>
    <b-col col cols="2" md="2" class="text-right">
      <b-button :disabled="task.length === 0" @click="taskSave" variant="primary" size="sm" class="mb-2">
        <b-icon icon="plus" scale="2"></b-icon>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data(){
    return {
      task: ''
    }
  },
  methods: {
    async taskSave() {
      const confirmed = await this.$bvModal.msgBoxConfirm('You done enough details already?', {
        title: 'Confirmation',
        okTitle: 'YES',
        cancelTitle: 'NO',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      });

      if (confirmed) {
        await this.$store.dispatch('todo/createTask', {details: this.task})
        this.task = '';
      }
    }
  }
}
</script>
