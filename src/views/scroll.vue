<template>
    <div>
        <div class="back_add">
            <div class="threeImg" style='display:flex;'>
                <div class="iconleft"  @click="zuohua">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div class="Containt">
                    <ul :style="{'left':calleft + 'px','transition':calleft=='0'?'':'2s'}"  v-on:mouseover="stopmove()" v-on:mouseout="move()">
                        <li v-for="(item,index) in superurl" :key="index">
                             <div style='border:1px solid red;width:100%;height:120px;'>{{item.name}}</div>
                        </li>
                    </ul>
                </div>
                <div class="iconright" @click="youhua">
                        <i class="el-icon-arrow-right" ></i>
                    </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {		//price不是很重要，重要的是url
            calleft:0 , //calleft是整个数据的偏移量
            superurl: [
                {
                    name: '业务系统',
                    num: '8'
                },
                {
                    name: '存储总量',
                    num: '1000'
                },
                {
                    name: '结构化记录数',
                    num: '345'
                },
                {
                    name: '非结构化数据量',
                    num: '234234'
                },
            ],

        }
    },
    created() {
        this.move()
    },
    methods: {
        //移动
        move() {
            this.timer = setInterval(this.starmove, 2500)
        },
        //开始移动
        starmove() {
        	// 340是根据自己图片的大小自己设置的，点击一下整体向左平移多少
            this.calleft -= 340;
            if (this.calleft < -(this.superurl.length-3)*340) {
                this.calleft = 0
            }
        },
        //鼠标悬停时停止移动
        stopmove() {
            clearInterval(this.timer)
        },
        //点击按钮左移
        zuohua() {
            this.calleft -= 340;
            if (this.calleft < -(this.superurl.length-3)*340) {
                this.calleft = 0
            }
        },
        //点击按钮右移
        youhua() {
            this.calleft += 340;
            if (this.calleft > 0) {
                this.calleft = -340
            }
        },
    },

}
</script>
<style scoped>
/*超链接图片*/
 
#divAdd {
    background-color: #ededed;
    /*width: 100%;*/
    /*min-width: 1200px;*/
    width: 1000px;
    margin: 0px auto;
}
 
.divAdd-con {
    margin: 0px auto;
    width: 1000px;
    overflow: auto;
    padding: 30px 0px;
}
 
.divAdd-con img {
    float: left;
}
 
.indexrt {
    margin: 0px 40px;
}
 
.divAddleft img {
    float: left;
    margin-bottom: 7px;
}
 
.divAddleft {
    float: left;
    display: inline;
    width: 370px;
}
 
.divAddrt {
    float: right;
    display: inline;
    margin-top: 7px;
}
 
.back_add {
    background-color: #ededed;
}
 
.divAdd-con img {
    border: none;
}
 
 
a:focus,
a:hover {
    color: #23527c;
}
 
 
.threeImg {
    height: 158px;
    background: #ededed;
    border-bottom: 3px solid #4679B2;
    min-width: 1000px;
}
 
.threeImg .Containt ul {
    margin: 0 auto;
    width: 2400px;
    position: absolute;
    left: 0px;
    cursor: pointer;    
    height: 100%;
    padding:0;
}
 
.threeImg .Containt ul li {
    width: 300px;
    margin-right: 40px;
    margin-top: 10px;
    float: left;
}
 
.threeImg .Containt ul li img {
    height: 128px;
    width: 100%;
}
 
.Containt {
    position: relative;
    width: 86%;
    height: 160px;
    overflow: hidden;
    margin: 0 auto;
}
 
.iconleft {
    position:relative ;
    width: 20px;
    height: 128px;
    top: 10px;
    z-index: 99999;
    
    background-color: #ddd;
    vertical-align: middle;
}
.iconleft i{
    position: absolute;
    top:50%;
}
 
.iconright {
    position: relative;
    right: 0;
    top: 70px;
    background-color: #ddd;
    width: 20px;
    height: 128px;
    top: 10px;
    z-index: 99999;
    background-color: #ddd;
    vertical-align: middle;
}
.iconright i{
    position: absolute;
    top:50%;
}
</style>
