<script setup lang="ts">
defineProps({
  currentValue: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <span class="increase" v-if="currentValue > 0">▲</span>
  <span class="decrease" v-if="currentValue < 0">▼</span>
</template>

<style scoped>
.increase {
  color: green;
}

.decrease {
  color: red;
}
</style>
