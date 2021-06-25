<template>
    <div>   
        <el-button @click="open">按钮</el-button>
        <!--<el-dialog
            title=""
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
                <template slot="title" style=''>
                    <div>
                        <i class="el-icon-edit-outline"></i>
                        <span class="title-text">数据详情</span>
                    </div>
                    <div class="button-right">
                        <i class="el-icon-minus" @click="samll"></i>
                        <i class="el-icon-full-screen" @click="big($event)"></i>
                    </div>
                </template>
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>-->
        <el-dialog v-dialogDrag :visible.sync="dialogVisible">
            <template slot="title" style=''>
                    <div>
                        <i class="el-icon-edit-outline"></i>
                        <span class="title-text">数据详情</span>
                    </div>
                    <div class="button-right">
                        <i class="el-icon-minus" ></i>
                        <i class="el-icon-full-screen" ></i>
                    </div>
            </template>
            <span>这是一段信息</span>
        </el-dialog>
    </div>
    
</template>
<script>

export default {
    data() {
        return {
            dialogVisible:false,
        }
    },
    // components:{
    //     dialogDrag
    // },
    methods: {
        open(){
            this.dialogVisible=true
        },
        handleClose(){}
    },
}
</script>
<style lang="">
    .el-dialog__header{
        position:relative;
        display: flex;
        justify-content: start;
        align-items: center;
        line-height: 21px;
    }
    .button-right{
        position:absolute;
        right:40px;
        top:17px;
    }
</style>