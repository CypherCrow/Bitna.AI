<template> 
    <div> 
        <Header /> 

        <header>Datasets</header>

        <div id="datasetCategories">
            <Card :title="cards[0].title" :content="cards[0].content" @click="toDatasetsView()" /> 
            <Card :title="cards[1].title" :content="cards[1].content" @click="toDatasetUpload()" />
            <Card :title="cards[2].title" :content="cards[2].content" @click="toDatasetCreation()" />
        </div>
        <!-- <div id="datasetCategories" v-for="card in cards" :key="card.id"> 
            <Card :title="card.title" :content="card.content" @click="card.function" /> 
        </div> -->
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Card from '../../components/Card.vue'

export default {
    name: 'DatasetsMain', 
    components: {
        Header, Card
    }, 
    data() {
        return {
            cards: [
                {
                    id: 1, 
                    title: 'View', 
                    content: 'Seek previous datasets, and customize them if you want.', 
                    //function: this.methods.toDatasetView()
                }, 
                {
                    id: 2, 
                    title: 'Upload',
                    content: 'Upload a dataset here with no grueling labor.'
                }, 
                {
                    id: 3, 
                    title: 'Create', 
                    content: 'Create your own dataset.', 
                    //function: this.methods.toDatasetCreation()
                }
            ]
        }
    }, 
    methods: {
        toDatasetCreation() {
            this.$router.push('/ds/create')
        }, 
        toDatasetsView() {
            this.$router.push('/ds/view')
        }, 
        toDatasetUpload() {
            this.$router.push('/ds/upload')
        }
    }
}
</script>

<style scoped> 

div#datasetCategories {
    display: inline-block; 
    align-items: center;
    justify-content: center;
}

</style> 