<template>
  <div id='main' class="sw-container">
      <div  class="sw-winners" v-if="winnerslist.length>0">
        <div ref='rowleft' class="rowleft">
          <div class="sw-winners-text"
           v-for="(item, index) in winnerslist" 
           :key="index" >
            <!-- <img class="sw-winners-header" :src="item.user_info.head_img" alt=""/> -->
            <span>{{item}}</span></div>
        </div>
      </div>
    <div id="box" >
    <div v-show="!start" v-for="(item, index) in list" :key="index" @click= "draw(item,index)">
      <div v-if="index != 4" class="cell">
        <div class="cell-text" >{{item.prize_name}}</div>
        <img  class="cell-img" :src="item.prize_img" alt="">
      </div>
      <img v-else class="cell" src="../assets/go.svg" alt="">
    </div>
    <div v-show="start" v-for="(item, index) in list" :key="index+'11'" @click= "draw(item,index)">
      <div v-if="index == 0 " class="cell cell0">
        <img class="cell first" :class=" {rotate:activeIndex == 0 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 1 " class="cell cell1">
        <img  class="cell first" :class="{rotate:activeIndex == 1 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 2 " class="cell cell2">
        <img  class="cell first" :class="{rotate:activeIndex == 2 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 3 " class="cell cell3" >
        <img  class="cell first" :class="{rotate:activeIndex == 3 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 4 ">
        <img  class="cell" src="../assets/go.svg" alt="">
      </div>
      <div v-if="index == 5 " class="cell cell5"  >
        <img  class="cell first" :class="{rotate:activeIndex == 5 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 6 "  class="cell cell6" >
        <img class="cell first" :class="{rotate:activeIndex == 6 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 7 "  class="cell cell7"  >
        <img  class="cell first" :class="{rotate:activeIndex == 7 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
      <div v-if="index == 8 "  class="cell cell8"  >
        <img  class="cell first" :class="{rotate:activeIndex == 8 || logoback}" src="../assets/logoback.png" alt="">
        <div class="cell second" >
            <div class="cell-text" >{{item.prize_name}}</div>
            <img  class="cell-img" :src="item.prize_img" alt="">
        </div>
      </div>
    </div>
  </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      :modal = "false"
      :closeOnClickModal = "false">
      <div class="sw-modal">
        <div class="sw-modal-title">{{alertTitle}}</div>
        <span class="sw-modal-text">{{alertprize_name}}</span>
        <img class="sw-modal-image" :src="prize_img" alt=""/>
        <div class="sw-modal-btn" @click="closeModal" >我知道了</div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
/**
 * 抽奖页面
 */


export default {
  name: "luckdraw",
  components: {
  },
  computed: {

  },
  data() {
    return {
      winnerslist:[
          'XX获得了 iPhoneX','XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX','XX获得了 iPhoneX',
            'XX获得了 iPhoneX'
      ], 
      drawArr:[],//抽奖结果数组
      drawResult:{}, //抽奖结果
      list:[ {
                "award_id": 1,
                "prize_name": "未中奖",
                "prize_img": "https://cdn.shopecat.com/20190425/4dd79cc7e9574ae776d717f672cf5bef71cb80cb.png"
            },
            {
                "award_id": 2,
                "prize_name": "提现增长券",
                "prize_img": "https://cdn.shopecat.com/20190425/150a68ac62848190cb03d9a89027fba58b33f265.png"
            },
            {
                "award_id": 3,
                "prize_name": "提现增长券",
                "prize_img": "https://cdn.shopecat.com/20190425/a07a0b68435f81b010bb936854fb0787b03e2e8f.png"
            },
            {
                "award_id": 4,
                "prize_name": "0.1元红包",
                "prize_img": "https://cdn.shopecat.com/20190425/17bce69d710f5adce49752ad6720467c5bf20e09.png"
            },
            {
                "award_id": 5,
                "prize_name": "0.3元红包",
                "prize_img": "https://cdn.shopecat.com/20190425/17bce69d710f5adce49752ad6720467c5bf20e09.png"
            },
            {
                "award_id": 5,
                "prize_name": "0.3元红包",
                "prize_img": "https://cdn.shopecat.com/20190425/17bce69d710f5adce49752ad6720467c5bf20e09.png"
            },
            {
                "award_id": 6,
                "prize_name": "潮流女包",
                "prize_img": "https://cdn.shopecat.com/20190425/77287fc0a703f627e504cd772f9a7a4ec57b8382.png"
            },
            {
                "award_id": 7,
                "prize_name": "天猫精灵",
                "prize_img": "https://cdn.shopecat.com/20190425/0f5b37b2dfb7c98a604b3511eda79c84022ce039.png"
            },
            {
                "award_id": 8,
                "prize_name": "iPhone Xs Max",
                "prize_img": "https://cdn.shopecat.com/20190507/febce055dba2def1337caaf31ca6aa3b8a640dfe.png"
            }], //开始抽奖前奖品数组
      start:false, // 是否开始抽奖
      activeIndex: null, // 翻牌的奖项下标
      popupVisible:false, //中奖弹窗显示
      popupVisible2:false, //复制分享弹窗显示
      popupVisible4:false, //弹窗提示
      alertTitle:'', //弹窗标题是否中奖
      alertText:'卡牌翻转乱序后，请随机抽取',
      alertprize_name:'您将获得', // 弹窗提示奖品
      prize_img:'', //弹窗奖品图片
      logoback:false, // 是否展示背面 logo
      isDrawing: false, // 请求抽奖中
      times:5 //剩余游戏次数
    };
  },
  created() {
  },
  mounted() {
        //移动端设置 rem  基准大小
        const baseSize = 16
        // 设置 rem 函数
        const scale = document.documentElement.clientWidth / 375
        document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';

        this.$nextTick(()=>{
            let time = this.winnerslist.length*2+ 's'; //动画时长
            this.$refs.rowleft.style.animation = 'rowleft '+time+' linear infinite normal';
            this.changeRowWidth()
        })
  },
  methods: {
    /**
     * cell 选中方法
     */
    draw(item,index){
      // console.log(index,this.start)
      if(index == 4){
        if(this.start){
          return
        }
        if(this.times > 0){
          this.luckDraw()
        }else {
          this.alertText = '您还有0次抽奖机会';
          this.popupVisible4 = true; // 抽奖操作提示
          setTimeout(()=>{
            this.popupVisible4 = false; 
          },1300)
        }
      }else{
        if(!this.start){
          return
        }
        if(this.start&&this.activeIndex == null && this.activeIndex !== index){
            this.alertTitle = item.prize_name;
            this.alertprize_name = '恭喜你获得'+ item.prize_name;
            this.prize_img = item.prize_img;  
            this.times = 3;
            this.isDrawing = false;
            this.popupVisible = true;
             
            this.$nextTick(()=>{
                this.activeIndex = index;
            })
        }
      }
    },
    /**
     * 活动详情
     */
    goDetail(){

    },
    closeModal4(){
      this.popupVisible4 = false;
    },
    closeModal2(){
      this.popupVisible2 = false;
    },
    closeModal(){
      this.popupVisible = false;
      this.$nextTick(
            ()=>{
              this.logoback = true;
            }
      )
      setTimeout(()=>{
         this.start = false;
         this.logoback = false;
         this.activeIndex = null;
      },1000);
    },
  
    /**
     * 我的奖品
     */
    prize(){
     
    },
    
    /**动态赋值滚动列表宽度 */
    changeRowWidth() {
      // console.log('---->', window.getComputedStyle(this.$refs.rowleft).width)
      // let rowWidth = - this.$refs.rowleft.clientWidth + 'px';
      // let rowleft = "@keyframes rowleft{from {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}\n"+
      //       "to{-webkit-transform: translate3d("+ rowWidth +", 0, 0);transform: translate3d("+ rowWidth +", 0, 0);}}";
      let rowleft = "@keyframes rowleft{from {-webkit-transform: translate3d(0%, 0, 0);transform: translate3d(0%, 0, 0);}\n"+
      "to{-webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0);}}";
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '';
      document.getElementsByTagName('head')[0].appendChild(style);
      this.stylesheet = document.styleSheets[document.styleSheets.length-1];
      try {
          this.stylesheet.insertRule( rowleft , this.stylesheet.rules.length);
      } catch (e) {
          alert(e);
      }
    },
    /**抽奖 */
    luckDraw(){
      this.isDrawing = true;
      this.start = true // 展示动画 div
    },
}
}
</script>

<style  scoped>
.mint-popup{
  border-radius: 0.5rem;
}
.sw-container{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
}
.sw-logo{
  position: absolute;
  top: 38px;
  left: 15px;
  width: 78px;
  height: 31px;
}
.sw-bg-gif{
  position: absolute;
  top:13.06rem;
  width:20.88rem;
  height:20.88rem
}
.sw-bg-png{
  position: absolute;
  top:13.3rem;
  width:20.4rem;
  height:20.4rem
}
.sw-winners{
    display: flex;
    position: absolute;
    top: 0;
    left:0;
    width: 23.44rem;
    height: 1.63rem;
    background-color: rgba(0,0,0,0.2);
    overflow: hidden;
}
.sw-winners-text{
    width: max-content;
    font-size: 12px;
    height: 26px;
    line-height: 26px;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-left: 12px;
}
.rowleft{
    display: flex;
    flex-direction: row
}

.sw-winners-header{
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin: 6px;
  vertical-align: middle;
}
.sw-detailbtn{
  position: absolute;
  top: 10.25rem;
  width: 83px;
  height: 27px;
  border-radius: 15.5px;
  border: 1px solid #B84E68;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 27px;
  text-align: center;
}

.sw-bgimg{
    width: 23.44rem;
}
#box {
    position: absolute;
    width: 18.88rem;
    height: 18.88rem;
    top: 14.06rem;
    background: #AB464C;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
}

.cell {
  width: 5.5rem;
  height: 5.5rem;
  background: #FFDDD1;
  border-radius: 0.63rem;
  box-sizing: border-box;
  line-height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
.cell-text{
    font-family: SourceHanSansCN-Normal;
    font-size: 12px;
    color: #F12F2C;
    letter-spacing: 0;
    line-height: 12px;
    text-align: center;
}
.cell-img{
    margin-top: 5px;
    width: 4.25rem;
    height: 3.38rem;
}
.first{
  transition: all 2s;
  z-index: 2;
  position: absolute;
  text-align: center;
   left: 0;
  top:0;
  width: 100%;
  height: 100%;
}
.rotate{
  transform:rotateY(180deg);
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
}
.second{
  position: absolute;
  left: 0;
  top:0;
  text-align: center;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.cell0 {
  position: relative;
  animation:my 1s linear;
  /* Firefox: */
  -moz-animation:my 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:my 1s linear;
  /* Opera: */
  -o-animation:my  1s linear;
}

@keyframes my
{
0%   {left:0px; top:0px;}
50%  { left:100px; top:100px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes my /* Safari and Chrome */
{
0%   {}
50%  {left:100px; top:100px;}
100% {left:0px; top:0px;}
}
.cell1 {
  position: relative;
  animation:myfirst 1s linear ;
  /* Firefox: */
  -moz-animation:myfirst 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:myfirst 1s linear ;
  /* Opera: */
  -o-animation:myfirst myfirst 1s linear;
}

@keyframes myfirst
{
0%   {left:0px; top:0px;}
50%  { left:0px; top:100px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:0px; top:100px;}
100% {left:0px; top:0px;}
}
.cell2 {
  position: relative;
  animation:mytwo 1s linear;
  /* Firefox: */
  -moz-animation:mytwo 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:mytwo 1s linear  ;
  /* Opera: */
  -o-animation:mytwo  1s linear;
}

@keyframes mytwo
{
0%   {left:0px; top:0px;}
50%  { left:-100px; top:100px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes mytwo /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:-100px; top:100px;}
100% {left:0px; top:0px;}
}
.cell3 {
  position: relative;
  animation:mythree 1s linear;
  /* Firefox: */
  -moz-animation:mythree 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:mythree 1s linear  ;
  /* Opera: */
  -o-animation:mythree  1s linear;
}

@keyframes mythree
{
0%   {left:0px; top:0px;}
50%  { left:100px; top:0px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes mythree /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:100px; top:0px;}
100% {left:0px; top:0px;}
}
.cell5 {
  position: relative;
  animation:myfive 1s linear;
  /* Firefox: */
  -moz-animation:myfive 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:myfive 1s linear  ;
  /* Opera: */
  -o-animation:myfive  1s linear;
}

@keyframes myfive
{
0%   {left:0px; top:0px;}
50%  { left:-100px; top:0px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes myfive /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:-100px; top:0px;}
100% {left:0px; top:0px;}
}
.cell6 {
  position: relative;
  animation:mysix 1s linear;
  /* Firefox: */
  -moz-animation:mysix 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:mysix 1s linear ;
  /* Opera: */
  -o-animation:mysix  1s linear;
}

@keyframes mysix
{
0%   {left:0px; top:0px;}
50%  { left:100px; top:-100px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes mysix /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:100px; top:-100px;}
100% {left:0px; top:0px;}
}
.cell7 {
  position: relative;
  animation:myseven 1s linear;
  /* Firefox: */
  -moz-animation:myseven 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:myseven 1s linear  ;
  /* Opera: */
  -o-animation:myseven  1s linear;
}

@keyframes myseven
{
0%   {left:0px; top:0px;}
50%  {left:0px; top:-100px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes myseven /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:0px; top:-100px;}
100% {left:0px; top:0px;}
}
.cell8 {
  position: relative;
  animation:myeight 1s linear;
  /* Firefox: */
  -moz-animation:myeight 1s linear;
  /* Safari and Chrome: */
  -webkit-animation:myeight 1s linear ;
  /* Opera: */
  -o-animation:myeight  1s linear;
}

@keyframes myeight
{
0%   {left:0px; top:0px;}
50%  {left:-100px; top:-100px;}
100% {left:0px; top:0px;}
}

@-webkit-keyframes myeight /* Safari and Chrome */
{
0%   {left:0px; top:0px;}
50%  {left:-100px; top:-100px;}
100% {left:0px; top:0px;}
}
.sw-times{
  position: inherit;
  top: 21.44rem;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
}
.sw-bottom-btn{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 38.25rem;
}
.sw-tryonce{
  width: 7.88rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  background-image: linear-gradient(-180deg, #FE7F42 0%, #F15E49 100%);
  border-radius: 1.38rem;
}
.sw-modal{
 margin-top: 100%;
  width: 250px;
  height: 335px;
  background: #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}
.sw-modal-close{
  position: absolute;
  top: 0;
  right: 0;
}
.sw-close-img{
  width: 14px;
  height: 14px;
  padding: 10px;
}
.sw-modal-title{
  font-family: SourceHanSansCN-Medium;
font-size: 24px;
color: #F12F2C;
letter-spacing: 0;
text-align: center;
line-height: 24px;
}
.sw-modal-text{
  font-family: SourceHanSansCN-Normal;
font-size: 16px;
color: #24252E;
letter-spacing: 0;
line-height: 16px;
text-align: center;
margin-top: 20px;
}
.sw-modal-image{
  width: 159px;
  height: 127px;
  margin-top: 23px
}
.sw-modal-btn{
  width: 194px;
  height: 34px;
  line-height: 34px;
  margin-top: 28px;
  background: linear-gradient(-180deg, #FE7F42 0%, #F15E49 100%);
  border-radius: 17.5px;
  font-family: SourceHanSansCN-Medium;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.sw-modal-alert{
  width: 15.19rem;
  height: 3.81rem;
  line-height: 3.81rem;
  opacity: 0.9;
background: #FFFFFF;
border-radius: 8px;
font-family: PingFangSC-Regular;
font-size: 16px;
color: #24252E;
letter-spacing: 0;
text-align: center;
}
.sw-modal-copytext{
   width: 204px;
  height: 78px;
  margin-top: 8px;
  line-height: 78px;
  font-size: 16px;
color: #24252E;
letter-spacing: 0;
text-align: center;
line-height: 26px;
word-break: break-all;
}
.sw-modal-copyurl{
  width: 204px;
  height: 78px;
  margin-top: 11px;
  font-family: SourceHanSansCN-Normal;
  font-size: 14px;
  color: #24252E;
  letter-spacing: 0;
  line-height: 23px;
  text-align: center;
  word-break: break-all;
}
.sw-bottom-login{
  position: absolute;
  width: 23.44rem;
  top: 41.6rem;
  background-color: #4C3C5D
}
</style>
