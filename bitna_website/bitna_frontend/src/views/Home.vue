<template>
    <div id="home"> 
        <section> <!-- A personal assistant software --> 
            <p id="title">Bitna.AI</p>
            <p id="subtitle">Shining new revelations</p>
            <!-- <img src="../assets/bitna_ai_logo.jpg" alt="Bitna.AI Logo" /> --->
        </section>

        <div id="TwoLinks">
            <header>What Do You Want to Check Out?</header>
            <div class="linkSection">
                <Button @click="toDatasets()" name="Datasets" color="#FF5349" />
                <Button @click="toModels()" name="Models" color="#FF5349" />
            </div>
        </div>

        <div id="OneLink">
            <header>New User? No Worries!</header>
            <div class="linkSection">
                <Button @click="toTutorial()" name="Tutorial" color="#FF5349" />
            </div> 
        </div>
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
            this.$router.push('/model')
        }, 
        toTutorial(){
            this.$router.push('/tutorial')
        }
    }
}
</script>

<style> 
p#title {
    color: #FF5349; 
    font-size: 60px;
}

p#subtitle {
    color: rgb(128, 127, 127);
    font-size: 25px; 
    margin-top: -10px; 
    margin-bottom: 100px; 
}

.linkSection {
    display: flex; 
    justify-content: center;
}
</style> 
