<template>
{{ response }}
</template>

<script>
import characterInfo from "@/service/characterInfo"

export default {
    name: "Test",
    methods: {
        async test() {
            try{
                const response = await characterInfo.getCharacterView()
                console.log(response)
            } catch(error) {
                console.error(error)
            }
        }
        
    },

    created() {
    this.test();
  }
}

</script>