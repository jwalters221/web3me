var Web3 = require("web3") 
var web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getTransactionCount('0x58a804708f59413c463b56728760530F6d13293c').then(console.log)