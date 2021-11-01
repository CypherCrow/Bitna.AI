<template> 
    <div> 
        <Header /> 

        <header>Your Datasets</header> 

        <div
            v-for="dataset in datasets"
            :key="dataset.id"
        > 
            <Card :title="dataset.id" :content="dataset" /> 
        </div>

    </div>
</template> 

<script> 
import axios from 'axios'

import Header from '../../components/Header.vue'
import Card from '../../components/Card.vue'

export default {
    name: 'DatasetsView', 
    components: {
        Header, Card
    }, 
    data(){
        return {
            datasets: []
        }
    },
    mounted() {
        this.getDatasets()
    },
    methods: {
        getDatasets(){
            axios
                .get('/ds/view/')
                .then(response => {
                    this.datasets = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped> 

</style> 