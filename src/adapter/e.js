/*
 * @Author: leo 
 * @Date: 2018-11-01 16:16:17 
 * @Last Modified by: leo
 * @Last Modified time: 2018-11-02 16:18:35
 * @description E应用适配器
 */
module.exports=function(request, responseCallback) {
  var con = {
      method: request.method,
      url: request.url,
      dataType: request.dataType || 'json',
      headers: request.headers,
      data: request.body||{},
      success(res) {
          responseCallback({
              statusCode: res.status,
              responseText: res.data,
              headers: res.header,
              statusMessage: res.errMsg
          })
      },
      fail(res) {
          responseCallback({
              statusCode: res.status||0,
              statusMessage: res.errMsg
          })
      }
  }
  dd.httpRequest(con)
}
