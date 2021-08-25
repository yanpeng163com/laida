<template>
    <div style='width:100%;height:800px;border:1px solid yellow;'>
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1步骤 1步骤 1步骤 1步骤 1步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
            <el-step title="步骤 4"></el-step>
            <el-step title="步骤 5"></el-step>
            <el-step title="步骤 6"></el-step>
            <el-step title="步骤 7"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
    methods: {
      next() {
        if (this.active++ > 6) this.active = 0;
      }
    }
    
}
</script>