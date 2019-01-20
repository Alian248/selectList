<template>
  <div id="app">
    <div class="delt">
      <div class="dispFrame">
        <input class="option" type="text" value>
        <ul>
          <li v-for="(v,index) in selections" :key="index">{{v}}<a src="javascript:void(0)" @click="del(index)">X</a></li>
        </ul>
      </div>
      <i class="iconfont icon icon-jiahao" @click="showList()"></i>
    </div>
    <div class="contents" v-if="show"> <!--搜索框和下拉列表部分-->
      <div class="search">
        <form>
          <i class="iconfont icon icon-sousuo"></i>
          <input name="cname" type="text" v-model="searchText" placeholder="搜索">
        </form>
      </div>
      <ul>
        <li v-for="(v,index) in searchData" :key="index"><!--v:值，index:索引-->
          <span class="c-checkbox" :class="classObject(v)" @click="onClicked(v)">
            <input class="c-check-input" v-model="selections" :value="v" type="checkbox">
            <span class="c-checkbox-inner"></span>
          </span>
          <label v-text="v"></label><!--文字-->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
name:"#app",
data(){
    return{
     selections: [],
     items:['变更中', '未生效', '作废', '正常', '审核中'],
     value: "",
     show: true,
     searchText: ""
    }  
  },
  methods: {
    del(index) { //X删除
        this.selections.splice(index, 1);
      },
    showList() { //+点击隐藏和展示
        this.show = !this.show;
      },
    onClicked(value) { //选中
        let index = this.selections.indexOf(value);
        if (index == -1) {
          this.selections.push(value);
        } else {
          this.del(index);
        }
      },
    classObject: function (v) { //添加checkbox样式
        return {
          'c-checkbox-checked': this.selections.indexOf(v) != -1
        }
      }
    },
  computed: {
    searchData: function () { //模糊查询
        var search1 = this.searchText;
        if (search1) {
          return this.items.filter(function (product) {
            return Object.keys(product).some(function (key) {
              return String(product[key]).toLowerCase().indexOf(search1) > -1
            })
          })
        }
        return this.items;
      }
    },
  };
</script>
<style spcode>
*{
  margin:0;
  padding:0;
}
body{
    background-color:#EEEEEE;
}
#app {
  width: 322px;
  margin: auto;
}
.delt {
  position: relative;
  z-index: 10;
}
.delt .dispFrame {
  position: relative;
  width: 100%;
  min-height:35px;
  margin-top: 8px;
  clear:both;
  overflow: hidden;
}

.delt .dispFrame ul {
  min-height: 100%;
  float:left;
  line-height: 32px;
  list-style: none;
}

.delt .dispFrame ul li {
  position: relative;
  width:70px;
  height: 24px;
  margin: 2px 6px;
  text-align: center;
  display: inline-block;
  background-color: #2c72de;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  line-height: 25px;
  z-index: 998;
}

.delt .dispFrame ul li a {
  margin-left:8px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  z-index: 9999;
  cursor: pointer;
}
.delt .dispFrame .option {
  position: absolute;
  top:0;
  left:0;
  width: 322px;
  min-height:100%;
  background-color: white;
  border: 1px solid #f5f5f5;
  text-indent: 16px;
  border-width: 0ch;
  border-radius: 3px;
}

.delt .dispFrame .option ::placeholder {
  color: #c1c1c1;
}

.delt .dispFrame .option:focus {
  outline: none;
}

.delt i.icon-jiahao {
  display: inline-block;
  position: absolute;
  top:16%;
  right:10px;
  font-size: 22px;
  color: #c1c1c1;
  cursor: pointer;
}

.contents {
  width: 322px;
  height: 225px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px #f5f5f5;
  border-radius: 3px;
  z-index: 56;
}

.contents ul {
  list-style: none;
  margin-top: 10px;
}

.contents li {
  width:150px;
  position: relative;
  height: 32px;
}

.contents li label {
  position: absolute;
  top: 2px;
  left:62px;
  line-height: 15px;
  color: #373737;
  font-size: 14px;
  margin-left: 10px;
}

.contents .c-checkbox {
  width:0;
  height:0;
  padding:0;
  white-space: normal;
  cursor: pointer;
  outline: none;
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: text-bottom;
}

.contents .c-check-input {
  border-width: 0ch;
  z-index: 1;
  border: none;
  vertical-align: middle;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}

.contents [type="checkbox"] {
  width:0px;
  height:0px;
  box-sizing: border-box;
  padding: 0;
}

.contents .c-checkbox-inner {
  position: relative;
  top: -33px;
  left:-34px;
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  background-color: white;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.contents .c-checkbox-inner::after {
  content: " ";
  transform: rotate(45deg) scale(0);
  position: absolute;
  left: 4px;
  top: 1px;
  display: table;
  width: 5px;
  height: 8px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
}

.contents .c-checkbox-checked .c-checkbox-inner {
  background-color: #2c72de;
  border-color: #2c72de;
}

.c-checkbox-checked .c-checkbox-inner::after {
  content: " ";
  transform: rotate(45deg) scale(1);
  position: absolute;
  display: table;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.contents .c-checkbox-checked::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  border: 1px solid #2c72de;
  animation-name: antCheckboxEffect;
  animation-duration: 0.36s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-fill-mode: both;
  visibility: hidden;
}

.contents .search {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
}

.contents .search input {
  z-index: 32;
  position: absolute;
  top: 9px;
  left: 20px;
  width: 280px;
  height: 30px;
  margin: auto;
  color: #8b8b8b;
  border-width: 0ch;
  border: 1px solid #d5d5d5;
  border-radius: 125px;
  text-indent: 48px;
}

.contents .search input:focus {
  outline: none;
}

.contents .search i.icon-sousuo {
  z-index: 999;
  position: absolute;
  top: 18px;
  left: 40px;
  color: #d5d5d5;
  font-size: 16px;
  cursor: pointer;
}
</style>

