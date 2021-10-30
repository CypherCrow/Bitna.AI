<template>
    <div> 
        <Header />

        <header>Models</header>
        <div id="modelCategories"> 
            <Card :title="cards[0].title" :content="cards[0].content" @click="toModelsView()" />
            <Card :title="cards[1].title" :content="cards[1].content" @click="toModelCreation()" />
        </div> 
        <!-- <div id="modelCategories" v-for="card in cards" :key="card.id">
            <Card :title="card.title" :content="card.content" />
        </div> --> 
    </div> 
</template>

<script>
import Header from '../../components/Header'
import Card from '../../components/Card.vue'

export default {
    name: 'ModelsMain', 
    components: {
        Header, Card, 
    },
    data() {
        return {
            cards: [
                {
                    id: 1, 
                    title: 'View', 
                    content: 'Seek previous models, and customize them if you want.'
                }, 
                {
                    id: 2, 
                    title: 'Create', 
                    content: 'Create your own model.'
                }
            ]
        }
    }, 
    methods: {
        toModelCreation() {
            this.$router.push('/models/create')
        }, 
        toModelsView(){
            this.$router.push('/models/view')
        }
    }
}
</script>

<style scoped> 

div#modelCategories {
    display: inline-block;
    justify-content: center;
}

</style> 