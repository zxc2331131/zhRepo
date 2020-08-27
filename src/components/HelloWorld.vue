<template>
  <div>
    <div class="container-fluid">
        <div class="row">
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            {{this.$route.params}}
            <router-view></router-view>
          </main>
        </div>
    </div>  
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
export default {
  name: 'HelloWorld',
  methods: {
    getDrugInfo(){
      let tag = 'lib.cg.getDrugBasicData'
      let param = new FormData()
      let conf = {
        params: {
          wtag:tag,
          danpa:12651,
          danger:'danmom'
        }
      };
      let obj = {
        wb_base64:0,
        encode:"N",
        drug_cod:"IDAN",
        typ:'PS'
      }
      param.append("var",Base64.encode(JSON.stringify(obj)))
      this.$axios.post("/api", param, conf)
      .then(response => {
        console.log(response)
        let result = JSON.parse(Base64.decode(response.data))
        if (result.sts = '000000') {
          console.log('ok')
          console.log(Base64.decode(result.val.txt))
        } else {
          console.log('not ok')
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    sendMsg(){
      console.log(1111)
      console.log(this.params)
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
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nowList:[],

    }
  },
  mounted() {
      // this.$axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      // this.$axios.get('/api')
      // .then(result=>{
      //   console.log('success=>', result)
      //   this.nowList = result.data
      //   console.log(this.nowList)
      // }).catch(error=>{
      //   console.log('error->', error)
      // })
      // this.getDrugInfo()
      this.sendMsg()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
