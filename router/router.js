
let router = require("koa-router")()
let newAccountController = require("../controllers/newAccount")
let trasactionConytoller = require("../controllers/transaction")
let accountController = require("../controllers/account")
let tokenController = require("../controllers/token")

//获取创建钱包账户的页面
router.get("/newaccount", newAccountController.newAccountHtml)
//提交创建钱包账户的表单
router.post("/newaccount", newAccountController.newAccount)

//获取转账的页面
router.get("/transaction", trasactionConytoller.transactionHtml)
//发送交易
router.post("/sendtransaction", trasactionConytoller.sendTransaction)
//查看交易详情
router.get("/checktransaction", trasactionConytoller.checkTransactionHtml)
router.post("/checktransaction", trasactionConytoller.checkTransaction)

//通过私钥解锁账户
router.post("/privateunlock", accountController.unlockAccountWithPrivate)
//通过配置文件解锁账户
router.post("/keystoreunlock", accountController.unlockAccountWithKeystore)

//ｔｏｋｅｎ转账
router.post("/sendtoken", tokenController.sendTokenTransaction)

module.exports = router
