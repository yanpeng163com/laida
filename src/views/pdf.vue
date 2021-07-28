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

        <canvas id="main" width='800' height='800'></canvas>
         <img src="../../static/img/b.png" id="img">
    </div> 
</template>
<script>
import Pdf from 'vue-pdf'
import { fabric } from 'fabric'
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
        },
        async getInfo(){
            let self = this
            var canvas =new fabric.Canvas('main');
            var imgElement = document.getElementById('img');//声明我们的图片     
            var imgInstance = new fabric.Image(imgElement,{  //设置图片位置和样
                width:imgElement.width,
                height:imgElement.height,
                selectable: false,
                hasBorders: false,
                hasControls: false,
                evented: false,
                objectCaching: false
            });

            var res=await canvas.add(imgInstance);
            console.log(res)
            // 
            var str=[{"x":438.5,"y":169},{"x":592.5,"y":170},{"x":584.5,"y":281},{"x":467.5,"y":314},{"x":412.5,"y":255}];
            // var arr=JSON.parse(JSON.stringify(str))
            // console.log(str)
            var polygon=new fabric.Polygon(str, {
                fill:'',
                stroke: 'red',
                width: 600,
                height: 600,
                selectable: false,
                hasBorders: false,
                hasControls: false,
                evented: false,
                objectCaching: false
            })
            
            setTimeout(()=>{
                 canvas.add(polygon);
            },1000)
           
            // canvas.add(polygon);
        }
    },
    mounted() {
        this.getInfo();
    },
}
</script>
<style lang="">
    
</style>