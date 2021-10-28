<template>
    <div id="home"> 
        <section>
            <p id="title">Bitna.AI</p>
            <p id="subtitle">Shining new information and models everyday</p>
            <img src="../assets/bitna_ai_logo.jpg" alt="Bitna.AI Logo" />
        </section>

        <header>Links</header>
        <div id="buttons">
            <Button @click="toDatasets()" name="Datasets" color="#FF5349" />
            <Button @click="toModels()" name="Models" color="#FF5349" />
        </div>

        <header>New User? No Worries!</header>
    </div> 
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name: 'Home', 
    components: {
        Button
    }, 
    methods: {
        toDatasets(){
            this.$router.push('/ds')
        }, 
        toModels(){
            this.$router.push('/models')
        }
    }
}
</script>

<style> 
p#title {
    color: #FF5349; 
    font-size: 40px;
}

p#subtitle {
    color: rgb(128, 127, 127);
    font-size: 20px; 
}

div#buttons {
    display: flex; 
    justify-content: center;
}
</style> 
