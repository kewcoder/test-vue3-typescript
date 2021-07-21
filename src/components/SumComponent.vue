<template>
  <div>
    <div class="flex bg-gray-700 text-red-500 flex-wrap h-80 border-2 border-red-500 m-10 p-10 items-start">
      <div class="flex flex-wrap">
         <div class="w-full mb-10">
          <label for="a" class="px-10">A</label>
          <input type="number" class="border-2 border-red-500 bg-gray-700 px-2" @input="setA($event.target.value)">
        </div>
        <div class="w-full mb-10">
          <label for="a" class="px-10">B</label>
          <input type="number" class="border-2 border-red-500 bg-gray-700 px-2" @input="setB($event.target.value)">
        </div>
        <div class="w-full mb-10">
          <label for="a" class="px-10">SUM</label>
          <input type="number" class="border-2 border-red-500 bg-gray-700 px-2" :value="count">
        </div>
      </div>
       <div class="w-full ml-auto">
         <button @click="setCount(parseInt(a)+parseInt(b))">CLICK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useState } from '../composables/state';
export default defineComponent({
  name: 'SumComponent',
  setup: () => {
   const [a, setA] = useState(0);
   const [b, setB] = useState(0);
   const [count, setCount] = useState(0);
  return {
      a,
      setA,
      b,
      setB,
      count,
      setCount,
  }
  }
})
</script>
