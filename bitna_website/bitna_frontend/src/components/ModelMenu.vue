<template>
    <div id="modelEditMenu"> 
        <div id="datasetsPart">
            <select id="datasets" name="datasets"> 
                <option value="stub">Stub</option>
            </select> 
        </div> 

        <div id="customization"> 
            <h4>Layers</h4>
            <div> 
                <label>Linear</label> <!-- Incremental <select> -->
                <label>ReLU</label>
                <label>Flatten</label>
            </div> 
        </div>
    </div> 
</template>

<script>
import ModelConfig from './Submenus/ModelConfig.vue'
import Layers from './Submenus/Layers.vue'
import DatasetsMenu from './Submenus/DatasetsMenu.vue'

export default {
    name: 'ModelMenu', 
    component: {
        ModelConfig, Layers, DatasetsMenu
    }
}
</script>

<style scoped> 

</style> 