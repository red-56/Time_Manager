<template>
    <div>
       
        <h1 @click="getUser()">Cliquez pour voir les infos du USER </h1>
         <p>{{info}}</p>
         
         
         
    </div>
</template>

<script>

    import axios from "axios";
    
    export default {

        name: 'user',
        data() {
            return {
                info: null
            }
        },
       
        methods: {
            createUser() {
                
            },
            updateUser(){
                
            },
            getUser(){
                
                axios
                .get(`http://localhost:3000/api/users/`+this.$route.params.id)
                .then(response => (this.info = [response.data.username,response.data.email]))

            },
            deleteUser(){
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>