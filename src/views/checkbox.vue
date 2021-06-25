<template>
  <div>

  <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city.label}}</el-checkbox>
    </el-checkbox-group>
    <el-checkbox-group v-if="list.apis && list.apis.length > 0" v-model="chekedApis">
        <el-checkbox v-for="api in list.apis" :key="api.id" :label="api.id" @change="(value)=>onChange(value, list.id)">{{ api.label }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
     const cityOptions = ['上海', '北京', '广州', '深圳'];
     import axios from 'axios'
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        list:''
      };
    },
    mounted() {
        axios.get('https://www.fastmock.site/mock/161ebe54575d38f52c68f800705e8e25/_shift/getMenu').then(res=>{
            console.log(res)
            this.cities=res.data

            const apiIds=[]
            res.data.forEach(permissionId => {
                if (!this.checkedPermissions.includes(permissionId)) {
                    apiIds.push(permissionId)
                }
            })
            this.list=apiIds
        })
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };

</script>
