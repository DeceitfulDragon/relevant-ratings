<template>
  <div id="app" class="bg-gray-900 text-white font-sans">
    <header class="p-6 bg-gray-800 shadow-lg flex flex-col md:flex-row md:items-center justify-between">
      <div class="flex items-center space-x-4 mb-4 md:mb-0">
        <!-- Movie Form Button -->
        <button @click="toggleForm" class="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full h-12 w-12 flex items-center justify-center">
          <span class="text-2xl">+</span>
        </button>
        <img src="@/assets/images/logo.webp" alt="Relevant Ratings Logo" class="h-12 w-auto" />
      </div>

      <!-- Save, Load, and API Key Buttons -->
      <div class="flex flex-wrap items-center space-x-4">
        <button @click="saveMoviesToFile" class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-2 rounded mb-2 md:mb-0"><i class="fa-solid fa-floppy-disk"></i> Save</button>
        <input type="file" @change="loadMoviesFromFile" class="hidden" ref="fileInput" />
        <button @click="triggerFileInput" class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-2 rounded mb-2 md:mb-0"><i class="fa-solid fa-upload"></i> Load</button>
        <button @click="showApiKeyModal" class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-2 rounded"><i class="fa-solid fa-key"></i> Set API Key</button>
      </div>
    </header>

    <!-- API Key Modal -->
    <api-key-modal :isVisible="isApiKeyModalVisible" @close="closeApiKeyModal" />

    <main class="p-5">
      <!-- Form Toggle -->
      <div v-show="isFormVisible" class="mb-6 border-b-4 border-x-4 border-gray-800">
        <movie-form @add-movie="addMovie"></movie-form>
      </div>
      
      <!-- Sort and Search Bar Section -->
      <div class="flex items-center space-x-4 mt-4">
        <!-- Sort by dropdown -->
        <div class="flex items-center space-x-2">
          <i class="fas fa-sort text-white"></i>
          <select v-model="sortOption" @change="sortMovies" class="p-2 bg-gray-800 text-white rounded-lg h-10">
            <option value="alphabetical">Alphabetical (A-Z)</option>
            <option value="year-asc">Year (Ascending)</option>
            <option value="year-desc">Year (Descending)</option>
            <option value="rating-asc">Rating (Ascending)</option>
            <option value="rating-desc">Rating (Descending)</option>
            <option value="genre">Genre</option>
          </select>
        </div>
        
        <!-- Search Bar with Icon -->
        <div class="flex items-center space-x-2 flex-grow">
          <i class="fas fa-search text-white"></i>
          <search-bar @search="searchMovies" class="w-full"></search-bar>
        </div>
      </div>

      <!-- Movies Grid -->
      <div class="mt-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          <movie-card
            v-for="movie in filteredMovies"
            :key="movie.id"
            :movie="movie"
            @remove-movie="removeMovie"
          ></movie-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Components
import ApiKeyModal from './components/ApiKeyModal.vue';
import MovieForm from './components/MovieForm.vue';
import SearchBar from './components/SearchBar.vue';
import MovieCard from './components/MovieCard.vue';

export default {
  name: 'App',
  components: {
    ApiKeyModal,
    MovieForm,
    SearchBar,
    MovieCard
  },
  data() {
    return {
      isFormVisible: false, // Controls the visibility of the movie form
      isApiKeyModalVisible: false, // Controls the visibility of the API key modal
      movies: [],
      filteredMovies: [],
      sortOption: 'alphabetical', // Default sorting option
    };
  },
  methods: {
    // Toggle the add movie form
    toggleForm() {
      this.isFormVisible = !this.isFormVisible;
    },
    // Show the API key modal
    showApiKeyModal() {
      this.isApiKeyModalVisible = true;
    },
    // Close the API key modal
    closeApiKeyModal() {
      this.isApiKeyModalVisible = false;
    },
    // Add a movie to the list
    addMovie(newMovie) {
      this.movies.push({ ...newMovie, id: Date.now() });
      this.filteredMovies = this.movies;
      this.saveMovies();
      this.sortMovies();
    },
    // Remove a movie from the list
    removeMovie(movieId) {
      this.movies = this.movies.filter(movie => movie.id !== movieId);
      this.filteredMovies = this.movies;
      this.saveMovies();
      this.sortMovies();
    },
    // Search movies by name
    searchMovies(query) {
      this.filteredMovies = this.movies.filter(movie =>
        movie.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    // Sort movies based on the selected option
    sortMovies() {
      if (this.sortOption === 'alphabetical') {
        this.filteredMovies.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOption === 'year-asc') {
        this.filteredMovies.sort((a, b) => parseInt(a.date) - parseInt(b.date));
      } else if (this.sortOption === 'year-desc') {
        this.filteredMovies.sort((a, b) => parseInt(b.date) - parseInt(a.date));
      } else if (this.sortOption === 'rating-asc') {
        this.filteredMovies.sort((a, b) => a.rating - b.rating);
      } else if (this.sortOption === 'rating-desc') {
        this.filteredMovies.sort((a, b) => b.rating - a.rating);
      } else if (this.sortOption === 'genre') {
        this.filteredMovies.sort((a, b) => a.genre.localeCompare(b.genre));
      }
    },
    // Save movie list to local storage
    saveMovies() {
      localStorage.setItem('movies', JSON.stringify(this.movies));
    },
    // Load movie list from local storage
    loadMovies() {
      const savedMovies = JSON.parse(localStorage.getItem('movies'));
      if (savedMovies) {
        this.movies = savedMovies;
        this.filteredMovies = savedMovies;
        this.sortMovies();
      }
    },
    // Save the movie list to a JSON file
    saveMoviesToFile() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.movies));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "RelevantRatings.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    // Trigger file input for loading JSON
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    // Load movie list from a JSON file
    loadMoviesFromFile(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = JSON.parse(e.target.result);
          if (Array.isArray(result) && this.validateMovies(result)) {
            this.movies = result;
            this.filteredMovies = result;
            this.saveMovies();
          } else {
            alert("Invalid file format. Please upload a valid movie list.");
          }
        } catch (err) {
          alert("Error reading the file. Please upload a valid movie list.");
        }
      };
      reader.readAsText(file);
    },
    // Validate the movie list
    validateMovies(movies) {
      return movies.every(movie => movie.name && movie.date && movie.genre && movie.rating !== undefined);
    }
  },
  mounted() {
    this.loadMovies();
  }
};
</script>
