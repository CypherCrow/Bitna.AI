<template>
    <div id="card">
        <h3>{{ title }}</h3>

        <div id="content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String, 
        content: String
    }
}
</script>

<style scoped> 

div#card {
    border: 2px solid #FF5349; 
    border-radius: 10px;
    justify-content: center; 
    min-width: 500px;
    min-height: 300px;
    width: 550px;
    height: 350px;
    margin: 20px;
    transition-duration: 0.3s; 
}

div#card:hover {
    background: #FF5349; 
    color: white;
}

div#card h3 {
    font-size: 30px; 
}

div#content {
    margin: 60px 10px;
    padding: 0px 10px; 
    font-size: 18px;  
}

</style> 