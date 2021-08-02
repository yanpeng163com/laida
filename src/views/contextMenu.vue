<template>
  <div>
    <el-button @contextmenu.native="contextmenu">1</el-button>
    <div >右键点击我弹出菜单</div>
    <vue-context-menu :contextMenuData="contextMenuData" @delRight="delRight" @delLeft="delLeft" @delOhter="delOhter"
      @closeAll="closeAll"></vue-context-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        contextMenuData: {
          // the contextmenu name(@1.4.1 updated)
          menuName: "demo",
          // The coordinates of the display(菜单显示的位置)
          axis: {
            x: null,
            y: null
          },
          // Menu options (菜单选项)
          menulists: [{
              fnHandler: "delRight", // Binding events(绑定事件)
              icoName: "fa fa-home fa-fw", // icon (icon图标 )
              btnName: "关闭右侧" // The name of the menu option (菜单名称)
            },
            {
              fnHandler: "delLeft",
              icoName: "fa fa-home fa-fw",
              btnName: "关闭左侧"
            },
            {
              fnHandler: "delOhter",
              icoName: "fa fa-home fa-fw",
              btnName: "关闭其他"
            },
            {
              fnHandler: "closeAll",
              icoName: "fa fa-home fa-fw",
              btnName: "关闭全部"
            }
          ]
        }
      }
    },
    // components:{
    //     VueContextMenu
    // },
    methods: {
      contextmenu(e) { //右键单击事件
        e.preventDefault();
        var x = e.clientX;
        var y = e.clientY;
        // Get the current location
        this.contextMenuData.axis = {
          x,
          y
        };
      },
      delRight() {},
      delLeft() {},
      delOhter() {},
      closeAll() {},
    },
  }

</script>
