<template>
  <div class="layout-signup">
    <div class="md-layout md-gutter md-alignment-center-center wrapper-signup">
      <div class="md-layout-item md-size-30">
        <signup-form></signup-form>
      </div>
    </div>
  </div>
</template>

<script>
  import SignupForm from './SignupForm.vue';

  export default {
    name: 'Signup',
    components: {
      'signup-form': SignupForm
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/src/components/MdAnimation/variables";
  @import "~vue-material/src/theme/engine";
  .md-layout {
    transition: .3s $md-transition-stand-timing;
  }
  .layout-signup {
    height: 100vh;
    .wrapper-signup {
      height: 100%;
    }
    .md-layout-item {
      min-height: 40px;
      transition: .3s $md-transition-stand-timing;
      span {
        width: 100%;
        height: 100%;
        padding: 8px;
        display: block;
        background: md-get-palette-color(blue, 200);
      }
    }
  }
</style>
