<template>
  <div
    id="search-bar"
    class="w-1/2 bg-white rounded-md shadow-lg z-10 border border-gray-200"
  >
    <form class="flex items-center justify-center p-2">
      <input
        type="text"
        placeholder="Search here"
        class="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-0 focus:ring-gray-600 focus:border-transparent"
      />
      <button
        type="button"
        class="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-600 focus:ring-opacity-50"
      >
        Search
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
#search-bar {
  width: 70%;
  margin: 20px auto;
}
</style>