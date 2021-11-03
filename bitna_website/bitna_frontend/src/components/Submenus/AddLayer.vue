<template>
    <div> 
        <h3>Layer Addition</h3>

        <div class="linkSection"> 
            <Button name="Add" color="green" /> 
            <Button name="Discard" color="red" />
        </div> 
    </div>
</template>

<script>
import Button from '../Button.vue'

export default {
    name: 'AddLayer',
    components: {
        Button, 
    }
}
</script>

<style scoped>

</style>