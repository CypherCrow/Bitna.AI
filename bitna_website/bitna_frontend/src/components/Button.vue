<template>
    <div> 
        <button :style="{ background: color }" class="bitnaButton">{{ name }}</button>
    </div> 
</template>

<script> 

export default {
    name: "Button", 
    props: {
        name: String, 
        color: String, 
    }, 
    data() {
        return {
            '--buttonColor': this.color
        }
    }
}

</script> 

<style scoped> 

.bitnaButton {
    border-radius: 10px; 
    border: none;
    color: white;
    margin: 14px 12px; 
    padding: 20px 40px; 
    font-size: 20px; 
    transition-duration: 0.4s; 
}

.bitnaButton:hover {
    background: white;
    color: black;
    border: 1px var(--buttonColor) solid; 
}

</style> 