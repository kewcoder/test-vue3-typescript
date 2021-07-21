import { readonly, ref } from 'vue';

export function useState(initialState:Number) {
  const state = ref(initialState);
  const setState = (newState:Number) => {
    state.value = newState;
  };
  
  return [readonly(state), setState];
}