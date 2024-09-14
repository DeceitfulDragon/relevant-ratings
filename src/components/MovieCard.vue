<template>
  <div class="relative bg-gray-800 text-gray-200 p-4 rounded-lg shadow-lg font-mono">
    <!-- Remove button -->
    <button @click="confirmRemove" class="absolute top-2 right-2 hover:bg-red-700 text-white p-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Movie art / poster -->
    <img :src="movie.poster" alt="movie poster" class="w-full h-64 object-contain rounded-md mb-4">
    
    <!-- Name and genre -->
    <h3 class="text-xl font-bold font-sans text-center text-white">{{ movie.name }}</h3>
    <p class="text-gray-400 text-center">{{ movie.genre }}</p>
    
    <!-- Directed by / Starring -->
    <p class="text-gray-400 mt-3"><strong>Directed by:</strong> {{ movie.directedBy }}</p>
    <p class="text-gray-400"><strong>Starring:</strong> {{ movie.starring }}</p>
    
    <!-- Ratings -->
    <div class="flex items-center mt-2">
      <p class="text-amber-400"><strong>Your Rating:</strong> {{ movie.rating }}/10 ★</p>
      <p class="ml-4 text-cyan-400"><strong>IMDb Rating:</strong> {{ movie.imdbRating }}/10 ☆</p>
    </div>
    
    <!-- Review -->
    <p class="mt-2 text-gray-300">"{{ movie.notes }}"</p>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  methods: {
    // Removal confirmation (because I kept deleting entries by accident)
    confirmRemove() {
      const confirmation = confirm(`Are you sure you want to remove "${this.movie.name}"?`);
      if (confirmation) {
        this.$emit('remove-movie', this.movie.id);
      }
    }
  }
}
</script>