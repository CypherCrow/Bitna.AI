<template> 
    <div id="modelMenu"> 
        <Header />

        <header>Model Customization Menu</header> 

        <div id="menuMenus">
            <div><Layers /></div>
            <div><DatasetsMenu /></div>
            <div><ModelConfig /></div>
        </div>

        <div id="modelRun">
            <Button name="Run!" color="green" @click="runModel()" /> 
        </div>
    </div>
</template> 

<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import ModelConfig from '../components/Submenus/ModelConfig.vue'
import Layers from '../components/Submenus/Layers.vue'
import DatasetsMenu from '../components/Submenus/DatasetsMenu.vue'


export default {
    name: 'Model', 
    components: {
        Header, Button, Layers, ModelConfig, DatasetsMenu
    },
    methods: {
        runModel() {

        }
    }
}
</script>

<style>

div#modelMenu {
    justify-content: center;
    align-items: center;
}

div#menuMenus {
    display: flex; 
    justify-content: center;
    align-items: center;
}

div#modelRun {
    justify-content: center;
    align-items: center;
}

</style>