<template>
    <div id="home"> 
        <section>
            <p id="title">Bitna.AI</p>
            <img src="../assets/bitna_ai_logo.jpg" alt="Bitna.AI Logo" />
            <Button @click="toDatasetSelection()" name="Get Started" color="#FF5349" />
        </section> 
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
        toDatasetSelection(){
            this.$router.push('/bitna/ds-create')
        }
    }
}
</script>

<style> 
#title {
    color: #FF5349; 
    font-size: 40px;
}
</style> 
