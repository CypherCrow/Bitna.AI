<template>
    <div class="menu"> 
        <h2 class="menuHeader">Layers<br/>(stub)</h2>
        <div class="linkSection"> 
            <Button name="Add" color="green" />
            <Button name="Delete" color="red" />
        </div> 

        <div class="message-body" id="layer_submenu">
            <h4 id="subheader">Adding/Deleting Layer</h4>

            <div class="form-row">
                <label for="layerType">Type</label> 
                <select name="layerType" id="layerType">
                    <option value="linear">Linear</option>
                    <option value="ReLU">ReLU</option>
                    <option value="Conv2D">Conv2D</option>
                    <option value="Flatten">Flatten</option>
                </select>

                <label for="bias">Bias</label>
                <select name="bias" id="bias">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option> 
                </select>
            </div>

            <div class="form-row">
                <label for="inputSize">Input Size</label> 
                <input type="number" name="inputSize" id="inputSize" min="1" >

                <label for="outputSize">Output Size</label> 
                <input type="number" name="outputSize" id="outputSize" min="1" >
            </div>

            <div class="linkSection"> 
                <Button name="Add" color="green" />
                <Button name="Delete" color="red" />
            </div> 
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

h4#subheader {
    background-color: #FF5349;
    padding: 10px; 
    color: white; 
}

div.form-row {
    margin: 15px; 
} 

#inputSize, #outputSize {
    min-width: 100px;
    min-height: 30px; 
    width: 100px; 
    height: 30px;
    padding: 1px; 
}

label {
    margin: 0 15px; 
}

select {
    min-width: 100px; 
    min-height: 30px; 
    width: 100px;
    height: 30px;
}

</style>