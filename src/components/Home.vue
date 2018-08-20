<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <md-tabs class="md-transparent" md-alignment="fixed" md-sync-route>
          <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
          <md-tab id="tab-test" md-label="Test" to="/test"></md-tab>
        </md-tabs>
      </md-app-toolbar>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
