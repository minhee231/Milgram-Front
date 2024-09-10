<template>
  <v-row>
      <v-col min-height="200vh" cols="1"></v-col> <!--공백-->
      <v-col>
        <v-sheet class="bg-grey-darken-2" min-height="1000" rounded="lg">
          <totalViewsChart class="Chart"
          v-if="chartRendered" 
          :chartData="_chartData" 

          />
        </v-sheet>
      </v-col>

      <v-col cols="3">
        <v-sheet>
          <ranking 
          v-if="characterRendered"
          :characterSortData="characterSortData" 
          :characterImages="characterImages"/>
        </v-sheet>
      </v-col>
      <v-col cols="2">
      </v-col>
    </v-row>
</template>

<script>
import totalViewsChart from '../components/viewsChart.vue';
import Ranking from '../components/Ranking.vue';
import { chartData} from '../mixins/chartInfo';
import characterInfo from "@/service/characterInfo"

export default {
  name: 'TotalDashboard',
  components: {
    totalViewsChart,
    Ranking,
  },
  data() {
    return {
      characterData: null,
      _chartData: chartData,
      chartRendered: false,
      characterSortData: null,
      characterImages: null,
      characterRendered: false,
      
    }
  },
  methods: {
    async fetchCharacterDetails() {
      try {
        const response = await characterInfo.getCharacterView();
        this.characterData = response.data;
        
        this._chartData.labels = this.characterData.map(item => item.characters.name);
        this._chartData.datasets[0].data = this.characterData.map(item => item.views);
        this.chartRendered = true;
        console.log("nice: ",this._chartData)

      } catch (error) {
        console.error(error);
      }
    },

    async fetchCharacterImages() {
      try {
        const response = await characterInfo.getCharacterImages();
        const data = response.data;
        
        this.characterImages = data;
        console.log(this.characterImages[9])
        this.characterRendered = true;
      } catch(error) {
        console.error(error);
      }
    },

    async fetchCharacterSortDetails() {
      try {
        const response = await characterInfo.getCharacterSortView();
        const data = response.data;

        this.characterSortData = data;
      } catch(error) {
        console.error(error)
      }
    }
  },

  created() {
    this.fetchCharacterDetails();
    this.fetchCharacterSortDetails();
    this.fetchCharacterImages();
  }
  
};
</script>

<style>
.Chart {
    max-width: 600px;
    max-height: 600px;
    
}

</style>