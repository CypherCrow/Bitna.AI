<template>
    <div>
        <div>   
            <Button :name="Apply" :color="green" /> 
        </div> 
    </div>
</template>

<script>
import Button from '../../components/Button.vue'

export default {
    name: 'Hyperparameters', 
    components: {
        Button, 
    }
}
</script>

<style scoped>

</style>