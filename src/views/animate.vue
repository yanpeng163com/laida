<template>

</template>
<script>
    import axios from 'axios'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        home(){
            // axios.get('http://161.189.173.220:5000/api/Platform/Alarms/GetStatisticsByLevel',{
            //     headers:{
            //         "Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYSI6InN1cGVyYWRtaW4iLCJubiI6Iui2hee6p-euoeeQhuWRmCIsInRlbmFudGlkIjoiMCIsInJlIjoiMTYyOTk3NDYyNyIsIm5iZiI6MTYyOTg4MTAyNywiZXhwIjoxNjI5ODg4MjI3LCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAifQ.h-raGd9WZTYddKcUgn-2YqMsO5aflNOCOWtchH4IqWw'
            //     }
            // }).then(res=>{
            //     console.log(res)
            // })
            axios.get('https://www.fastmock.site/mock/161ebe54575d38f52c68f800705e8e25/_shift/getMenu').then(res=>{
                console.log(res)
            })
            axios.get('peng/Platform/Alarms/GetStatisticsByLevel',{
                headers:{
                    "Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYSI6InN1cGVyYWRtaW4iLCJubiI6Iui2hee6p-euoeeQhuWRmCIsInRlbmFudGlkIjoiMCIsInJlIjoiMTYyOTk3NDYyNyIsIm5iZiI6MTYyOTg4MTAyNywiZXhwIjoxNjI5ODg4MjI3LCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAifQ.h-raGd9WZTYddKcUgn-2YqMsO5aflNOCOWtchH4IqWw'
                }
                }).then(res=>{
                console.log(res)
            })
        }
    },
    mounted(){
        this.home();
    }
}
</script>