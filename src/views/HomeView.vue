<template>
  <div class="home">
    <!-- <v-sheet>
        <span>这是一项面对所有web3的挑战</span>
    </v-sheet> -->
    <v-card elevation="16" class="Box-div-one" dark >
      <v-sheet style="width: 100%;height: 100%;">
        <h1 class="H1-title" style="text-align: center;">Claim Airdrop</h1>
        <div>
          <h2 style="text-align: center;color: aliceblue;">test</h2>
        </div>
        <v-sheet>
          <div class="Box-button">
              <v-btn class="mr-10" color="rgb(51, 212, 250)" >claim</v-btn>
              <v-btn color="rgb(51, 212, 250)">claim2</v-btn>
          </div>
        </v-sheet>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.home {
  // padding-top: -20px;
  width: 100%;
  height: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  
  .Box-div-one {
    border-style: solid;
    width:800px;
    height: 500px;
    border-radius: 16px;
    border: 3px solid blueviolet;
    .H1-title {
      padding-top: 40px;
      background-image: linear-gradient(270deg, rgb(156, 81, 255) 0%, rgb(85, 161, 255) 50%, rgb(156, 81, 255) 100%) ;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .Box-button{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      .mr-10{
        // border-radius: 16px;
        
      }
    }
  }
}
.Box-button{
  button{
    border-radius: 18px;
  }
}

</style>
