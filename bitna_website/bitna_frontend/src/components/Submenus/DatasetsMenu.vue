<template>
    <div class="menu"> 
        <h2 class="menuHeader">Select Datasets<br/>(stub)</h2>

        <h3>Training</h3>
        <h4>(To train the model with)</h4>
        <select name="train_datasets" id="train_datasets"> 
            <option v-for="dataset in datasets" :key="dataset.id" :value="dataset.dataset_file">{{ dataset.dataset_name }}</option>
        </select>

        <h3>Test</h3>
        <h4>(To test with the model)</h4>
        <select name="test_datasets" id="test_datasets"> 
            <option v-for="dataset in datasets" :key="dataset.id" :value="dataset.dataset_file">{{ dataset.dataset_name }}</option>
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

select {
    margin: 20px 0;   
    width: 300px; 
    height: 50px; 
}

</style>