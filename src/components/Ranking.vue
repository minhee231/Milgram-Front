
<template>
  <v-card
    class="mx-auto nice-card"
    title="조회수 순위" 
  ></v-card>
    <v-list lines="two" class="custom-list scroll-list"> 
        <v-list-item 
            v-for="(item, index) in characterSortData"
            :key="item"
            :title="index + 1 +'등　　　조회수: ' + item.views "
            link
        >
        
            <v-avatar color="surface-variant" class="avatar-image">
                
                <img :src="characterImages[item.charactersId -1].imageUrl" alt="Avatar">
            </v-avatar>
        <v-divider></v-divider></v-list-item>
        </v-list>
</template>

<script>
export default {
    name: 'ChartRanking',
    props: {
        characterSortData: {
            type: Object,
            Required: true,
        },

        characterImages: {
            type: Object,
            Required: true
        }

    }

}
</script>

<style scoped>
.custom-list {
  background-color: #ECEFF1;
  max-height: 600px; 
  overflow-y: auto;
}

.nice-card {
    background-color: gray;
}

.avatar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}




</style>