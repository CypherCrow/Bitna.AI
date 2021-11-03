<template>
    <div class="menu"> 
        <h2 class="menuHeader">Select Dataset</h2>

        <select name="datasets" id="datasets"> 
            <option v-for="dataset in datasets" :key="dataset.id" :value="dataset">dataset.dataset_file</option>
        </select>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DatasetsMenu', 
    data(){
        return {
            datasets: []
        }
    }, 
    mounted(){
        this.getDatasets()
    },
    methods: {
        getDatasets(){
            axios.get('/api/datasets')
                .then(response => {
                    this.datasets = response.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped>

</style>