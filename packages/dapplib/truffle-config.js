require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender this fiscal radar remember coach impulse light army gather'; 
let testAccounts = [
"0x276b497a23f571200521666e3ffa4b6db2dc41d10ee4508a8ea24e76b6f479cf",
"0x5ae65823cbc45ce1bea882411d3aa4871cab768005507a39704542c367dabf05",
"0x05ae9e10a4584437cb2255689cba5a2c184f7fd9251e5579a4576b716ed73c1a",
"0xab3e984cdcc8d08e8ef757e1e965a98d4ea44a76353b8bdbff2eb80a55ed202f",
"0xf1c66f0a0be8e8f352ae665490a4ad2ad5d20b8f2fd6267f61d5226e924c57cf",
"0x639ccc0ad2b113ee6569b2f7ce4381d0374fb93e80e24e8364a1ca0bffd00791",
"0x18aa2ad75d3c2ff0608574bc9eedc0f0c54ffbe8831ef587458b6d475354f4f7",
"0x42c6be5c5d075c1997cb7e74029d35ab6c9d7a2cc22f6e86bdbb66735878c753",
"0x165b9573a9b57cd064d3b8994e32134576d3dc12acc9fba1b801e41806397ff0",
"0x1b0bba6f96c8c07229aaae930010ab0ceb125c5062dc52477a54eb22142eb4a3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


