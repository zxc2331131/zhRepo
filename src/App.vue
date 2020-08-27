<template>
  <div>
    <div class="container-fluid">
        <label v-for="(val, key) in empList">
            <div class="fp_td" @click="clickList(val.empno)">
                <div class="txt" >
                    {{val.empno}}{{val.name}}
                </div>
            </div>
        </label>
    </div>  
    <div>
      <textarea cols="50" rows="5" style="width:100%;align:center" v-model="txtVal">
      　輸入你想要寫的內容...
      </textarea>
      <div class="fp_td" @click="sendMsg()">送出</div>
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import wrk from '@/components/wrk'
export default {
  data() {
    return {
      mess:'hi',
      nowdo:'',
      txtVal:'',
      nowList:[],
      empList:[{ empno: "12604", name: "子靖" },
       { empno: "12833", name: "仕龍" },
       { empno: "12834", name: "韋豪" },
       { empno: "12948", name: "子婷" },
       { empno: "11087", name: "承甫" },
       { empno: "11241", name: "仕昇" },],
    }
  },
  components:{
    'wrk': wrk
  },
  methods : {
    dodogogo(name, time, success) {
      return new Promise ((goodgoood, badguy) =>{
        if (success) {
          setTimeout(()=>{
            goodgoood(`${name}花了${time/1000}`)
          }, time)
        }else{
          badguy(name)
        }
      })
    },
    keepnowdo(dotyp) {
        console.log(1111)
    },
    clickList(dotyp) {
      console.log(this.txtVal);
      // if (this.nowList[dotyp]) {
      //   this.nowList.splice(dotyp, 1);
      //   console.log(this.nowList);
      // } else {
      //   this.nowList.append(dotyp, 1);
      // }
        
    },
    sendMsg(dotyp) {
      console.log(this.txtVal)
      console.log(this.empList)
      // let tag = 'lib.cg.getDrugBasicData'
      // let param = new FormData()
      // let conf = {
      //   params: {
      //     wtag:tag,
      //     danpa:12651,
      //     danger:'danmom'
      //   }
      // };
      // let obj = {
      //   wb_base64:0,
      //   encode:"N",
      //   drug_cod:"IDAN",
      //   typ:'PS'
      // }
      // param.append("var",Base64.encode(JSON.stringify(obj)))
      // this.$axios.post("/api", param, conf)
      // .then(response => {
      //   console.log(response)
      //   let result = JSON.parse(Base64.decode(response.data))
      //   if (result.sts = '000000') {
      //     console.log('ok')
      //     console.log(Base64.decode(result.val.txt))
      //   } else {
      //     console.log('not ok')
      //   }
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.plus{
    position:absolute;
    background-color: rgb(236, 86, 111);
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 25px;
    border: 1px solid black;
    right:0%;
    color:white;
    
}
.txt{
    position:absolute;
    text-align: left;
    top:50%;
    left:0%;
    
}
.fp_td{
    position: relative;
    width: 250px;
    height: 100px;
    text-align: right;
    line-height: 25px;
    border: 1px solid black;
    display: inline-block;
    margin: 10px;
    
}

</style>
