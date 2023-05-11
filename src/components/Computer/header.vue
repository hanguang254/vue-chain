<template>
    <div class="header">
        <div class="nr">
            <div class="left">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="center">
                <div>Home</div>
                <div>Airdrop</div>
                <div>IDO</div>
            </div>
            <div class="right">
                <button 
                    v-if="!isWalletConnected" 
                    @click="connectWallet()"
                    >Connect Wallet
                </button>
                <span v-else class="acount">
                    {{ walletAddress.substring(0, 4) }}...{{ walletAddress.substring(walletAddress.length - 4) }}
                </span>
                <button 
                    class="disconnect" 
                    v-if="isWalletConnected"
                    @click="isWalletConnected = false"
                    >Disconnect
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Web3 from 'web3';

export default {
    name: 'VueChainHeader',

    data() {
        return {
            web3: null,
            walletAddress: '',
            isWalletConnected: false,
        };
    },

    mounted() {

    },
    
    methods: {
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
            }
        },
        disconnectWallet() {
            
        },


    },
        

    
};
</script>

<style lang="scss" scoped>
.header {
    width: 100vw;
    height: 80px;
    background-color: black;
    text-align: center;
    display: flex;
    justify-content: center;
    
    .nr {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        color: white;
        line-height: 80px;

        .left {
            width: 200px;
            line-height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 48px;
            }
        }

        .center {
            margin-right: 160px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;

            div {
                margin-right: 24px;
                margin-left: 24px;
                width: 34px;
                height: 24px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.03em;
                color: rgb(255, 255, 255);
                opacity: 0.5;
                transition: opacity 0.2s ease 0s;
                padding: 0px 12px;

                &:hover {
                    opacity: 1;
                }
            }
        }

        .right {
            
            border-radius: 12px;
            
            span{
                color: aliceblue;
                border: 2px solid rgb(23, 241, 221);
                border-radius: 12px;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 10px;
                padding-right: 10px;
                margin-right: 10px;
            }
            button {
                -webkit-box-align: center;
                align-items: center;
                border: 0px ;
                cursor: pointer;
                display: inline-flex;
                font-family: inherit;
                font-weight: 600;
                -webkit-box-pack: center;
                justify-content: center;
                letter-spacing: 0.03em;
                line-height: 1;
                opacity: 1;
                outline: 0px;
                transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
                font-size: 14px;
                background: linear-gradient(270deg, rgb(51, 212, 250) 0%, rgb(23, 243, 221) 100%);
                color: rgb(14, 19, 33);
                border-radius: 12px;
                overflow: hidden;
                width: 148px;
                height: 40px;
                padding: 0px;
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    .header {
        width: 100%;
        .nr {
            width: 100%;
            .center {
                margin-right: 0px;
            }
        }
    }
    }
</style>