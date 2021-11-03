<template>
    <div>
        <Header /> 

        <header>Upload Dataset</header>

        <div id="creation"> 
            <h4>Upload Dataset</h4>
            <h5>(Must be in .csv format)</h5> 
            <input type="file" />
            <!-- <label>File
                <input type="file" @change="handleFileUpload( $event )" /> 
            </label> --> 

            <h4>Dataset Name</h4>
            <input type="text" v-model="form.name" @change="handleName( $event )" /> 
        </div> 

        <div id="buttons">
            <Button name="Upload" color="green" @click="submit()" /> 
            <Button name="Discard" color="red" @click="clear()" /> 
        </div> 
    </div>
</template>

<script>
import axios from 'axios'

import Header from '../../components/Header.vue'
import Button from '../../components/Button.vue'

export default {
    name: 'DatasetUpload',
    components: {
        Header, Button
    }, 
    data(){
        return {
            form: {
                file: undefined, 
                username: ''
            }
        }
    },
    methods: {
        handleFileUpload( event ){
            this.file = event.target.files[0]; 
        }, 
        handleUsername( event ){
            this.username = event.target.username;
        },
        submit(){
            axios.post('/api/datasets/', this.form)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }, 
        clear(){
            this.form.file = ''
            this.form.name = ''
        }
    }
}
</script>

<style scoped>

div#creation {
    margin: 3.5em 0;
}

input {
    min-width: 300px; 
    min-height: 20px;
    border-radius: 5px; 
    border: 2px solid #FF5349;
    padding: 5px; 
}
</style>