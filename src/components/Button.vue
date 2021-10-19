<template>
  <button :type="type" class="btn" :class="btnClass">{{ btnText }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
      btnClass: { type: String, default: "btn-primary" },
      btnText: { type: String},
      type: { type: String}
  }
};
</script>

<style>
</style>
