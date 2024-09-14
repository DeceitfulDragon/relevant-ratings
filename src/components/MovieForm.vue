<template>
  <form @submit.prevent="selectMovie" class="flex flex-col bg-gray-900 p-6 rounded-lg font-sans">
    <!-- Movie name and rating input -->
    <div class="flex space-x-4">
      <div class="flex-1">
        <label for="movie" class="text-base text-white-300">Movie Name:</label>
        <input
          v-model="movieSearch"
          type="text"
          class="p-2 rounded-lg bg-gray-800 text-white mt-2 w-full"
          @input="fetchMovieSuggestions"
          placeholder="Start typing a movie name..."
        />
        
        <!-- Search suggestions -->
        <ul v-if="suggestions.length" class="bg-gray-700 mt-2 p-2 rounded-lg">
          <li
            v-for="suggestion in suggestions"
            :key="suggestion.imdbID"
            @click="fetchMovieDetails(suggestion.imdbID)"
            class="p-2 text-gray-300 cursor-pointer hover:bg-gray-600"
          >
            {{ suggestion.Title }} ({{ suggestion.Year }})
          </li>
        </ul>
      </div>

      <!-- Rating input -->
      <div class="w-32">
        <label for="rating" class="text-base text-white-300">Your Rating:</label>
        <input
          v-model="rating"
          type="number"
          min="0"
          max="10"
          class="p-2 rounded-lg bg-gray-800 text-white mt-2 w-full"
        />
      </div>
    </div>

    <!-- Review input full width -->
    <div class="mt-4">
      <label for="notes" class="text-base text-white-300">Your Review:</label>
      <textarea v-model="notes" class="p-2 rounded-lg bg-gray-800 text-white mt-2 w-full"></textarea>
    </div>

    <!-- Add movie button -->
    <button type="submit" class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded mt-4">Add Movie</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      movieSearch: '', // input for movie search
      suggestions: [], // list of movie suggestions
      selectedMovie: null, // selected movie details
      rating: '', // the number the user selects
      notes: '' // the review
    };
  },
  methods: {
    fetchMovieSuggestions() {
      // Get the API key from local storage
      const apiKey = localStorage.getItem('omdbApiKey'); 
      if (!apiKey) {
        alert('Please set your OMDb API key.');
        return;
      }

      if (this.movieSearch.length > 2) {
        fetch(`https://www.omdbapi.com/?s=${this.movieSearch}&apikey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            if (data.Search) {
              this.suggestions = data.Search;
            } else {
              this.suggestions = [];
            }
          })
          .catch(error => {
            console.error('Error fetching movie suggestions:', error);
          });
      } else {
        this.suggestions = [];
      }
    },
    fetchMovieDetails(imdbID) {
       // Get the API key from local storage
      const apiKey = localStorage.getItem('omdbApiKey');
      if (!apiKey) {
        alert('Please set your OMDb API key.');
        return;
      }

      fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          this.selectedMovie = data;
          this.movieSearch = `${data.Title} (${data.Year})`;
          this.suggestions = [];
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    },
    selectMovie() {
      if (this.selectedMovie) {
        this.$emit('add-movie', {
          name: this.movieSearch,
          date: this.selectedMovie.Year,
          genre: this.selectedMovie.Genre,
          directedBy: this.selectedMovie.Director,
          starring: this.selectedMovie.Actors,
          poster: this.selectedMovie.Poster,
          imdbRating: this.selectedMovie.imdbRating,
          rating: this.rating,
          notes: this.notes
        });
        this.clearForm();
      }
    },
    clearForm() {
      this.movieSearch = '';
      this.rating = '';
      this.notes = '';
      this.selectedMovie = null;
    }
  }
};
</script>