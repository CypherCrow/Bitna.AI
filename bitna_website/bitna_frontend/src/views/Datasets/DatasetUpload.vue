<template>
    <div>
        <Header /> 

        <header>Upload Dataset</header>

        <div id="creation"> 
            <h4>Upload Dataset</h4> 
            <input type="text" v-model="file" />
            <!-- <label>File
                <input type="file" @change="handleFileUpload( $event )" /> 
            </label> --> 

            <h4>Username</h4>
            <input type="text" v-model="username" @change="handleUsername( $event )" /> 
        </div> 

        <div id="buttons">
            <Button name="Create!" color="green" @click="submitFile()" /> 
            <Button name="Discard" color="red" /> 
        </div> 
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Button from '../../components/Button.vue'

export default {
    name: 'DatasetUpload',
    components: {
        Header, Button
    }, 
    data(){
        return {
            file: '', 
            username: ''
        }
    },
    methods: {
        handleFileUpload( event ){
            this.file = event.target.files[0]; 
        }, 
        handleUsername( event ){
            this.username = event.target.username;
        },
        submitFile(){

        }
    }
}
</script>

<style scoped>

div#creation {
    margin: 3.5em 0;
}

div#buttons {
    margin-top: 3.5em; 
    display: flex; 
    flex-direction: row;
    justify-content: center;
}

</style>