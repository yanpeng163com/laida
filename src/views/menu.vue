<template>
  <el-menu unique-opened default-active="2" class="el-menu-vertical-demo" background-color="#18CFB3"
    text-color="#fff" active-text-color="#18CFB3" :collapse="isCollapse" >
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
                index: "/personal/shareyes",
                name: "申请的API"
              },
              {
                index: "/personal/applicationdata",
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
        ]
      }
    },
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
