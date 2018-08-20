<template>
  <div class="page-content-wrapper">
    <h1>Table page</h1>
    <loader :fetching="table.fetching"/>
    <md-table v-model="table.data" md-sort="adminCode1" md-sort-order="asc" md-card md-fixed-header>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID" md-sort-by="adminCode1">{{ item.adminCode1 }}</md-table-cell>
          <md-table-cell md-label="Country" md-sort-by="countryName">{{ item.countryName }}</md-table-cell>
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Full Name" md-sort-by="adminName1">{{ item.adminName1 }}</md-table-cell>
          <md-table-cell md-label="Population" md-sort-by="population" md-numeric>{{ item.population }}</md-table-cell>
        </md-table-row>
      </md-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loader from '@/components/shared/Loader';

export default {
  name: 'Table',
  components: {
    'loader': Loader
  },
  mounted () {
    this.getRegions();
  },
  computed: {
    ...mapState({ table: state => state.table }),
  },
  methods: {
    ...mapActions('table', ['getRegions']),
  }
}
</script>

<style>
 .page-content-wrapper {
   height: 80vh;
 }
</style>
