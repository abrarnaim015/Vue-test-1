<template>
  <div class="container">
    <h1>Add profile Page</h1>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="addNewProfile" class="text-center">
        <input v-model="name" class="form-control m-2" type="text" placeholder="Full Name">
        <input v-model="reward" class="form-control m-2" type="number" placeholder="Reward">
        <select v-model="status" class="form-control m-2">
          <option selected disabled value="-">Status</option>
          <option value="Full Stuck Developer">Full Stuck Developer</option>
          <option value="Front End Developer">Front End Developer</option>
          <option value="Back End Developer">Back End Developer</option>
        </select>
        <input v-model="date" class="form-control m-2" type="date">
        <input v-model="description" class="form-control m-2" type="text" placeholder="Description">
        <button type="submit" class="btn btn-success form-control m-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageProfile',
  data () {
    return {
      name: '',
      reward: '',
      status: '',
      date: '',
      description: ''
    }
  },
  methods: {
    addNewProfile () {
      const tgl = this.date.split('-')
      const payload = {
        name: this.name,
        reward: +this.reward,
        status: this.status,
        startDate: `${tgl[1]}-${tgl[2]}-${tgl[0]}`,
        description: this.description
      }
      this.$store.dispatch('addNewProfile', payload)
        .then(({ data }) => {
          this.$store.dispatch('getAllData')
          this.$router.push({ name: 'Profile' })
        })
        .catch(console.log)
    }
  },
  components: {},
  computed: {},
  created () {}
}
</script>

<style>

</style>
