<template>
    <v-hover v-slot="{ hover }">
      <v-app-bar app :elevation="hover?'0':'0'" dark>
        <v-img v-if="!$vuetify.breakpoint.mobile" max-height="100" max-width="200" src="../assets/logo.svg" @click="$router.push('/')" style="cursor: pointer;"></v-img>
        <v-spacer></v-spacer>
        <v-btn-toggle tile mandatory group>
          <v-btn class="text-h6 white--text text-capitalize" to="/">Airdrop</v-btn>
          <v-btn class="text-h6 white--text text-capitalize" to="/PageOne">IDO</v-btn>
          <v-btn class="text-h6 white--text text-capitalize" to="/PageTwo">页2</v-btn>
        </v-btn-toggle>

        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" width="500" persistent >
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" 
              color="primary" outlined :ripple="false" 
              :large="!$vuetify.breakpoint.mobile" 
              class="mx-2 text-h6 text-capitalize"
              v-show="!isWalletConnected"
              style=""
              >
              <v-icon color="primary" v-if="$vuetify.breakpoint.mobile">
                mdi-wallet
              </v-icon>
              {{ $vuetify.breakpoint.mobile? ``:`ConnectWallet` }}
            </v-btn>
          </template>
          

          <v-card width="600" height="400" class="rounded-xl" style="" outlined="true"  >
            
            <v-sheet width="100%" height="100%" 
              class="rounded-xl d-flex align-center justify-center" 
              color="rgb(21, 27, 44)"
              style=""
              >
              <!-- <h2 style="color:aliceblue;">Connect Wallet</h2> -->
              <v-btn class="text-capitalize" outlined large @click="dialog = false, connectWallet()" style="color: aliceblue;">
                <img src="https://docs.metamask.io/img/metamask-fox.svg" alt="">
                Metamask
              </v-btn>
            </v-sheet>
            <v-btn absolute right top icon @click="dialog=false">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-card>
        </v-dialog>

        <span class="amount-span" v-show="isWalletConnected">
              {{ walletAddress.substring(0, 4) }}...{{ walletAddress.substring(walletAddress.length - 4) }}
        </span>
        <v-btn class="disconnect"
            v-show="isWalletConnected"
            @click="disconnectWallet()"
            color="rgb(23, 241, 221)"
        >
          Disconnect
        </v-btn>

      </v-app-bar>
    </v-hover>
</template>


<script>
import Web3 from 'web3';
    export default {
        //注册组件
        components:{  },
        //注册数据
        data() {
            return {
              dialog: false,
              web3: null,
              walletAddress: '',
              isWalletConnected: false,
            }
        },
        //注册方法
        methods:{
          async connectWallet() {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3 = new Web3(window.ethereum);
                    const currentAddress = accounts[0];
                    this.walletAddress = currentAddress;
                    this.web3 = web3;
                    this.isWalletConnected = true;
                    // console.log('Connected to wallet',web3);
                    
                    // Switch to target network if not already connected
                    const targetChainId = 42161;
                    
                    if(window.ethereum.chainId !== targetChainId.toString(16)){
                        await this.switchToTargetNetwork();
                    }
                } catch (error) {
                    console.error(error);
                    alert("Failed to connect to wallet");
                }
            } else {
                window.open('https://metamask.io/');
                console.log('Please install MetaMask');
            }
            
          },
          async switchToTargetNetwork() {
            const targetChainId = 42161;

            try {
                await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${targetChainId.toString(16)}` }],
                });
                
            } catch (error) {
                console.error(error);
                alert("Failed to switch network. Please switch to the target network manually.");
                this.switchToTargetNetwork();
            }
          },
          disconnectWallet() {
            this.isWalletConnected = false;
            this.dialog = true;
            
          },


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


<style scopedc="css">
    .amount-span {
      color: aliceblue;
      border: 2px solid rgb(23, 241, 221);
      border-radius: 12px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 10px;
    }
</style>