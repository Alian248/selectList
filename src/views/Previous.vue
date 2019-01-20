<template>
   <section>
    <header>
      <div class="circinal"><i class="iconfont icon icon-wenzhang1"></i></div>
      <span>销售简报</span>
    </header>
    <article>
      <div class="box clearfix"><!--一-->
        <div class="box-left clearfix">
          <div class="left"><i class="iconfont icon icon-ren1"></i></div>
          <div class="right">
            <p>33<span>个</span></p>
            <p>新增客户数</p>
          </div>
        </div>
        <div class="box-right clearfix">
          <div class="left">
            <i class="iconfont icon icon-lianxirenqunzu"></i>
          </div>
          <div class="right">
            <p>22<span>个</span></p>
            <p>新增联系人</p>
          </div>
        </div>
      </div>
      <div class="box clearfix"><!--二-->
        <div class="box-left clearfix">
          <div class="left">
            <i class="iconfont icon icon-quanzi-xuanzhong"></i>
          </div>
          <div class="right">
            <p>47<span>个</span></p>
            <p>新增商机数</p>
          </div>
        </div>
        <div class="box-right clearfix">
          <div class="left"><i class="iconfont icon icon-xin"></i></div>
          <div class="right">
            <p>3<span>个</span></p>
            <p>阶段变化的商机</p>
          </div>
        </div>
      </div>
      <div class="box clearfix"><!--三-->
        <div class="box-left clearfix">
          <div class="left"><i class="iconfont icon icon-bijiben"></i></div>
          <div class="right">
            <p>3<span>个/</span>2<span>次</span></p>
            <p>新增商机数</p>
          </div>
        </div>
        <div class="box-right clearfix">
          <div class="left">
            <i class="iconfont icon icon-fl-xiaoshoudan"></i>
          </div>
          <div class="right">
            <p>6<span>条</span></p>
            <p>新增销售记录</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {

}
</script>
<style spcode>
* {
    margin: 0;
    padding: 0;
}
body {
    background-color:#EEEEEE;
    z-index:53;
}
.clearfix::after {
    content: "";
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
}
section {
    width: 455px;
    height: 377px;
    margin: 20px auto;
    background-color: white;
    border-radius: 5px;
}
header {
    width: 180px;
    height: 50px;
    overflow: hidden;
}
header .circinal {
    width: 30px;
    height: 30px;
    margin-top:20px;
    background-color: #94c890;
    border-radius: 50%;
    display: inline-block;
}
header i.icon-wenzhang1 {
    font-size: 16px;
    line-height: 30px;
    vertical-align: middle;
    color: white;
}
header span {
    font-size: 18px;
    padding:10px;
    vertical-align: middle;
    color: #94c890;
}
article {
    width: 100%;
    margin: 20px auto 0;
}
article .box {
    margin: 26px;
}
article .box .box-left,
article .box .box-right {
    width: 45%;
    height: 78px;
}
article .box .box-left,
article .box .box-right {
    float: left;
}

article .box .box-left .left,
article .box .box-right .left {
    width: 42px;
    height: 35px;
    float: left;
}
article .box .box-left .left i.icon-ren1,
i.icon-quanzi-xuanzhong,
i.icon-bijiben,
article .box .box-right .left i.icon-lianxirenqunzu,
i.icon-xin,
i.icon-fl-xiaoshoudan {
    display: block;
    height: 30px;
    margin-top: 15px;
    font-size: 24px;
    color:#d7ead9;
    border-right: 1px solid #F2F3F2;
}
article .box .box-left .right,
article .box .box-right .right {
    width: 112px;
    height: 65px;
    float: left;
    margin: 0 10px;
}
article .box .box-left .right p:nth-child(1),
article .box .box-right .right p:nth-child(1) {
    font-size: 38px;
    color: #87909D;
}
article .box .box-left .right p span,
article .box .box-right .right p span {
    font-size: 14px;
    color: #87909D;
}
article .box .box-left .right p:nth-child(2),
article .box .box-right .right p:nth-child(2) {
    font-size: 14px;
    color: #686868;
}
</style>
