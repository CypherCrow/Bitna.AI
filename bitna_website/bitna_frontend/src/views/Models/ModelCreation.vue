<template>
    <div>
        <Header />
        <header>Create Your Model</header> 

        <div id="creation"> 
            <label for="layers">Layers</label>
            <input type="number" id="layers" name="layers" step="1" />
        </div> 

        <div id="buttons">
            <Button name="Create!" color="green" /> 
            <Button name="Discard" color="red" /> 
        </div> 
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Button from '../../components/Button.vue'

export default {
    name: 'ModelCreation', 
    components: {
        Header, Button, 
    }
}
</script>

<style scoped> 

#buttons {
    display: flex; 
    flex-direction: row;
    justify-content: center;
}

header {
    margin: 40px 0px;
    font-size: 30px;  
}

</style>