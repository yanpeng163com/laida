<template>
    <div>
        <button @click="pdfOpen">dianji</button>
        <el-dialog
            title="文件预览"
            :visible.sync="dialogVisible"
            width="50%"
            :fullscreen="isFull"
            >
                <div v-if="!isFull" ref="printContent">
                    <Pdf
                    v-for="i in numPages"
                    :key="i"
                    :src="pdfUrl"
                    :page="i"
                    />
                </div>
                <iframe v-if="isFull" :src="ifUrl" frameborder="0" style="width: 100%; height: 700px"></iframe>
        </el-dialog>
    </div>
</template>
<script>
import Pdf from 'vue-pdf'
export default {
    components: {
        Pdf
    },
    data() {
        return {
            isShow:false,
            pdfUrl:'',
            url:'/test1,pdf',
            isFull:false,
            dialogVisible:false,
            numPages:undefined

        }
    },
    methods: {
        pdfOpen(){
            //this.isShow=true
            this.isFull=true
            this.dialogVisible=true
            this.ifUrl='/static/test1.pdf'
            var url='http://localhost:8080/static/test1.pdf'
            this.pdfUrl = Pdf.createLoadingTask(url)
            this.pdfUrl.promise.then(pdf => {
                console.log(pdf)
                this.numPages = pdf.numPages
            })
            // this.$refs.myPdf ='../assets/保理融资平台注册协议.pdf'
        }
    },
}
</script>
<style lang="">
    
</style>