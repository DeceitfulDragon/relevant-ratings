<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg z-60 max-w-md w-full outline outline-2 outline-cyan-500">
        <h2 class="text-2xl text-white mb-4">Set OMDb API Key</h2>
  
        <!-- Explanatory text -->
        <p class="text-white text-sm mb-4">
          This site uses The Open Movie Database for fetching information about your movies. To get a FREE api key, head over to 
          <a href="https://www.omdbapi.com" target="_blank" class="underline text-cyan-400">www.omdbapi.com</a>
          and generate a FREE key to use! This will be saved to your local storage so you don't have to set it again.
        </p>
  
        <input
          v-model="apiKey"
          type="text"
          placeholder="Enter your OMDb API key"
          class="p-2 bg-gray-700 text-white w-full mb-4 rounded"
        />
        <!-- Buttons -->
        <div class="flex justify-end space-x-4">
          <button @click="saveApiKey" class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded">Save</button>
          <button @click="closeModal" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['isVisible'],
    data() {
      return {
        apiKey: ''
      };
    },
    mounted() {
      const storedApiKey = localStorage.getItem('omdbApiKey');
      if (storedApiKey) {
        this.apiKey = storedApiKey;
      }
    },
    methods: {
      saveApiKey() {
        localStorage.setItem('omdbApiKey', this.apiKey);
        this.$emit('close'); // Close the modal after saving
      },
      closeModal() {
        this.$emit('close'); // Just close without saving
      }
    }
  };
  </script>