<template>
  <v-sheet height="100%" color="transparent" class="overflow-hidden">
    <v-container>
      <!-- <v-row class="my-8">
        <v-col>
          <v-text-field label="搜索名字或地址" outlined height="60" class="text-h5" append-outer-icon="mdi-magnify"></v-text-field>
        </v-col>
      </v-row> -->
      <v-row class="mt-8">
        <v-col>
          <v-progress-linear rounded color="light-blue" height="18" value="60" striped class="white--text" buffer-value="60" stream>
            <template v-slot:default="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card height="530" elevation="16" class="rounded-xl pa-10" dark style="border: 3px solid blueviolet;">
            <v-container>
              <v-row class="justify-center my-2">
                <v-col>
                  <v-row class="d-flex justify-center" style="color:aliceblue">白名单销售</v-row>
                  <v-row class="d-flex justify-center" style="color:rgb(10, 203, 10)">
                    <v-progress-circular size="20" indeterminate color="primary"></v-progress-circular>
                    进行中 73.145%
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="d-flex justify-center" style="color:aliceblue">公开发售</v-row>
                  <v-row class="d-flex justify-center" style="color:aliceblue">
                    06 days 10:11:51
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="text-h4 text-center" style="color:aliceblue">
                  IDO: 白名单销售
                </v-col>
              </v-row>
              <v-row>
                <v-col :class="$vuetify.breakpoint.mobile? `text--h1`:`text-h6`" cols="12" class="text-center" style="color:aliceblue">
                  一代币应用于3生态, ZNS = 去中心化域名 + 去中心化网站 + Web3 社交
                </v-col>
              </v-row>
              <v-row class="d-flex justify-center">
                <v-col :cols="$vuetify.breakpoint.mobile? ``:`5`" class="text-h4 d-flex justify-center">
                  <v-text-field light hide-details="" label="ETH数量" solo height="60" class="text-h5" style="background-color:aliceblue;"></v-text-field>
                  <v-btn class="ml-5 white--text" :class="$vuetify.breakpoint.mobile? `text-h6`:`text-h5`" style="background: linear-gradient(100.24deg,#9945f9 8.35%,#2339fd 94.57%);" height="100%" :width="$vuetify.breakpoint.mobile? ``:`100px`" elevation="24" shaped>最大</v-btn>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-center">
                  <v-btn outlined class="my-6" x-large width="150" style="color:aliceblue">加入白名单</v-btn>
              </v-row>
              <v-row class="justify-center">
                <v-col>
                  <v-row class="d-flex justify-center" :class="$vuetify.breakpoint.mobile? `subtitle-2`:`text-h5`" style="color:aliceblue">我的存款金额</v-row>
                  <v-row class="d-flex justify-center" :class="$vuetify.breakpoint.mobile? `subtitle-2`:`text-h5`" style="color:aliceblue">
                    0 ETH
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="d-flex justify-center" :class="$vuetify.breakpoint.mobile? `subtitle-2`:`text-h5`" style="color:aliceblue">我的ZNS数量</v-row>
                  <v-row class="d-flex justify-center" :class="$vuetify.breakpoint.mobile? `subtitle-2`:`text-h5`" style="color:aliceblue">
                    0 ZNS
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="d-flex justify-center" :class="$vuetify.breakpoint.mobile? `subtitle-2`:`text-h5`" style="color:aliceblue">ZNS 当前价格</v-row>
                  <v-row class="d-flex justify-center" :class="$vuetify.breakpoint.mobile? `subtitle-2`:`text-h5`" style="color:aliceblue">
                    0.000015 ETH
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>


<script>

    export default {
        //注册组件
        components:{  },
        //注册数据
        data() {
            return {
                
            }
        },
        //注册方法
        methods:{
            
        },
        //计算属性
        computed:{
            
        },
        //监视属性
        watch:{
            
        },
        //生命周期
        mounted(){
            
        }
   }
</script>


<style scoped>
    
</style>