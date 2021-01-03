<template>
  <div class=" container">
    <h1>Edit profile</h1>
    <p>{{ startDate }}</p>
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
        <input v-model="startDate" class="form-control m-2" type="date">
        <input v-model="description" class="form-control m-2" type="text" placeholder="Description">
        <button type="submit" class="btn btn-success form-control m-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile Page',
  data () {
    return {
      name: this.$store.state.setEditProfile.name,
      reward: this.$store.state.setEditProfile.reward,
      status: this.$store.state.setEditProfile.status,
      startDate: this.$store.state.setEditProfile.startDate,
      description: this.$store.state.setEditProfile.description
    }
  },
  methods: {},
  components: {},
  computed: {},
  created () {}
}
</script>

<style>
.btn {
  border-radius: 20px;
  padding-right: 20px;
  padding-left: 20px;
}
</style>
