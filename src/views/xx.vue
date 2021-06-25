<template>
  <div>
    <div v-if='condition.length'>
      <div>
        <span>已选中:</span>
        <span v-for='(item,index) in condition' class='active' :key="index">{{item.name}}&nbsp;|&nbsp;</span>
      </div>
    </div>
    <div v-if='category.length'>
      <div class='nav' v-for='(items,index) in category' :key="index">
        <div class='mutil-query-title' v-if='items.name' :key="items.id">
          {{items.name}}
          <span style='margin-left: 20px;'
            @click='allIn(index)'>全选</span>|<span @click='remove(index)'>清空</span>
        </div>
        <ol v-if='items.items.length'>
          <li v-for='(item,key) in items.items' :key="key">
            <span :class="{'active':item.active}" @click='handle(index,key)' :key='item.id'>{{item.name}}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
var count=0;
  export default {
    data() {
      return {
        normalData: [{
            url: require('../assets/1.png'),
            name: 'img1'
          },
          {
            url: require('../assets/2.png'),
            name: 'img2'
          },
          {
            url: require('../assets/3.png'),
            name: 'img3'
          },
          {
            url: require('../assets/4.png'),
            name: 'img4'
          },
          {
            url: require('../assets/5.png'),
            name: 'img5'
          },
          {
            url: require('../assets/6.png'),
            name: 'img6'
          }
        ],
        changJingList: [{
            name: '标签1'
          },
          {
            name: '标签2'
          },
          {
            name: '标签3'
          },
          {
            name: '标签4'
          },
          {
            name: '标签5'
          },
          {
            name: '标签6'
          },
          {
            name: '标签7'
          },
          {
            name: '标签8'
          },
          {
            name: '标签9'
          },
          {
            name: '标签10'
          },
          {
            name: '标签11'
          },
          {
            name: '标签12'
          },
          {
            name: '标签13'
          },
          {
            name: '标签14'
          },
        ],
        lastItemIndex: '',
        itemIndex: '',
        config: {
          height: null
        },
        step: 0,
        liIndex: 0,
        category: [{
            name: '品牌',
            items: [{
                name: '联想',
                active: false
              },
              {
                name: '小米',
                active: false
              },
              {
                name: '苹果',
                active: false
              },
              {
                name: '东芝',
                active: false
              }
            ]
          },
          {
            name: 'CPU',
            items: [{
                name: 'intel i7 8700K',
                active: false
              },
              {
                name: 'intel i7 7700K',
                active: false
              },
              {
                name: 'intel i9 9270K',
                active: false
              },
              {
                name: 'intel i7 8700',
                active: false
              },
              {
                name: 'AMD 1600X',
                active: false

              }
            ]
          },
          {
            name: '内存',
            items: [{
                name: '七彩虹8G',
                active: false
              },
              {
                name: '七彩虹16G',
                active: false
              },
              {
                name: '金士顿8G',
                active: false
              },
              {
                name: '金士顿16G',
                active: false
              }
            ]
          },
          {
            name: '显卡',
            items: [{
                name: 'NVIDIA 1060 8G',
                active: false
              },
              {
                name: 'NVIDIA 1080Ti 16G',
                active: false
              },
              {
                name: 'NVIDIA 1080 8G',
                active: false
              },
              {
                name: 'NVIDIA 1060Ti 16G',
                active: false
              }
            ]
          }
        ],
        condition: []

      }
    },
    methods: {

      handle:function(index,key){
        console.log(index)
        console.log(key)
        var me=this;
        var item=this.category[index].items;
        item.filter(function(v,i){
          if(i==key){
            v.active=true;			
            console.log(me.condition)
            me.condition.filter(function(v2,i){
              if(v.name==v2.name){
                me.condition.splice(i,1);
                count--;
              }
            });					
            me.$set(me.condition,count++,v);
          }
			});
			
		},
		remove:function(index){
			var item=this.category[index].items;
			item.filter(function (v1,key) {
				v1.active=false;
				this.condition.filter(function(v2,i){
					if(v1.name==v2.name){
						this.condition.splice(i,1);
						count--;
					}
				});
			});
		},
		allIn:function(index){
			var item=this.category[index].items;
			item.filter(function (v,key) {
				v.active=true;
				this.condition.filter(function(v2,i){
					if(v.name==v2.name){
						this.condition.splice(i,1);
						count--;
					}
				});					
				Vue.set(this.condition,count++,v);
			});			
		}

    },
    computed: {
      ulStyle() {
        return `height: ${this.config.height}px`
      }
    },
    mounted() {

    },
  }

</script>
<style>
  .scrollView {
    width: 78px;
    height: 280px;
    overflow-y: scroll;
  }

  .scrollView::-webkit-scrollbar {
    display: none;
  }

  .scrollView .chooseImgItem {
    margin-left: 8px;
    height: 90px;
    width: 70px;
    border-radius: 4px;
    overflow: hidden;
  }

  .scrollView .chooseImgItem .img {
    width: 60px;
    height: 60px;
  }

  .scrollView .chooseImgItem:first-child {
    /* margin-left: 15px; */
  }

  .scrollView .chooseImgItem:last-child {
    /* margin-right: 15px; */
  }

</style>
<style>
  .liList {
    height: 40px;
    line-height: 40px;
    font-weight: 200;
    font-size: 20px;
  }

</style>
<style>
  .scrolList {
    position: relative;
    overflow: hidden;
  }

  .scrolList .top {
    position: absolute;
    z-index: 66;
    top: 0;
    height: 0.8rem;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, red 50%);
    ;
  }

  .scrolList .bottom {
    position: absolute;
    bottom: 0;
    height: 0.8rem;
    width: 100%;
    z-index: 66;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, red 50%);
    ;
  }

  .scrolList .ul {
    margin-top: 0.6rem;
  }

  .scrolList .li {
    display: flex;
    transform: translate(0);
    height: 0.8rem;
    font-size: 0.4rem;
    text-align: left;
    line-height: 0.8rem;
  }

  .scrolList .li .item1 {
    flex: 1;
  }

  .scrolList .li .item2 {
    flex: 3;
  }

  .scrolList .li .item3 {
    flex: 3;
  }

  .anim {
    transition: all 0.5s linear;
  }

</style>
