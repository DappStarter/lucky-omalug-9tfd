require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture street repeat mad modify grunt light army ghost'; 
let testAccounts = [
"0x2af9e7f78bf2823f6968766cdf432dd4c1a97873cea2291b345f1c7844a09633",
"0x9b7f073b98d564b77a83b232f9144bf9f9099a46d30f3ee7299839f3c7d8989b",
"0xb0b50c7776bbcff559f8eeb8ca49bcd3cd74ffdf18a8bf044c7598dd8e42e138",
"0xf6faf78113d029eaa07827417dcc50047539d35aea42a66e981fd46f0e3d795c",
"0xe37ac593f7d351adee8d47784dcdc8793589301e55237cde5238744144f6e697",
"0x5c1d9344c4aac3e00af95dae9f42e931d5520c093eaac680edd6969ef3598105",
"0x0e9a766055c9f9f59898f4ac8c5de48e4c5efb31a5b07c8115f409abfa4a93ec",
"0x4c8241ca505cb4e4ff956651a3e786b6513c7686066da779e5cb1d7da27dbd87",
"0xe56e29dc6fe718adad704ef3faff07afba991b1607a1ade70ae31ab83b5c8623",
"0x6e7d4214100c4fe7fde10756e19c25703f9e5dbb08394f2b126095c3870c9210"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

