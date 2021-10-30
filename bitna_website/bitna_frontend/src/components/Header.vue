<template>
    <div id="header"> 
        <div id="headerContent">
            <p id="appName">Bitna.AI</p>

            <div id="nav"> 
                <router-link to="/">Home</router-link>
                <router-link to="/ds">Datasets</router-link>
                <router-link to="/models">Models</router-link>
                <router-link to="/tutorial">Tutorial</router-link>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped> 

div#header {
    border-bottom: 2px solid #FF5349; 
    width: 100%; 
}

div#headerContent {
    display: flex; 
    padding-left: 45px;
    justify-content: flex-start;
    align-items: center; 
}

p#appName {
    /* color: white; */ 
    color: #FF5349; 
    float: left; 
    margin-right: 30px; 
    font-size: 30px;
}

#nav {
    margin: 10px; 
}

a {
    text-decoration: none;
    color: black;
    transition-duration: 0.3s;
    font-size: 20px;
    margin-left: 5px; 
    margin-right: 25px;  
    font-weight: 'bold';
}

a:hover {
    text-decoration: none;
    color: #FF5349; 
}

</style> 
