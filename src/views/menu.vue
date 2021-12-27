<template>
  <div>
    <el-menu unique-opened default-active="2" class="el-menu-vertical-demo" background-color="#18CFB3"
    text-color="#fff" active-text-color="#18CFB3" :collapse="isCollapse" router>
    <template v-for="one in items">
      <template v-if="one.subs">
        <el-submenu :index="one.index" :key="one.index">
          <template slot="title">
            <i :class="one.icon"></i>
            <span>{{ one.name }}</span>
          </template>
          <template v-for="two in one.subs">
            <template v-if="two.children">
              <el-submenu :key="two.index" :index="two.index">
                <template slot="title">
                  <span>{{ two.name }}</span>
                </template>
                <template v-for="(children, index) in two.children">
                  <el-menu-item :key="index" @click="toApi(children.index, two.shibie)">{{ children.name }}
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item-group :key="two.index">
                <el-menu-item :index="two.index">{{
                          two.name
                        }}</el-menu-item>
              </el-menu-item-group>
            </template>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="one.index" :key="one.index">
          <template>
            <i :class="one.icon"></i>
            <span>{{ one.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </template>
    </el-menu>
    <div v-html="list" style="text-align: justify;width:50%;">

    </div>
  </div> 
  
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        items: [{
            icon: "el-icon-s-open",
            index: "/personal/account",
            name: "我的账户"
          },
          {
            icon: "el-icon-rank",
            index: "2",
            name: "我的申请",
            subs: [{
                index: "/graph",
                name: "申请的API"
              },
              {
                index: "/global-view-web/index/graph3",
                name: "申请的数据"
              }
            ]
          },
          {
            icon: "el-icon-date",
            index: "3",
            name: "我的收藏",
            subs: [{
                index: "/personal/collectionyes",
                name: "收藏的API"
              },
              {
                index: "/personal/collectionresources",
                name: "收藏的资源"
              }
            ]
          },
          {
            icon: "el-icon-setting",
            index: "/personal/require-ment",
            name: "我的需求"
          }
        ],
        list:"<p style=\"text-align:left; word-break: break-all; margin-bottom: 0px; padding: 0px; text-indent: 0em;\"><font color=\"#333333\" face=\"微软雅黑, Microsoft YaHei\"><span style=\"font-size: 16px; background-color: rgb(255, 255, 255);\">&nbsp; &nbsp; &nbsp; &nbsp; 通过上线变电站在线智能巡视系统，通过在变电站部署在线智能巡视系统，优化高清摄像头布点，应用图像智能识别技术，实现机器替代人工巡视，将传统的“例行巡视、专业巡视、熄灯巡视、特殊巡视、全面巡视”等五类巡视简化为“机器全时段智能巡视+人工全面巡视”，可替代变电“五通”1725项人工巡视项目中的1440项，人工巡视工作量减少80%以上，大幅提升巡视效率，有效避免巡视过程中设备故障造成的人身伤害事件。</span></font><br></p>"
      }
    },
    methods: {
      getInfo(){
        var data='123';
        console.log(this.$store.state.user.menuList)
        this.$store.dispatch('user/setMenus', data)
        setTimeout(()=>{
          console.log(this.$store.state.user.menuList)
        },5000)


        
      }

    },
    mounted(){
      this.getInfo()
    }
  }

</script>
<style>
    .el-menu-item.is-active{
        color:#fff !important;
    }
  .el-menu-item-group ul>.el-menu-item {
    background: #fff !important;
    color:#000 !important;
  }
  .el-menu-item-group ul>.el-menu-item.is-active{
      color:#18cfb3 !important;
  }
    .el-menu-item-group__title{
        background:#fff;
    }
</style>
