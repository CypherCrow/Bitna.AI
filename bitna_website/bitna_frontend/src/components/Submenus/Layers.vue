<template>
    <div class="menu"> 
        <h2 class="menuHeader">Layers</h2>
        <div class="linkSection"> 
            <Button name="Add" color="green" />
            <Button name="Delete" color="red" />
        </div> 

        <div class="message-body" id="layer_submenu">
            <p>Test</p>
        </div>
    </div>
</template>

<script>
import Button from '../Button.vue'

export default {
    name: 'Layers', 
    components: {
        Button, 
    }, 
    data(){
        return this.isOpen = true
    }, 
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>

.menu {
    border: 2px solid #FF5349; 
    border-radius: 10px;
    align-items: center;
    justify-content: center; 
    padding: 15px;
    margin: 20px;
    min-width: 500px;
    min-height: 500px; 
    width: 500px; 
    height: 500px; 
}

.menuHeader {
    padding-top: 30px; 
}

div#layer_submenu .message-body {
    overflow: hidden; 
    transition: 0.3s ease all; 
}

.is-closed .message-body {
    max-height: 0;
}

</style>