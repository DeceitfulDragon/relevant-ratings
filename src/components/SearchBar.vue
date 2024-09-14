<template>
  <input v-model="searchQuery" @input="search" type="text" placeholder="Search movies..." class="p-2 bg-gray-800 text-white rounded-lg w-full">
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.searchQuery);
      }
    }
  }
</script>