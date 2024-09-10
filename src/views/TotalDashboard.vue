<template>
  <v-row>
      
      <v-col min-height="200vh" cols="1"></v-col> <!--공백-->
      <v-list id="dataChangeList">
        <v-list-item
        v-for="n in buttonList"
        :key="n"
        :title="n"
        @click="handleClick(n)"
        link=""
        >

        </v-list-item>
      </v-list>
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
  watch: {

  },
  data() {
    return {
      buttonList: [
        "Total",
        "Daily",
        "Weekly"
      ],
      _chartData: chartData,

      characterData: null,
      chartRendered: false,
      characterSortData: null,
      characterImages: null,
      characterRendered: false,
      
    }
  },
  methods: {
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

    async fetchTotalCharacterDetails() {
      try {
        this.chartRendered = false;
        const response = await characterInfo.getCharacterTotalView();
        this.characterData = response.data;
        
        this._chartData.labels = this.characterData.map(item => item.characters.name);
        this._chartData.datasets[0].data = this.characterData.map(item => item.views);
        this.chartRendered = false;
        this.chartRendered = true;

      } catch (error) {
        console.error(error);
      }
    },

    async fetchTotalCharacterSortDetails() {
      try {
        const response = await characterInfo.getCharacterSortTotalView();
        const data = response.data;

        this.characterSortData = data;
      } catch(error) {
        console.error(error)
      }
    },

    async fetchDailyCharacterDetails() {
      try {
        this.chartRendered = false;
        const response = await characterInfo.getCharacterDailyView();
        this.characterData = response.data;
        
        this._chartData.labels = this.characterData.map(item => item.characters.name);
        this._chartData.datasets[0].data = this.characterData.map(item => item.views);
        this.chartRendered = true;

      } catch (error) {
        console.error(error);
      }
    },

    async fetchDailyCharacterSortDetails() {
      try {
        const response = await characterInfo.getCharacterSortDailyView();
        const data = response.data;

        this.characterSortData = data;
      } catch(error) {
        console.error(error)
      }
    },

    async fetchWeeklyCharacterDetails() {
      try {
        this.chartRendered = false;
        const response = await characterInfo.getCharacterWeeklyView();
        this.characterData = response.data;
        
        this._chartData.labels = this.characterData.map(item => item.characters.name);
        this._chartData.datasets[0].data = this.characterData.map(item => item.views);
        this.chartRendered = true;

      } catch (error) {
        console.error(error);
      }
    },

    async fetchWeeklyCharacterSortDetails() {
      try {
        const response = await characterInfo.getCharacterSortWeeklyView();
        const data = response.data;

        this.characterSortData = data;
      } catch(error) {
        console.error(error)
      }
    },

    handleClick(button) {
      if (button === "Total") {
        this.fetchTotalCharacterDetails();
        this.fetchTotalCharacterSortDetails();
      } else if (button === "Daily") {
        this.fetchDailyCharacterDetails();
        this.fetchDailyCharacterSortDetails();
      } else if (button === "Weekly") {
        this.fetchWeeklyCharacterDetails();
        this.fetchWeeklyCharacterSortDetails();
      }
    },

    // renderOff() {
    //   this.chartRendered = true;
    // }
  },

  created() {
    this.fetchTotalCharacterDetails();
    this.fetchTotalCharacterSortDetails();
    this.fetchCharacterImages();
  }
  
};
</script>

<style>
.Chart {
    max-width: 600px;
    max-height: 600px;
}

#dataChangeList {
  max-height: 170px;
  background-color: #757575;
  color: #ffffff;
}


</style>