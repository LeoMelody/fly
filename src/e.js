//E应用入口
var  Fly=require("./fly")
var EngineWrapper = require("./engine-wrapper")
var adapter = require("./adapter/e")
var eEngine = EngineWrapper(adapter)
module.exports=function (engine) {
    return new Fly(engine||eEngine);
}