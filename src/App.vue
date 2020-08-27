<template>
  <div>
    <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column" >
                    <div class="nav-item">
                        <a class="nav-link active" href="#">
                            <router-link :to="{ name: 'HelloWorld', params: { userData: '111'}}">清單</router-link>
                        </a>
                    </div>
                </ul>
            </div>
          </nav>
          <router-view></router-view>
        </div>
    </div>  
  </div>
</template>

<script>
import wrk from '@/components/wrk'
export default {
  data() {
    return {
      mess:'hi',
      nowdo:'',
      nowList:[],
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
  },
  mounted(){
    //單ㄍ外送
    // this.dodogogo('1511', 1000, true)
    // .then(result=>{
    //   console.log('success=>',result,result,result)
    // }).catch(error=>{
    //   console.log('error=>',error,error)
    // })
    // //多個外送 只回傳最快結束的結果
    // Promise.race([this.dodogogo('15811', 2000, true),this.dodogogo('8787', 5000, true),this.dodogogo('冠軍', 8000, false)])
    // .then(result=>{
    //   console.log('36success=>',result)
    // }).catch(error=>{
    //   console.log('37error=>',error,error)
    // })
    // //多個外送 一起回傳結果
    // Promise.all([this.dodogogo('15811', 2000, true),this.dodogogo('8787', 5000, false),this.dodogogo('11111', 5000, false)])
    // .then(result=>{
    //   console.log('42success=>',result)
    // }).catch(error=>{
    //   console.log('44error=>',error,error)
    // })
    //接力賽跑
    // this.dodogogo('1511', 1000, false)
    // .then(result1511 =>{
    //   console.log('success=>',result1511)
    //   return(this.dodogogo('君君', 2000, true))
    // }).catch(error1511 =>{
    //   console.log('error=>',error1511)
    //   return(this.dodogogo('紅豆餅', 1000, false))
    // }).then(jyunresult =>{
    //   console.log('success=>',jyunresult)
    // }).catch(jyunrerror =>{
    //   console.log('error=>',jyunrerror)
    //   return(this.dodogogo('君君', 1000, true))
    // }).then(redesult =>{
    //   console.log('success=>',redesult)
    // }).catch(rederror =>{
    //   console.log('error=>',rederror)
    //   return(this.dodogogo('君君', 1000, true))
    // })
    
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

</style>
