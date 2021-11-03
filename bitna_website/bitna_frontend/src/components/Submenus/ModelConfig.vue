<template>
    <div class="menu"> 
        <h2 class="menuHeader">Configure<br/>(stub)</h2>
        <div id="config"> 
            <Button name="Save Configuration" color="green" /> 
            <Button name="Factory Reset" color="red" /> 
        </div> 
    </div>
</template>

<script> 
import Button from '../../components/Button.vue'

export default {
    name: 'ModelConfig', 
    components: {
        Button, 
    }, 
    methods: {
        factoryReset(){
            this.$state.commit('modelReset')
        }
    }
}

</script> 

<style scoped>

div#config {
    margin-top: 90px; 
}

</style>