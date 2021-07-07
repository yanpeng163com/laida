<template>
  <div>
    <div id="fill" style='width:400px;height:400px;'></div>

    <canvas id="mycanvas"></canvas>
  </div>
</template>
<script>
//   import * as echarts from 'echarts/core';
   
  export default {
    data() {
      return {

      }
    },
    methods: {
      fill() {
        var containers = this.$echarts.init(document.getElementById('fill'));
        var options = {
          series: [{
            type: 'liquidFill',
            data: [0.35555],
            radius: '70%',
            outline: {
              show: false
            },
            backgroundStyle: {
              color: 'white', //背s景颜色
            },
          }]
        }
        containers.setOption(options);
      },
      // drawArrow(ctx, fromX, fromY, toX, toY,theta = 30,headlen = 10,width = 1,color = '#333') {

        /*
          // ctx：Canvas绘图环境
        // fromX, fromY：起点坐标（也可以换成 p1 ，只不过它是一个数组）
        // toX, toY：终点坐标 (也可以换成 p2 ，只不过它是一个数组)
        // theta：三角斜边一直线夹角
        // headlen：三角斜边长度
        // width：箭头线宽度
        // color：箭头颜色
        */
      drawArrow(ctx, fromX, fromY, toX, toY,theta ,headlen ,width,color ) {
        var theta = theta || 30;
        var headlen = headlen || 10;
        var width = width || 1;
        var color = color || '#';
        var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
        var angle1 = (angle + theta) * Math.PI / 180;
        var angle2 = (angle - theta) * Math.PI / 180;
        var topX = headlen * Math.cos(angle1);
        var topY = headlen * Math.sin(angle1);
        var botX = headlen * Math.cos(angle2);
        var botY = headlen * Math.sin(angle2);
        ctx.save();
        ctx.beginPath();
        var arrowX, arrowY;
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        arrowX = toX + topX;
        arrowY = toY + topY;
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(toX, toY);
        arrowX = toX + botX;
        arrowY = toY + botY;
        ctx.lineTo(arrowX, arrowY);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.restore();
      },
      getCanvas(){
        var canvas = document.querySelector('#mycanvas');
        console.log(canvas)
        var ctx = canvas.getContext('2d');
        // this.drawArrow(ctx, 150, 100, 400,100,30,30,10,'#f36');
        this.drawArrow(ctx,0, 100, 150,100,20,20,10,'#f36');
      }
    },
    mounted() {
        this.fill();
        this.getCanvas();
    },

  }

</script>
