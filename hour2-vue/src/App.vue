<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

function reset() {
  count.value = 0;
}
</script>

<template>
  <div class="card">
    <h1>Vue Counter</h1>

    <!-- EXERCISE 7: display count -->
    <p>Count: {{ count }}</p>

    <!-- EXERCISE 7: increment button -->
    <button @click="increment">Increment</button>

    <!-- EXERCISE 8: conditional reset -->
    <button v-if="count > 0" @click="reset">Reset</button>

    <!-- EXERCISE 8: threshold message -->
    <p v-if="count >= 10">🎉 You reached 10!</p>
  </div>
</template>
