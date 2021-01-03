<template>
  <div class="container">
    <div class="d-flex row">
      <div>
        <button class="btn btn-success m-2" @click="pageAddProfile('AddProfile')">Add New Data</button>
      </div>
      <div class="col-4 text-start p-2 bg-dark"  v-for="el in getDataAll" :key="el.id">
        <div class="text-light">
          <h3>{{ el.id }}. {{ el.name }}</h3>
          <div class="px-4">
            <h5>{{ el.description }}</h5>
            <h5>{{ el.reward }}</h5>
            <h5>{{ el.status }}</h5>
            <h5>{{ el.startDate }}</h5>
            <div class="p-2">
              <button @click="editProfile(el)" class="mx-2 btn btn-warning">Edit</button>
              <button class="mx-2 btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile-Template',
  data () {
    return {}
  },
  methods: {
    fetchAllData () {
      this.$store.dispatch('getAllData')
    },
    pageAddProfile (changePage) {
      this.$router.push({ name: changePage })
    },
    editProfile (dataEdit) {
      this.$store.dispatch('editProfile', dataEdit)
      this.$router.push({ name: 'EditProfile' })
    }
  },
  components: {},
  computed: {
    getDataAll () {
      return this.$store.state.setGetAlldata
    }
  },
  created () {
    this.fetchAllData()
  }
}
</script>

<style>

</style>
