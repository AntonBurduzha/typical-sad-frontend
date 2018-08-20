<template>
  <div v-if="fetching">
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    props: ['fetching']
  }
</script>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }
</style>
