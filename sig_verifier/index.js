'use strict';
const SigUtil = require('eth-sig-util')

    // const body = JSON.parse(event['body']);
    const message = 'Hoge!'
    const signature = '0xe46faefc297bb3206279fd12f256c8c2e11a1881e7354f1406a5f9cbf873f58052db75d8c6661e71b3a703f6236e47d613f73fcfe6638e46ffbfd5444cb757ca1b'
    const msgParams = {
        data: message,
        sig: signature
    }

    const address = SigUtil.recoverPersonalSignature(msgParams)
    console.log('@@@@@@@@@@@@@@@@@')
    console.log(address)
    
